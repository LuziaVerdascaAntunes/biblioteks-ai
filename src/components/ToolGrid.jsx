import React from 'react'
import ToolCard from './ToolCard.jsx'

export default function ToolGrid({ tools }) {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-gray-600 font-medium">No tools match your current filters.</p>
        <p className="text-sm text-gray-400 mt-1">Try removing some filters to broaden the search.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  )
}
