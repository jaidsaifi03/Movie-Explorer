import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo">MovieExplorer</Link>
        <div className="nav-right">
          {/* <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" className="small">
            API: TMDB
          </a> */}
        </div>
      </div>
    </nav>
  )
}
