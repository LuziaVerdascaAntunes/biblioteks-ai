import React, { useState } from 'react'

const SECTIONS = [
  {
    title: 'Why Sweden leads on library AI',
    body: `The National Library of Sweden (Kungliga biblioteket, KB) operates KBLab — a dedicated AI research unit that has produced production-quality NLP models trained on legal deposit collections. The key constraint that made this possible: Sweden has one of the longest-running legal deposit regimes in the world, producing a high-quality, consistent Swedish-language text corpus spanning centuries.

KB-BERT and KB-Whisper are the two most practically relevant outputs of this work. Both are openly published, model-carded, and actively maintained. No equivalent institution in Norway, Denmark, or Finland has reached the same deployment scale — though the National Library of Finland's Finna infrastructure and the Annif project demonstrate comparable ambition at the cataloguing layer.`,
  },
  {
    title: 'The Annif ecosystem',
    body: `Annif is the most mature AI tool in active production use across Nordic libraries. Developed at the National Library of Finland and now maintained as an open-source project, it automates subject indexing using a suite of interchangeable backends — from simple TF-IDF to neural models.

The critical design decision in Annif is that it learns from your data, not from a generic corpus. This makes it both more accurate (when you have sufficient training records) and more honest (the model's performance is directly traceable to the quality of your existing cataloguing). Several Swedish university libraries now run Annif in semi-automated workflows where the model suggests headings and a cataloguer approves or overrides.`,
  },
  {
    title: 'European context: CENL and LIBER',
    body: `The Conference of European National Librarians (CENL) and the Association of European Research Libraries (LIBER) are the two institutional frameworks shaping AI adoption across the continent. Both have published AI policy statements — LIBER's is the more technically detailed and is worth reading alongside this tool's rubric.

The European context matters for Nordic libraries because GDPR directly governs what AI tools can do with patron and collection data. Any tool that sends metadata or patron queries to external servers requires a GDPR assessment. The Biblioteks-AI rubric's ethics criterion is designed to flag this risk — tools scoring Low on ethical transparency are the ones most likely to require legal review before deployment.`,
  },
  {
    title: 'What is not in the tool list — and why',
    body: `General-purpose large language models (ChatGPT, Claude, Gemini) are deliberately excluded from the seed set. This is not because they are unhelpful — cataloguers are already using them for tasks like drafting descriptions or interpreting unfamiliar subject matter. It is because they do not map reliably to specific cataloguing tasks in a way that can be evaluated at the rubric level.

The tool list is also not a list of recommendations. It is a set of evaluated options. EBSCO AI Insights is included because most Nordic academic libraries have EBSCO contracts and will encounter it regardless of what Biblioteks-AI recommends. Undermind.ai is included to represent the RAG-based search category that vendors are aggressively pitching. The rubric scores tell the rest of the story.`,
  },
]

export default function LandscapePage() {
  const [showSv, setShowSv] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Nordic AI Landscape</h1>
          <p className="text-gray-600 text-sm max-w-2xl">
            Context for understanding why certain tools exist, what institutional infrastructure
            supports them, and where the Nordic region sits in the European AI landscape.
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
            KB och KBLab leder det nordiska biblioteks-AI-arbetet med öppna modeller som KB-BERT och
            KB-Whisper. Annif från Nationalbiblioteket i Finland är det mest produktionsmogna verktyget
            för ämnesindexering. Europeisk kontext (CENL, LIBER) och GDPR påverkar direkt vilka verktyg
            som är lämpliga för nordiska bibliotek.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {SECTIONS.map((section, i) => (
          <section key={i} className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-3 text-lg">{section.title}</h2>
            {section.body.split('\n\n').map((para, j) => (
              <p key={j} className="text-sm text-gray-700 leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* Resources */}
      <div className="mt-8 bg-gray-50 rounded-xl border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-900 mb-3">Key links</h2>
        <ul className="space-y-2 text-sm">
          {[
            { label: 'KBLab — National Library of Sweden AI research', url: 'https://kb.se/samverkan-och-utveckling/forskning-och-innovation/kblab.html' },
            { label: 'Annif project', url: 'https://annif.org' },
            { label: 'LIBER AI Working Group', url: 'https://libereurope.eu/working-group/liber-ai-working-group/' },
            { label: 'KBLab on Hugging Face', url: 'https://huggingface.co/KBLab' },
          ].map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nordic-teal hover:underline"
              >
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
