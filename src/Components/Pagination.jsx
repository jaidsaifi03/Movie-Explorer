import React from 'react'

export default function Pagination({ page, totalPages, onChange }) {
  if (!totalPages || totalPages <= 1) return null

  function goto(p) {
    if (p < 1 || p > totalPages) return
    onChange(p)
  }

  return (
    <div className="pagination">
      <button onClick={() => goto(page - 1)} disabled={page === 1}>Prev</button>
      <span className="muted">Page {page} / {totalPages}</span>
      <button onClick={() => goto(page + 1)} disabled={page === totalPages}>Next</button>
    </div>
  )
}