import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { imgPrefix } from "../services/api";

const MovieCard = ({ movie, showLink = true }: any) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full">
      <img
        src={imgPrefix + movie.poster_path}
        alt={movie.title}
        className="rounded mb-4 w-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold truncate" title={movie.title}>
          {movie.title}
        </h2>
        <p className="flex items-center gap-2 text-yellow-400 font-bold">
          <Star fill="currentColor" size={18} /> {movie.vote_average.toFixed(1)}
        </p>

        {showLink && (
          <Link
            to={`/movie/${movie.id}`}
            className="mt-2 bg-yellow-500 text-black font-bold py-2 px-4 rounded text-center hover:bg-yellow-400 transition"
          >
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
