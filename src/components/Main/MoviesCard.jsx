import React from "react";
import VoteAverage from "./VoteAverage";
import image from "../../img/img.svg";
const MoviesCard = ({ movies, type }) => {
  const img = movies.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
    : image;

  const title = movies.name ? movies.name : movies.title;

  const date = movies.first_air_date
    ? movies.first_air_date
    : movies.release_date;
  return (
    <div className="mb-6 MoviesCards ">
      <a href="">
        <img
          className="rounded-lg mb-2 h-72 w-48"
          src={img}
          alt={type === "tv" ? movies.name : movies.title}
        />
      </a>
      <div>
        <VoteAverage movie={movies} />
        <a href="#" className="font-bold text-lg hover:text-[#BA181B]">
          {title}
        </a>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
