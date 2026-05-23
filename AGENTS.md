# AGENTS.md

## Shared Context

Before implementation work, read:
- `C:\Users\luzia\OneDrive\Claude-Cowork\AI-CONTEXT.md`
- `C:\Users\luzia\OneDrive\Claude-Cowork\memory\current-focus.md` when continuity matters
- `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai-status.md`
- `C:\Users\luzia\OneDrive\Knowledge vault\01_Projects\biblioteks-ai.md`

## Project Role

AI tool comparison project for Nordic librarians. The current blocker is Phase 0 data work before later product/interface phases.

## Source Of Truth

- Code: this repository.
- Project status: `C:\Users\luzia\OneDrive\Claude-Cowork\projects\biblioteks-ai-status.md`.
- Durable project knowledge: `C:\Users\luzia\OneDrive\Knowledge vault\01_Projects\biblioteks-ai.md`.
- Active registry row: `C:\Users\luzia\OneDrive\Claude-Cowork\projects\active-projects.md`.

## Commands

- `npm run dev`
- `npm run build`
- `npm run preview`

## Working Rules

- Preserve existing uncommitted user changes.
- Do not delete files; move retired material to an archive folder with a dated name.
- Keep generated dependencies and caches out of OneDrive.
- Keep data decisions traceable in the vault or status file, not only in code comments.
- After meaningful changes, update the Claude-Cowork project status or session log so Hub/Codex/Claude can retrieve the current state.

## Validation

Run `npm run build` after implementation changes that affect source code, configuration, or data used by the app.
