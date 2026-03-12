import React, { useState, useMemo } from 'react'
import FilterPanel from '../components/FilterPanel.jsx'
import ToolGrid from '../components/ToolGrid.jsx'
import tools from '../data/tools.json'

const INITIAL_FILTERS = {
  tasks: [],
  languages: [],
  costs: [],
  integrations: [],
  maturity: [],
}

const TASK_LABELS = {
  subject_indexing:    'Subject indexing',
  classification:      'Classification',
  transcription:       'Transcription',
  metadata_enrichment: 'Metadata enrichment',
  quality_control:     'Quality control',
  authority_control:   'Authority control',
}

const LANG_LABELS = {
  swedish:     'Swedish',
  finnish:     'Finnish',
  norwegian:   'Norwegian',
  danish:      'Danish',
  multilingual: 'Multilingual',
}

const COST_LABELS = {
  open_source:   'Open source',
  free_tier:     'Free',
  freemium:      'Freemium',
  institutional: 'Institutional',
  paid:          'Paid',
}

const INTEGRATION_LABELS = {
  libris:     'Libris',
  koha:       'Koha',
  ebsco:      'EBSCO',
  bibframe:   'BIBFRAME',
  api:        'API',
  standalone: 'Standalone',
}

const MATURITY_LABELS = {
  production: 'Production-ready',
  beta:       'Beta',
  research:   'Research only',
}

function buildChips(filters) {
  const chips = []
  for (const v of filters.tasks) chips.push({ key: 'tasks', value: v, label: TASK_LABELS[v] })
  for (const v of filters.languages) chips.push({ key: 'languages', value: v, label: LANG_LABELS[v] })
  for (const v of filters.costs) chips.push({ key: 'costs', value: v, label: COST_LABELS[v] })
  for (const v of filters.integrations) chips.push({ key: 'integrations', value: v, label: INTEGRATION_LABELS[v] })
  for (const v of filters.maturity) chips.push({ key: 'maturity', value: v, label: MATURITY_LABELS[v] })
  return chips
}

export default function ExplorerPage() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      if (filters.tasks.length > 0 && !filters.tasks.some((t) => tool.tasks.includes(t))) return false
      if (filters.languages.length > 0 && !filters.languages.some((l) => tool.language_support.includes(l))) return false
      if (filters.costs.length > 0 && !filters.costs.includes(tool.cost_model)) return false
      if (filters.integrations.length > 0 && !filters.integrations.some((i) => tool.integrations.includes(i))) return false
      if (filters.maturity.length > 0 && !filters.maturity.includes(tool.maturity)) return false
      return true
    })
  }, [filters])

  const chips = buildChips(filters)

  function removeChip(key, value) {
    setFilters((prev) => ({ ...prev, [key]: prev[key].filter((v) => v !== value) }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Intro */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">AI Tool Explorer</h1>
        <p className="text-gray-600 text-sm max-w-2xl">
          Start with the task you need to solve. Each tool has been evaluated against a
          six-criterion rubric designed for Nordic cataloguing workflows.
          Scores reflect the state of the tool as verified below — apply your own professional judgement.
        </p>
      </div>

      {/* Active filter chips */}
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {chips.map((chip) => (
            <span key={`${chip.key}-${chip.value}`} className="filter-chip">
              {chip.label}
              <button
                onClick={() => removeChip(chip.key, chip.value)}
                className="ml-1 hover:text-red-200 font-bold leading-none"
                aria-label={`Remove ${chip.label} filter`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        <FilterPanel
          filters={filters}
          onChange={setFilters}
          totalCount={tools.length}
          filteredCount={filteredTools.length}
        />
        <main className="flex-1 min-w-0">
          <ToolGrid tools={filteredTools} />
        </main>
      </div>
    </div>
  )
}
