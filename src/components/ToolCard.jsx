import React, { useState } from 'react'

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

const ETHICS_CLASSES = {
  high:   'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800',
  medium: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800',
  low:    'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800',
}

const MATURITY_CLASSES = {
  production: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 text-green-800',
  beta:       'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-orange-100 text-orange-800',
  research:   'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-purple-100 text-purple-800',
}

const ETHICS_LABELS = {
  high:   'Ethics: High',
  medium: 'Ethics: Medium',
  low:    'Ethics: Low',
}

const MATURITY_LABELS = {
  production: 'Production',
  beta:       'Beta',
  research:   'Research',
}

export default function ToolCard({ tool }) {
  const [showSv, setShowSv] = useState(false)
  const hasSv = tool.description_sv && !tool.description_sv.startsWith('TODO')

  const description = showSv ? tool.description_sv : tool.description_en
  const notes = showSv && tool.notes_sv && !tool.notes_sv.startsWith('TODO')
    ? tool.notes_sv
    : tool.notes_en

  return (
    <article className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-base font-bold text-gray-900">{tool.name}</h3>
          <span className={MATURITY_CLASSES[tool.maturity]}>
            {MATURITY_LABELS[tool.maturity]}
          </span>
        </div>
        {hasSv && (
          <button
            onClick={() => setShowSv((s) => !s)}
            className="text-xs font-medium px-2 py-1 rounded border border-gray-300 text-gray-500 hover:border-nordic-teal hover:text-nordic-teal transition-colors flex-shrink-0"
            title="Toggle English / Swedish"
          >
            {showSv ? 'EN' : 'SV'}
          </button>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

      {/* Limitation */}
      <div className="bg-amber-50 border-l-2 border-amber-400 px-3 py-2 rounded-r text-xs text-amber-900">
        <span className="font-semibold">Limitation: </span>
        {notes}
      </div>

      {/* Rubric badges */}
      <div className="flex flex-wrap gap-1.5">
        {tool.tasks.map((t) => (
          <span key={t} className="badge-task">{TASK_LABELS[t]}</span>
        ))}
        {tool.language_support.map((l) => (
          <span key={l} className="badge-lang">{LANG_LABELS[l]}</span>
        ))}
        <span className="badge-cost">{COST_LABELS[tool.cost_model]}</span>
        <span className={ETHICS_CLASSES[tool.ethics_score]}>
          {ETHICS_LABELS[tool.ethics_score]}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-400">Verified {tool.last_verified}</span>
        <div className="flex gap-3">
          {tool.official_url && (
            <a
              href={tool.official_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-nordic-teal hover:underline"
            >
              Official site →
            </a>
          )}
          {tool.huggingface_url && (
            <a
              href={tool.huggingface_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-purple-600 hover:underline"
            >
              HuggingFace →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
