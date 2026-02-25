import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchMovieDetails, posterUrl } from '../Api'

export default function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
    fetchMovieDetails(id)
      .then(setMovie)
      .catch(() => setError('Could not load movie details'))
  }, [id])

  if (error) return <div className="container"><p className="error">{error}</p></div>
  if (!movie) return <div className="container"><p className="muted">Loading...</p></div>

  return (
    <div className="container details">
      <Link to="/" className="back">← Back</Link>
      <div className="details-inner">
        <div className="poster">
          {movie.poster_path ? (
            <img src={posterUrl(movie.poster_path, 'w500')} alt={movie.title} />
          ) : (
            <div className="no-poster large">No Image</div>
          )}
        </div>
        <div className="meta">
          <h1>{movie.title}</h1>
          <p className="muted">{movie.release_date} • {movie.runtime} min</p>
          <p className="overview">{movie.overview}</p>
          <p className="muted">Genres: {movie.genres.map(g => g.name).join(', ')}</p>
          <a href={`https://www.imdb.com/title/${movie.imdb_id ?? ''}`} target="_blank" rel="noreferrer" className="button">View on IMDB</a>
        </div>
      </div>
    </div>
  )
}