import React from 'react'
import { Link } from 'react-router-dom'
import { posterUrl } from '../Api';

export default function MovieCard({ movie }) {
  return (
    <article className="card">
      <Link to={`/movie/${movie.id}`} style={{textDecoration: "none"}}>
        <div className="poster-wrap">
          {movie.poster_path ? (
            <img src={posterUrl(movie.poster_path)} alt={movie.title} loading="lazy" />
          ) : (
            <div className="no-poster">No Image</div>
          )}
        </div>
        <div className="card-body">
          <h3>{movie.title}</h3>
          <p className="muted">{movie.release_date ? movie.release_date.slice(0, 4) : '—'}</p>
          <p className="rating">⭐ {movie.vote_average ?? '—'}</p>
        </div>
      </Link>
    </article>
  )
}
