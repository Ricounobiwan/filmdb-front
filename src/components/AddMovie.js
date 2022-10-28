import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

// ==========================================================================================
// ==========================================================================================
function AddMovie(props) {
  console.log("props.movieDB", props.movieDB);
  // ==========================================================================================
  const [Title, setTitle] = useState("");
  const [Plot, setPlot] = useState("");
  const [Director, setDirector] = useState("");

  // ==========================================================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    const loader = async () => {
      const newMovie = await createNewMovie();
      if (!newMovie) {
        return redirect("/api/movies");
      }
      return redirect("/");
    };
  };
  // ==========================================================================================
  async function createNewMovie() {
    // const ids = uuid();
    // let uniqueId = ids.slice(0, 8);

    const url = "http://localhost:3000/api/movies";

    let res = await fetch(url);
    let movies = await res.json();
    // setMovieDB(movies);
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
  }
  // ==========================================================================================
  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-title"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-title"
              type="text"
              placeholder="Title of the movie"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-director"
            >
              Director
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-director"
              type="text"
              placeholder="Director"
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-plot"
            >
              Plot
            </label>
            <input
              className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-plot"
              type="text"
              placeholder="Plot"
              onChange={(e) => setPlot(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center my-10">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              id="addMovieButton"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;

/*

 <button className="w-full bg-transparent bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Create
        </button>

*/
