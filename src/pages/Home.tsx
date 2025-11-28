import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { api, apiKey } from "../services/api";

const Home = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);

  const getTopRatedMovies = async () => {
    try {
      // Busca os filmes "top_rated" na API do TMDB
      const res = await api.get("movie/top_rated", {
        params: {
          api_key: apiKey,
          language: "pt-BR", // Para vir a descrição em Português
        },
      });

      setTopMovies(res.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
        Melhores Filmes 🏆
      </h2>

      {/* Grid Responsivo: 1 coluna no telemóvel, 4 no PC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {topMovies.length === 0 && <p>A carregar...</p>}

        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
