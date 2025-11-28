import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { api, apiKey } from "../services/api";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<any[]>([]);

  // Pega o termo "q" da URL (ex: ?q=Batman -> query = "Batman")
  const query = searchParams.get("q");

  const getSearchedMovies = async (url: string) => {
    try {
      const res = await api.get(url);
      setMovies(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const searchWithQueryURL = `search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`;

    if (query) {
      getSearchedMovies(searchWithQueryURL);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
        Resultados para: <span className="text-yellow-500">{query}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length === 0 && <p>Nenhum filme encontrado...</p>}

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
