import { useContext, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Header, Search, MovieCard } from './index';
import config from '../config/config';
import MovieContext from '../context/context';

function Home() {
  const [searchMovie, setSearchMovie] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [debouncedSearchMovie] = useDebounce(searchMovie, 500);

  const { movies, setMovies } = useContext(MovieContext)

  const fetchMovies = async () => {
    setError("")
    let url = ""
    try {
      setLoading(true)

      if (!searchMovie) {
        url = `${config.tmbd_base_url}/movie/popular?api_key=${config.tmdb_api_key}`;
      } else {
        url = `${config.tmbd_base_url}/search/movie?api_key=${config.tmdb_api_key}&query=${encodeURIComponent(searchMovie)}`;
      }

      const response = await fetch(url)

      const moviesData = await response.json()
      setMovies(moviesData.results)

      setLoading(false)

    } catch (error) {
      setError(error.message || "Something went wrong")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (debouncedSearchMovie || movies.length <= 0)
      fetchMovies()
  }, [debouncedSearchMovie])


  return (
    <>
      <section>
        <Header />
        <Search searcMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </section>
      <section>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            {movies?.length > 0 ? (
              <div className="flex flex-wrap gap-6 justify-center">
                {movies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <p>No movies found</p>
            )}
          </div>
        )}
      </section>
    </>
  )
}

export default Home
