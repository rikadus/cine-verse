import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Wallet,
  Clock,
  Star,
  FileText,
  DollarSign,
  Calendar,
} from "lucide-react";
import { api, apiKey, imgPrefix } from "../services/api";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  // Função para buscar o filme específico
  const getMovie = async (url: string) => {
    try {
      const res = await api.get(url);
      setMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Função para formatar dinheiro (USD)
  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `movie/${id}?api_key=${apiKey}&language=pt-BR`;
    getMovie(movieUrl);

    // Rola para o topo ao abrir a página
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie)
    return (
      <div className="text-center text-white mt-10">Carregando detalhes...</div>
    );

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Card Principal */}
      <div className="flex flex-col md:flex-row gap-8 bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
        {/* Poster do Filme */}
        <div className="w-full md:w-1/3 max-w-sm mx-auto">
          <img
            src={imgPrefix + movie.poster_path}
            alt={movie.title}
            className="rounded-lg shadow-2xl w-full border-4 border-gray-800"
          />
        </div>

        {/* Informações de Texto */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold mb-2 text-yellow-500">
            {movie.title}
          </h2>
          <p className="text-lg italic text-gray-400 mb-6">{movie.tagline}</p>

          {/* Grid de Informações Rápidas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
              <h3 className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <Wallet size={18} /> Orçamento
              </h3>
              <p className="font-mono">{formatCurrency(movie.budget)}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
              <h3 className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <DollarSign size={18} /> Receita
              </h3>
              <p className="font-mono">{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
              <h3 className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <Clock size={18} /> Duração
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
              <h3 className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                <Calendar size={18} /> Lançamento
              </h3>
              <p>{new Date(movie.release_date).toLocaleDateString("pt-BR")}</p>
            </div>
          </div>

          {/* Sinopse */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-3 border-b border-gray-700 pb-2">
              <FileText className="text-yellow-500" /> Sinopse
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {movie.overview || "Sinopse não disponível em português."}
            </p>
          </div>

          {/* Nota */}
          <div className="bg-yellow-500/10 p-4 rounded-lg flex items-center gap-4 border border-yellow-500/30">
            <Star className="text-yellow-500 fill-yellow-500" size={32} />
            <div>
              <p className="text-sm text-gray-400">Avaliação Média</p>
              <p className="text-2xl font-bold">
                {movie.vote_average.toFixed(1)} / 10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
