import React from "react";
import VoteAverage from "./VoteAverage";

const MoviesCard = ({ movies, type }) => {
  return (
    <div className="mb-6 MoviesCards ">
      <a href="">
        <img
          className="rounded-lg mb-2 h-72 w-48"
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={type === "tv" ? movies.name : movies.title}
        />
      </a>
      <div>
        <VoteAverage movie={movies} />
        <a href="#" className="font-bold text-lg hover:text-[#BA181B]">
          {type === "tv" ? movies.name : movies.title}
        </a>
        {/* <h2 className="font-bold text-lg">{movies.title}</h2> */}
        <p className="text-sm">
          {type === "tv" ? movies.first_air_date : movies.release_date}
        </p>
      </div>
    </div>
  );
};

export default MoviesCard;
