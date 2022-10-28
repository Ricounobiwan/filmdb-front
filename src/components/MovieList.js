import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddMovie from "./AddMovie";
import ActorsPage from "./ActorsPage";
import MoviePage from "./MoviePage";

const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function MovieList() {
  const [movieDB, setMovieDB] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Component did mount / did update");
      let url = "http://localhost:3000/api/movies";

      let res = await fetch(url);
      let movies = await res.json();
      setMovieDB(movies);
    }
    fetchData();
  }, []);

  let history = useNavigate();

  const handleDelete = (id) => {
    var index = movieDB
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    movieDB.splice(index, 1);
    history("/");
  };

  return (
    <div>
      <>
        {movieDB.map((d) => (
          <li key={d.id} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={d.ImageURL} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{d.Title}</p>
              <p className="text-sm font-medium text-gray-400 italic">
                {d.Plot}
              </p>
              <p className="text-sm text-gray-700">
                Actors: {d.Actor1} - {d.Actor2} - {d.Actor3}
              </p>
              <p className="text-sm text-gray-500">Director: {d.Director}</p>
              <p>
                <Link to={"/edit"}>
                  <button
                    onClick={() => alert("Editing: " + d.id + " " + d.Title)}
                    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                  >
                    Edit
                  </button>
                </Link>
                &nbsp;
                <button
                  onClick={() => handleDelete(d.id)}
                  class="bg-transparent bg-green-50 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                >
                  Delete
                </button>
              </p>
            </div>
          </li>
        ))}
      </>
      <br />
      <Link className="flex mb-4" to="/create">
        <button
          id="CreateNewMovie"
          className="w-full bg-transparent bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          Create
        </button>
      </Link>
    </div>
  );
}

export default MovieList;
