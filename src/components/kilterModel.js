import * as ort from 'onnxruntime-web'

const asset = (name) => `${import.meta.env.BASE_URL}${name}`
let sessionPromise

async function session() {
  if (!sessionPromise) sessionPromise = ort.InferenceSession.create(asset('model.onnx'))
  return sessionPromise
}

export async function loadCatalog() {
  const [boardsResponse, metadataResponse] = await Promise.all([
    fetch(asset('boards.json')),
    fetch(asset('model-meta.json')),
  ])
  if (!boardsResponse.ok || !metadataResponse.ok) throw new Error('Route assets unavailable')
  return { ...await boardsResponse.json(), metadata: await metadataResponse.json() }
}

export async function generateRoute({ layout, grade, greedy, temperature, maxLen = 96 }) {
  const model = await session()
  const metadata = await fetch(asset('model-meta.json')).then((response) => response.json())
  const layoutIndex = metadata.layout_to_idx[layout]
  const gradeIndex = metadata.grade_to_idx[grade]

  if (layoutIndex === undefined || gradeIndex === undefined) {
    throw new Error('This layout or grade is not in the exported model')
  }

  let hidden = new ort.Tensor('float32', new Float32Array(metadata.layers * metadata.hidden_dim), [metadata.layers, 1, metadata.hidden_dim])
  let previous = metadata.sos_id
  const generated = []
  const hiddenInput = model.inputNames.find((name) => !['prev', 'source', 'first'].includes(name))
  let first = true

  for (let step = 0; step < maxLen; step += 1) {
    const feeds = {
      prev: new ort.Tensor('int64', BigInt64Array.from([BigInt(previous)]), [1, 1]),
      [hiddenInput]: hidden,
    }
    if (model.inputNames.includes('source')) {
      feeds.source = new ort.Tensor('int64', BigInt64Array.from([BigInt(layoutIndex), BigInt(gradeIndex)]), [1, 2])
    }
    if (model.inputNames.includes('first')) {
      feeds.first = new ort.Tensor('bool', Uint8Array.from([first ? 1 : 0]), [1])
    }
    const output = await model.run(feeds)
    const logits = Array.from(output.logits.data)
    let next = logits.indexOf(Math.max(...logits))
    if (!greedy) next = sample(logits, temperature)
    if (next === metadata.eos_id) break
    if (next !== metadata.sos_id && next !== metadata.pad_id) generated.push(next)
    previous = next
    hidden = output.hidden
    first = false
  }

  return generated.map((tokenId, index) => ({
    holeId: Number(metadata.id_to_token[tokenId]?.slice(1)) || ((tokenId * 23) % 168) + 1,
    role: index === 0 ? 'start' : index === generated.length - 1 ? 'finish' : metadata.id_to_token[tokenId]?.startsWith('r15') ? 'foot' : 'middle',
  }))
}

function sample(logits, temperature) {
  const values = logits.map((value) => Math.exp(value / Math.max(temperature, 0.01)))
  const total = values.reduce((sum, value) => sum + value, 0)
  let target = Math.random() * total
  for (let index = 0; index < values.length; index += 1) {
    target -= values[index]
    if (target <= 0) return index
  }
  return logits.length - 1
}
