import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// 1. Adicionamos a importação do ícone 'Youtube'
import { Search, Clapperboard, Youtube } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="bg-black border-b border-gray-800 px-4 py-4 mb-8 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* GRUPO ESQUERDA: Logo + Youtube */}
        <div className="flex items-center gap-6">
          {/* Logo CineVerse */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition"
          >
            <Clapperboard /> Cinema Verso
          </Link>

          {/* 2. Link do YouTube */}
          {/* Troque o href pelo link do seu canal */}
          <a
            href="https://www.youtube.com/@SeuCanalAqui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition hover:scale-110"
            title="Visite nosso canal"
          >
            <Youtube size={28} />
          </a>
        </div>

        {/* Formulário de Busca */}
        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Busque um filme..."
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-yellow-500 transition w-full"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className="bg-yellow-500 p-2 rounded text-black hover:bg-yellow-400 transition flex items-center"
          >
            <Search size={20} />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
