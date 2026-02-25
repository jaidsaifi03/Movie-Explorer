import React, { useEffect, useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Nav from './Components/Nav'
import SearchBar from './Components/SearchBar'
import MovieGrid from './Components/MovieGrid'
import MovieDetails from './Components/MovieDetails'
import Pagination from './Components/Pagination'
import { fetchMovies } from './Api'

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [pageData, setPageData] = useState({ page: 1, total_pages: 1 })

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const page = Number(searchParams.get('page') || 1)

  useEffect(() => {
    setLoading(true)
    setError('')
    fetchMovies({ query, page })
      .then((data) => {
        setMovies(data.results || [])
        setPageData({ page: data.page || 1, total_pages: data.total_pages || 1 })
        setLoading(false)
      })
      .catch(() => setError('Failed to load movies.'))
      // .finally(() => setLoading(false))
  }, [query, page])

  function handleSearch(q) {
    const params = {}
    if (q) params.q = q
    setSearchParams({ ...params, page: 1 })
  }

  function handlePageChange(p) {
    const params = {}
    if (query) params.q = query
    params.page = p
    setSearchParams(params)
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={
          <main>
            <header className="hero">
              <div className="container hero-inner">
                <h2>Discover Movies</h2>
                <p className="muted">Search, browse popular movies, and view details.</p>
                <SearchBar onSearch={handleSearch} />
              </div>
            </header>

            <section className="container">
              {error && <p className="error">{error}</p>}
              {loading ? (
                <p className="muted">Loading...</p>
              ) : (
                <>
                  <MovieGrid movies={movies} />
                  <Pagination page={pageData.page} totalPages={pageData.total_pages} onChange={handlePageChange} />
                </>
              )}
            </section>
          </main>
        } />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}
