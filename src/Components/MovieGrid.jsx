import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies }) {
  if (!movies || movies.length === 0) return <p className="muted">No results found.</p>
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  )
}
