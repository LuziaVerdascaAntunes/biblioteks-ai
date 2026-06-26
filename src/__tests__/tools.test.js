import { describe, it, expect } from 'vitest'
import tools from '../data/tools.json'

const VALID_TASKS = ['subject_indexing', 'classification', 'transcription', 'metadata_enrichment', 'quality_control', 'authority_control']
const VALID_LANGS = ['swedish', 'finnish', 'norwegian', 'danish', 'multilingual', 'english', 'german', 'french', 'spanish', 'portuguese']
const VALID_COSTS = ['open_source', 'free_tier', 'freemium', 'institutional', 'paid']
const VALID_MATURITY = ['production', 'beta', 'research']
const VALID_ETHICS = ['high', 'medium', 'low', 'unknown']

// Pure filter function extracted from ExplorerPage
function filterTools(tools, filters, query = '') {
  const q = query.trim().toLowerCase()
  return tools.filter((tool) => {
    if (filters.tasks?.length > 0 && !filters.tasks.some((t) => tool.tasks.includes(t))) return false
    if (filters.languages?.length > 0 && !filters.languages.some((l) => tool.language_support.includes(l))) return false
    if (filters.costs?.length > 0 && !filters.costs.includes(tool.cost_model)) return false
    if (filters.integrations?.length > 0 && !filters.integrations.some((i) => tool.integrations.includes(i))) return false
    if (filters.maturity?.length > 0 && !filters.maturity.includes(tool.maturity)) return false
    if (q) {
      const haystack = [tool.name, tool.description_en, tool.description_sv, tool.notes_en, tool.notes_sv]
        .filter(Boolean).join(' ').toLowerCase()
      if (!haystack.includes(q)) return false
    }
    return true
  })
}

describe('tools.json — schema integrity', () => {
  it('loads at least one tool', () => {
    expect(tools.length).toBeGreaterThan(0)
  })

  it('every tool has required string fields', () => {
    for (const tool of tools) {
      expect(tool.id, `${tool.name} missing id`).toBeTruthy()
      expect(tool.name, `tool ${tool.id} missing name`).toBeTruthy()
      expect(tool.description_en, `${tool.id} missing description_en`).toBeTruthy()
    }
  })

  it('every tool has valid tasks array', () => {
    for (const tool of tools) {
      expect(Array.isArray(tool.tasks), `${tool.id} tasks not array`).toBe(true)
      expect(tool.tasks.length, `${tool.id} has no tasks`).toBeGreaterThan(0)
      for (const t of tool.tasks) {
        expect(VALID_TASKS, `${tool.id} has unknown task "${t}"`).toContain(t)
      }
    }
  })

  it('every tool has valid cost_model', () => {
    for (const tool of tools) {
      expect(VALID_COSTS, `${tool.id} cost_model "${tool.cost_model}" not in list`).toContain(tool.cost_model)
    }
  })

  it('every tool has valid maturity', () => {
    for (const tool of tools) {
      expect(VALID_MATURITY, `${tool.id} maturity "${tool.maturity}" not in list`).toContain(tool.maturity)
    }
  })

  it('every tool has valid ethics_score', () => {
    for (const tool of tools) {
      expect(VALID_ETHICS, `${tool.id} ethics_score "${tool.ethics_score}" not in list`).toContain(tool.ethics_score)
    }
  })

  it('all ids are unique', () => {
    const ids = tools.map((t) => t.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })
})

describe('filter logic', () => {
  it('no filters returns all tools', () => {
    expect(filterTools(tools, {})).toHaveLength(tools.length)
  })

  it('task filter returns only matching tools', () => {
    const result = filterTools(tools, { tasks: ['subject_indexing'] })
    expect(result.length).toBeGreaterThan(0)
    for (const t of result) {
      expect(t.tasks).toContain('subject_indexing')
    }
  })

  it('unknown task filter returns empty', () => {
    expect(filterTools(tools, { tasks: ['__nonexistent__'] })).toHaveLength(0)
  })

  it('cost filter narrows results', () => {
    const result = filterTools(tools, { costs: ['open_source'] })
    for (const t of result) {
      expect(t.cost_model).toBe('open_source')
    }
  })

  it('text query is case-insensitive and matches name', () => {
    const first = tools[0]
    const result = filterTools(tools, {}, first.name.toUpperCase())
    expect(result.some((t) => t.id === first.id)).toBe(true)
  })

  it('combined filters narrow further than single filter', () => {
    const byTask = filterTools(tools, { tasks: ['subject_indexing'] })
    const byTaskAndOpen = filterTools(tools, { tasks: ['subject_indexing'], costs: ['open_source'] })
    expect(byTaskAndOpen.length).toBeLessThanOrEqual(byTask.length)
  })
})
