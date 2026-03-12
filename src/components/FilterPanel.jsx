import React, { useState } from 'react'

const TASK_OPTIONS = [
  { value: 'subject_indexing',    label: 'Subject indexing' },
  { value: 'classification',      label: 'Classification' },
  { value: 'transcription',       label: 'Transcription' },
  { value: 'metadata_enrichment', label: 'Metadata enrichment' },
  { value: 'quality_control',     label: 'Quality control' },
  { value: 'authority_control',   label: 'Authority control' },
]

const LANG_OPTIONS = [
  { value: 'swedish',    label: 'Swedish' },
  { value: 'finnish',    label: 'Finnish' },
  { value: 'norwegian',  label: 'Norwegian' },
  { value: 'danish',     label: 'Danish' },
  { value: 'multilingual', label: 'Multilingual' },
]

const COST_OPTIONS = [
  { value: 'open_source',  label: 'Open source' },
  { value: 'free_tier',    label: 'Free tier' },
  { value: 'freemium',     label: 'Freemium' },
  { value: 'institutional', label: 'Institutional licence' },
  { value: 'paid',         label: 'Paid' },
]

const INTEGRATION_OPTIONS = [
  { value: 'libris',     label: 'Libris' },
  { value: 'koha',       label: 'Koha' },
  { value: 'ebsco',      label: 'EBSCO' },
  { value: 'bibframe',   label: 'BIBFRAME' },
  { value: 'api',        label: 'API' },
  { value: 'standalone', label: 'Standalone' },
]

const MATURITY_OPTIONS = [
  { value: 'production', label: 'Production-ready' },
  { value: 'beta',       label: 'Beta / experimental' },
  { value: 'research',   label: 'Research only' },
]

function FilterGroup({ title, options, selected, onChange }) {
  const [open, setOpen] = useState(true)

  function toggle(value) {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    )
  }

  return (
    <div className="border-b border-gray-200 pb-3 mb-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 mb-2 hover:text-nordic-blue transition-colors"
      >
        <span>{title}</span>
        <span className="text-gray-400">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="flex flex-wrap gap-1.5">
          {options.map((opt) => {
            const active = selected.includes(opt.value)
            return (
              <button
                key={opt.value}
                onClick={() => toggle(opt.value)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                  active
                    ? 'bg-nordic-blue text-white border-nordic-blue'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-nordic-blue hover:text-nordic-blue'
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function FilterPanel({ filters, onChange, totalCount, filteredCount }) {
  function update(key) {
    return (value) => onChange({ ...filters, [key]: value })
  }

  const hasActiveFilters = Object.values(filters).some((arr) => arr.length > 0)

  function clearAll() {
    onChange({ tasks: [], languages: [], costs: [], integrations: [], maturity: [] })
  }

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            Filter tools
          </h2>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-xs text-nordic-teal hover:underline font-medium"
            >
              Clear all
            </button>
          )}
        </div>

        <p className="text-xs text-gray-500 mb-4">
          Showing <span className="font-semibold text-gray-800">{filteredCount}</span> of{' '}
          {totalCount} tools
        </p>

        <FilterGroup
          title="Workflow task"
          options={TASK_OPTIONS}
          selected={filters.tasks}
          onChange={update('tasks')}
        />
        <FilterGroup
          title="Nordic language support"
          options={LANG_OPTIONS}
          selected={filters.languages}
          onChange={update('languages')}
        />

        <details className="mt-1">
          <summary className="text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700 mb-2 select-none">
            More filters
          </summary>
          <div className="mt-3">
            <FilterGroup
              title="Cost model"
              options={COST_OPTIONS}
              selected={filters.costs}
              onChange={update('costs')}
            />
            <FilterGroup
              title="Integration fit"
              options={INTEGRATION_OPTIONS}
              selected={filters.integrations}
              onChange={update('integrations')}
            />
            <FilterGroup
              title="Maturity level"
              options={MATURITY_OPTIONS}
              selected={filters.maturity}
              onChange={update('maturity')}
            />
          </div>
        </details>
      </div>
    </aside>
  )
}
