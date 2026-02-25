import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  function submit(e) {
    e.preventDefault()
    onSearch(q.trim())
  }

  return (
    <form className="search" onSubmit={submit}>
      <input
        placeholder="Search movies..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  )
}
