# Repository Notes

- Single-package Vite + React app (ESM, `type: module`). Install with `npm install`. No tests, linter, type checker, or CI — the only verification step is `npm run build`.
- Commands:
  - `npm run dev` — local dev server
  - `npm run build` — production build
  - `npm run preview` — serve the production build locally
  - `npm run deploy` — runs `predeploy` (build), then `gh-pages -d dist` deploys to GitHub Pages
- Build lifecycle: `postbuild` copies `dist/index.html` to `dist/404.html` for GitHub Pages SPA routing. Do not edit `dist/` directly; `homepage` is `https://erykiko.github.io/`.
- Entry flow: `index.html` → `src/main.jsx` → `src/App.jsx`.
- Routing uses `BrowserRouter`: `/`, `/projects`, `/projects/:slug`, and a catch-all 404.
- `src/data/portfolio.js` is the source of truth for project metadata, slugs, facts, experience, activities, and education. Keep project `slug`s in sync with the routes in `src/App.jsx`. Project `stack` is an array of technology tags; `gallery` is an array of `{ src, alt }` screenshot objects (empty means placeholders are rendered). Set `enabled: false` on a project to hide it from project listings (direct `/projects/:slug` links still work).
- Directory conventions: shared UI in `src/components/`, route-level screens in `src/pages/`, global styles in `src/styles.css`.
- The homepage hero expects a portrait image at `/public/photo.jpg`; if missing, a placeholder is shown.
- Gallery items in `project.gallery` are rendered as video when the `src` ends in `.mp4`, `.webm`, `.mov`, or `.ogg` (autoplay, muted, loop); otherwise as an image.
- The `ml-kilter-route-generation` project page renders `KilterRouteLab`, which depends on `onnxruntime-web` and the runtime-loaded `public/` model assets (`model.onnx`, `model.onnx.data`, `model-meta.json`, `boards.json`). Do not remove them.
