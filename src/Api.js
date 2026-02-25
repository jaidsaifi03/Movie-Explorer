const BASE = 'https://api.themoviedb.org/3'
const KEY = "60711fa016565a98f818655b484fbd60"

if (!KEY) console.warn('VITE_TMDB_API_KEY is not set');

export async function fetchMovies({ query = '', page = 1 } = {}) {
  const url = query
    ? `${BASE}/search/movie?api_key=${KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`
    : `${BASE}/movie/popular?api_key=${KEY}&language=en-US&page=${page}`
console.log(url);
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch movies')
  const data = await res.json()
  return data // contains results, page, total_pages
}

export async function fetchMovieDetails(id) {
  const url = `${BASE}/movie/${id}?api_key=${KEY}&language=en-US`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch movie details')
  return res.json()
}

export function posterUrl(path, size = 'w500') {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : null
}