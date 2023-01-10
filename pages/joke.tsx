import React from "react";
import { useFetch } from "../hooks/useFetch";

function Joke() {
  const { setup, delivery, id } = useFetch(
    "https://v2.jokeapi.dev/joke/Any",
    {}
  );

  return (
    <div>
      <h3>Joke of the session</h3>
      <p>
        Joke Id: <span>{id}</span>
      </p>
      <p>{setup}</p>
      <p>
        <em>{delivery}</em>
      </p>
    </div>
  );
}

export default Joke;
