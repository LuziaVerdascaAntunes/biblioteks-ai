# biblioteks-ai — Project Instructions

> Global instructions: `C:\Users\luzia\OneDrive\Claude-Cowork\INSTRUCTIONS.md`
> Routing map: `C:\Users\luzia\OneDrive\Claude-Cowork\AI-CONTEXT.md`

## Project Role

AI tool comparison project for Nordic librarians. Six-criteria evaluation rubric.

**Updated 2026-08-01.** Phases 0 and 1 are complete, and **Phase 2 batch 2 was merged on 2026-07-07
(PR #1)**: the live site serves **16 tools**, up from the original 11. The five added close the
Nordic national-tooling gap — NB-BERT and NB-Whisper (National Library of Norway), FinBERT/TurkuNLP
(Finland), DanskBERT (Denmark) — plus Transkribus, the first handwritten/printed-document entry.
This section previously said Phase 2 was "underway", which stopped being true five weeks ago.
Current status: `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai-status.md`.

## Source of Truth

| Layer | Location |
|---|---|
| Code | This repository |
| Project status | `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai-status.md` |
| Surfaces map | `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai\SURFACES.md` |
| Active registry | `C:\Users\luzia\OneDrive\Claude-Cowork\projects\active-projects.md` |

Before implementation work, also read:
- `C:\Users\luzia\OneDrive\Claude-Cowork\AI-CONTEXT.md`
- `C:\Users\luzia\OneDrive\Claude-Cowork\memory\current-focus.md` (when continuity matters)

**Corrected 2026-08-01:** the durable-knowledge row above used to point at
`OneDrive\Knowledge vault\01_Projects\biblioteks-ai.md`. That path is wrong twice over — the
OneDrive vault root was an empty shell removed on 2026-07-03, and the live vault at
`C:\Users\luzia\Knowledge vault` has no `01_Projects` folder. Nothing was ever read from it.

## Stack

- Framework: React 18 + Vite 6
- Styling: Tailwind CSS 3.4 with PostCSS
- No external animation library

## Commands

```
npm run dev
npm run build
npm run preview
npm test          # vitest, 13 tests over tools.json integrity
```

Run `npm run build` after changes affecting source code, configuration, or `tools.json` data.

## Skill Routing

- Frontend/UI task (React, HTML, CSS, layout, styling) → always use **`/frontend-design`** skill
- Non-UI task (APIs, data, scripts, config) → do not use frontend-design

## Git Workflow

- Never work directly on main
- Check active branch at session start; create a branch before making changes
- Confirm branch name before creating (examples: `feature-search`, `ui-updates`, `fix-filters`)

## Working Rules

- Preserve existing uncommitted user changes.
- Do not delete files; move retired material to an archive folder with a dated name.
- Keep generated dependencies and caches out of OneDrive.
- Keep data decisions traceable in the vault or status file, not only in code comments.
- After meaningful changes, update the Claude-Cowork project status or session log.

## Constraints — things that look like bugs but are deliberate

- **`src/data/tools.json` is the product.** Schema changes there break the 13-test vitest suite by
  design. Run `npm test` before committing any data edit.
- **Deployment is GitHub Pages via Actions on push to `main`** (`.github/workflows/deploy.yml`,
  publishes `dist`). There is no manual deploy step.
- **The claude.ai project's uploaded PDFs are not a stale source snapshot.** They are a curated
  research library — the SOU 2025 AI-kommissionen report, twelve-plus peer-reviewed papers on AI in
  cataloguing, and the PRD. An audit once recommended deleting them as "33% of capacity"; that would
  have destroyed the reading list and left the two actual source files untouched. Keep them.
- **`CLAUDE.md` is a pointer, not a manual.** Its substance belongs here.
