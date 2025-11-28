import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BrowserRouter>
        {/* Aqui virá a Navbar depois */}
        <nav className="p-4 bg-black border-b border-gray-800 mb-4">
          <h2 className="text-2xl font-bold text-yellow-500">CineVerse 🍿</h2>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
