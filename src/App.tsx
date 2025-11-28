import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Navbar from "./components/Navbar"; // <--- Importe a Navbar

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BrowserRouter>
        <Navbar /> {/* <--- Adicione aqui */}
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
