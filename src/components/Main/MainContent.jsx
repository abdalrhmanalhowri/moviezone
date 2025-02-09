import React from "react";
import GenresSelector from "./GenresSelector.jsx";
import MoviesList from "./MoviesList.jsx";
const MainContent = () => {
  return (
    <div>
      <GenresSelector />
      <MoviesList moviesTitle="Popular" moviesSection="popular" />
      <MoviesList moviesTitle="Top Rated" moviesSection="top_rated" />
    </div>
  );
};

export default MainContent;
