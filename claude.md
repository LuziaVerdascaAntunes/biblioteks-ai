# Portfolio Project — Claude Instructions

## Skill Routing

For any task involving React components, pages, HTML/CSS layouts, or UI styling in this portfolio, always load and apply the **frontend-design** skill. This is mandatory for all frontend work — it ensures consistent typography, motion, color, and spatial composition across the portfolio.

- Frontend/UI task (React, HTML, CSS, layout, styling) → **always use frontend-design skill**
- Non-UI task (APIs, data, scripts, configuration) → do not use frontend-design

## Design Principles

This portfolio should feel distinctive and memorable — not generic. When using the frontend-design skill, commit fully to a bold aesthetic direction before writing any code. Avoid safe defaults like Inter/Roboto fonts, purple gradients, or predictable layouts.

## Stack

- Framework: React 18 + Vite 6
- Styling: Tailwind CSS 3.4 with PostCSS; Nordic-themed design token palette (nordic-blue, nordic-teal, nordic-sand, nordic-dark, nordic-muted)
- Animation: CSS animations via Tailwind; no external animation library

## Conventions

- Keep components modular and reusable
- Use CSS variables for all design tokens (colors, spacing, typography)
- Animate intentionally — one well-orchestrated effect beats scattered micro-interactions

## Git Workflow

- Never work directly on main
- At the start of every session, check which branch is active
- If on main, create a new branch before making any changes
- Suggest a descriptive branch name and ask for confirmation before creating it
- Examples: feature-search, ui-updates, ai-integration, fix-filters
