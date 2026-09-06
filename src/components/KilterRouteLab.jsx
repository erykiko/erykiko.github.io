import { useEffect, useState } from 'react'
import { generateRoute, loadCatalog } from './kilterModel.js'

function previewHoles(width = 12, height = 14) {
  return Array.from({ length: width * height }, (_, index) => ({ id: index + 1, x: index % width, y: Math.floor(index / width) }))
}

function fallbackRouteForBoard(board) {
  const holes = board.holes?.length ? board.holes : previewHoles(board.width, board.height)
  const indexes = [15, 39, 62, 86, 109, 134, 158, 163, 167]
  return indexes.map((index, routeIndex) => ({
    holeId: holes[index % holes.length].id,
    role: routeIndex === 0 ? 'start' : routeIndex === indexes.length - 1 ? 'finish' : [3, 6].includes(routeIndex) ? 'foot' : 'middle',
  }))
}

function Board({ board, route }) {
  const holes = board.holes?.length ? board.holes : previewHoles(board.width, board.height)
  const activeHoles = new Map(route.map((hold) => [hold.holeId, hold]))
  const maxX = Math.max(...holes.map((hole) => hole.x), board.width - 1)
  const maxY = Math.max(...holes.map((hole) => hole.y), board.height - 1)
  const size = 560
  const pad = 34
  const point = (hole) => ({ x: pad + (hole.x / Math.max(maxX, 1)) * (size - pad * 2), y: pad + (hole.y / Math.max(maxY, 1)) * (size - pad * 2) })
  return (
    <div className="kilter-board-wrap">
      <svg className="kilter-board" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Kilter Board route">
        <defs><pattern id="kilter-board-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(24,33,43,.12)" /></pattern></defs>
        <rect width={size} height={size} rx="18" fill="url(#kilter-board-grid)" />
        {holes.map((hole) => {
          const position = point(hole)
          const active = activeHoles.has(hole.id)
          return <g key={hole.id} transform={`translate(${position.x} ${position.y})`} className={active ? 'kilter-hold active' : 'kilter-hold'}><circle r={active ? 7 : 3.5} /></g>
        })}
      </svg>
      {!board.holes?.length && <span className="kilter-preview-label">Preview geometry</span>}
    </div>
  )
}

export default function KilterRouteLab() {
  const [catalog, setCatalog] = useState(null)
  const [layout, setLayout] = useState('1270')
  const [grade, setGrade] = useState('1239')
  const [greedy, setGreedy] = useState(false)
  const [temperature, setTemperature] = useState(1.15)
  const [route, setRoute] = useState([])
  const [status, setStatus] = useState('Preview route loaded')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    loadCatalog().then((data) => {
      setCatalog(data)
      setRoute(fallbackRouteForBoard(data.boards?.[layout] || { width: 12, height: 14, holes: [] }))
    }).catch(() => setCatalog({ boards: {} }))
  }, [])
  const board = catalog?.boards?.[layout] || { name: '12 x 14 Commercial', width: 12, height: 14, holes: [] }
  const metadata = catalog?.metadata
  const layouts = ['1270']
  const grades = Object.keys(metadata?.grade_to_idx || {}).sort((a, b) => metadata.grade_to_idx[a] - metadata.grade_to_idx[b])
  const fallbackRoute = fallbackRouteForBoard(board)

  async function generate() {
    setBusy(true)
    setStatus('Generating in your browser...')
    try {
      const result = await generateRoute({ layout, grade, greedy, temperature })
      setRoute(result?.length ? result : fallbackRoute)
      setStatus(result?.length ? 'Generated locally; model stays in your browser' : 'Preview route loaded; export model assets for inference')
    } catch (error) {
      setStatus(`Preview mode; ${error.message}`)
      setRoute(fallbackRoute)
    } finally { setBusy(false) }
  }

  return (
    <section className="kilter-lab" aria-label="Kilter route generation demo">
      <div className="kilter-lab-intro"><div><p className="eyebrow">Interactive project preview</p><p>Generate routes from a board layout and grade. The model is designed to run locally in your browser, with no server required.</p></div></div>
      <div className="kilter-workspace">
        <div className="kilter-panel kilter-board-panel"><div className="kilter-panel-head"><div><p className="kilter-eyebrow">Live preview - WEB DEMO is limited to one board layout</p></div><span className="kilter-route-count">{route.length} holds</span></div><Board board={board} route={route} /></div>
        <aside className="kilter-panel kilter-controls"><div className="kilter-panel-head"><div><p className="kilter-eyebrow">Route brief</p><h3>Set the intention</h3></div><span className="kilter-status-dot" /></div>
          <label>Board<select value={layout} onChange={(event) => { const value = event.target.value; setLayout(value); setRoute(fallbackRouteForBoard(catalog.boards[value])) }}>{layouts.map((value) => <option key={value} value={value}>{metadata?.layout_names?.[value] || catalog?.boards?.[value]?.name || value}</option>)}</select></label>
          <label>Grade<select value={grade} onChange={(event) => setGrade(event.target.value)}>{grades.map((value) => <option key={value} value={value}>{metadata?.grade_names?.[value] || value}</option>)}</select></label>
          <div className="kilter-range-label"><label>Temperature</label><output>{temperature.toFixed(2)}</output></div><input type="range" min="0.5" max="1.8" step="0.05" value={temperature} onChange={(event) => setTemperature(Number(event.target.value))} />
          <label className="kilter-toggle"><input type="checkbox" checked={greedy} onChange={(event) => setGreedy(event.target.checked)} /><span className="kilter-switch" /> deterministic / greedy</label>
          <button className="kilter-generate" onClick={generate} disabled={busy}>{busy ? 'Generating...' : 'Generate route  ->'}</button><p className="kilter-status">{status}</p>
        </aside>
      </div>
    </section>
  )
}
