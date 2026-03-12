import React, { useState } from 'react'

const CRITERIA = [
  {
    name: 'Nordic language support',
    what: 'Does the tool actually work with Swedish, Finnish, Norwegian, or Danish-language material — not just claim multilingual support?',
    scoring: 'Low / Medium / High',
    notes: 'A tool trained on English corpora will score Low even if marketed as multilingual.',
  },
  {
    name: 'Workflow fit',
    what: 'Which specific cataloguing tasks does it concretely address? Can you point to a real workflow step it replaces or accelerates?',
    scoring: 'Tags: subject_indexing · classification · transcription · metadata_enrichment · quality_control · authority_control',
    notes: 'General-purpose AI tools (e.g. ChatGPT) are excluded from the seed set because they do not map reliably to specific cataloguing tasks.',
  },
  {
    name: 'Openness & cost',
    what: 'Is the tool open source, freely available, freemium, institutional-licence, or paid? Can a public library use it without a procurement process?',
    scoring: 'Category: open_source · free_tier · freemium · institutional · paid',
    notes: 'Open source does not automatically mean low deployment cost — consider infrastructure and maintenance.',
  },
  {
    name: 'Integration potential',
    what: 'Does the tool offer documented integration paths with systems commonly used in Nordic libraries?',
    scoring: 'Tags: Libris · Koha · EBSCO · BIBFRAME · API · Standalone',
    notes: 'API availability is a minimum signal. An API without documentation or a stable SDK should not score highly.',
  },
  {
    name: 'Ethical transparency',
    what: 'Is bias testing documented? Is training data provenance disclosed? Is the model explainable at a level useful for a cataloguing professional?',
    scoring: 'Low / Medium / High',
    notes: 'This criterion rewards honesty. A tool that acknowledges known biases and explains mitigation scores Medium or High. A tool that makes no statement scores Low by default.',
  },
  {
    name: 'Practical maturity',
    what: 'Has the tool been tested in production library environments, or is it experimental or research-stage? Is there documented deployment evidence?',
    scoring: 'Production · Beta/experimental · Research only  +  last_verified date',
    notes: 'Research only is not a disqualifier — it signals that the tool requires domain expertise to evaluate. Human judgment required on all tools regardless of maturity level.',
  },
]

export default function RubricPage() {
  const [showSv, setShowSv] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">The Evaluation Rubric</h1>
          <p className="text-gray-600 text-sm max-w-2xl">
            Every tool in Biblioteks-AI is scored against these six criteria.
            The rubric is published openly so that any library can run their own evaluation.
          </p>
        </div>
        <button
          onClick={() => setShowSv((s) => !s)}
          className="text-xs font-medium px-3 py-1.5 rounded border border-gray-300 text-gray-500 hover:border-nordic-teal hover:text-nordic-teal transition-colors flex-shrink-0"
        >
          {showSv ? 'Show EN' : 'Visa SV'}
        </button>
      </div>

      {showSv && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-800">
          <p className="font-semibold mb-1">Svenska sammanfattning</p>
          <p>
            Utvärderingsrubrik för AI-verktyg i nordiska biblioteksflöden. Sex kriterier mäter
            nordiskt språkstöd, arbetsflödesanpassning, öppenhet och kostnad, integrationsmöjligheter,
            etisk transparens samt praktisk mognad. Alla verktyg poängsätts mot dessa kriterier —
            mänskligt omdöme krävs alltid som komplement.
          </p>
        </div>
      )}

      {/* Criteria table */}
      <div className="space-y-4 mb-8">
        {CRITERIA.map((c, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="font-semibold text-gray-900">{c.name}</h2>
              <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded flex-shrink-0">
                {c.scoring}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2">{c.what}</p>
            <p className="text-xs text-gray-500 italic">{c.notes}</p>
          </div>
        ))}
      </div>

      {/* Download section */}
      <div className="bg-nordic-sand rounded-xl p-5 border border-gray-200">
        <h2 className="font-semibold text-gray-900 mb-1">Run your own evaluation</h2>
        <p className="text-sm text-gray-600 mb-3">
          Download the CSV template to evaluate tools relevant to your own institution.
          The rubric is the same one used here — applying it yourself produces a score
          grounded in your specific collection, system landscape, and professional context.
        </p>
        <a
          href="rubric-template.csv"
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-nordic-blue text-white rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors"
        >
          ↓ Download rubric template (CSV)
        </a>
        <p className="text-xs text-gray-400 mt-2">
          MIT licence · Free to adapt and republish
        </p>
      </div>
    </div>
  )
}
