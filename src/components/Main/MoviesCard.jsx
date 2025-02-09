import React from "react";
import VoteAverage from "./VoteAverage";

const MoviesCard = ({ movies }) => {
  return (
    <div className="mb-6 MoviesCards ">
      <a href="">
        <img
          className="rounded-lg mb-2"
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
        />
      </a>
      <div>
        <VoteAverage movie={movies} />
        <a href="#" className="font-bold text-lg hover:text-[#BA181B]">
          {movies.title}
        </a>
        {/* <h2 className="font-bold text-lg">{movies.title}</h2> */}
        <p className="text-sm">{movies.release_date}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
