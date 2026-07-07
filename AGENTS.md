# biblioteks-ai — Project Instructions

> Global instructions: `C:\Users\luzia\OneDrive\Claude-Cowork\INSTRUCTIONS.md`
> Routing map: `C:\Users\luzia\OneDrive\Claude-Cowork\AI-CONTEXT.md`

## Project Role

AI tool comparison project for Nordic librarians. Six-criteria evaluation rubric.
Phase 0 (seed data) and Phase 1 are complete. Phase 2 — expanding tool coverage beyond the
original 11 — is underway; see `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai-status.md`
for the current batch status.

## Source of Truth

| Layer | Location |
|---|---|
| Code | This repository |
| Project status | `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai-status.md` |
| Durable knowledge | `C:\Users\luzia\OneDrive\Knowledge vault\01_Projects\biblioteks-ai.md` |
| Active registry | `C:\Users\luzia\OneDrive\Claude-Cowork\projects\active-projects.md` |

Before implementation work, also read:
- `C:\Users\luzia\OneDrive\Claude-Cowork\AI-CONTEXT.md`
- `C:\Users\luzia\OneDrive\Claude-Cowork\memory\current-focus.md` (when continuity matters)

## Stack

- Framework: React 18 + Vite 6
- Styling: Tailwind CSS 3.4 with PostCSS
- No external animation library

## Commands

```
npm run dev
npm run build
npm run preview
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
