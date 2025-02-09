import React from "react";
import VoteAverage from "./VoteAverage";

const MoviesCard = ({ movies }) => {
  return (
    <a href="">
      <div className="w-50 my-6 ">
        <img
          className="rounded-lg mb-2"
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
        />
        <div>
          <VoteAverage movie={movies} />
          <h2 className="font-bold text-lg">{movies.title}</h2>
          <p className="text-sm">{movies.release_date}</p>
        </div>
      </div>
    </a>
  );
};

export default MoviesCard;
