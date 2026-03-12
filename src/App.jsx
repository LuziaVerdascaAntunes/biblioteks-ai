import React, { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ExplorerPage from './pages/ExplorerPage.jsx'
import RubricPage from './pages/RubricPage.jsx'
import LandscapePage from './pages/LandscapePage.jsx'

export default function App() {
  const [page, setPage] = useState('explorer')

  const pages = {
    explorer: <ExplorerPage />,
    rubric: <RubricPage />,
    landscape: <LandscapePage />,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar activePage={page} onNavigate={setPage} />
      <div className="flex-1">
        {pages[page]}
      </div>
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>Biblioteks-AI · Part of the <a href="https://luziaverdascaantunes.com/projects" target="_blank" rel="noopener noreferrer" className="hover:underline">luziaverdascaantunes.com</a> portfolio</span>
          <span>MIT licence · Open source</span>
        </div>
      </footer>
    </div>
  )
}
