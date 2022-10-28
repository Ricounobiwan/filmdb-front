import React from "react";
import { useEffect, useState } from "react";

function MovieList2() {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/search?q=" + query).then((res) =>
      setState(res.data)
    );
  }, [query]);

  function searchQuery(evt) {
    const value = evt.target.value;
    setQuery(value);
  }
  return (
    <>
      {state.map((d) => (
        <div>{d}</div>
      ))}
      <input type="text" placeholder="Type your query" onEnter={searchQuery} />
    </>
  );
}

export default MovieList2;
