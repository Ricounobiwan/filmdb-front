import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieList from "./components/MovieList";
// import MovieList2 from "./components/MovieList2";
import NavBar from "./components/NavBar";
import ActorsPage from "./components/ActorsPage";
import MoviePage from "./components/MoviePage";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="mx-10 my-10">
      <NavBar />
      <div className="mx-10 my-10">
        <Router>
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/create" element={<AddMovie />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
