import React, { useState } from "react";
import GenresSelector from "./GenresSelector";
import useMovies from "../../hooks/useMovies";
import MoviesCard from "./MoviesCard";

const DiscoverMoviesTv = ({ type, typeEndPoint, deps }) => {
  const { Data, error, Loding } = useMovies({ type: typeEndPoint, deps: deps });
  return (
    <div className="grid grid-cols-7">
      {Data.map((e) => (
        <MoviesCard key={e.id} type={type} movies={e} />
      ))}
    </div>
  );
};

export default DiscoverMoviesTv;
