import React from 'react'

const PAGES = [
  { id: 'explorer', label: 'Tool Explorer' },
  { id: 'rubric',   label: 'The Rubric' },
  { id: 'landscape', label: 'Nordic AI Landscape' },
]

export default function NavBar({ activePage, onNavigate }) {
  return (
    <header className="bg-nordic-blue text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-2">
          <div>
            <button
              onClick={() => onNavigate('explorer')}
              className="text-left group"
            >
              <span className="block text-lg font-bold tracking-tight group-hover:text-teal-200 transition-colors">
                Biblioteks-AI
              </span>
              <span className="block text-xs text-blue-200 font-normal">
                AI tools for Nordic librarians
              </span>
            </button>
          </div>

          <nav>
            <ul className="flex gap-1 sm:gap-2">
              {PAGES.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => onNavigate(page.id)}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      activePage === page.id
                        ? 'bg-white text-nordic-blue'
                        : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                    }`}
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
