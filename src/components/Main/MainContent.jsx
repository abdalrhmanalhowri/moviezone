import React from "react";
import GenresSelector from "./GenresSelector.jsx";
import MoviesList from "./MoviesList.jsx";
const MainContent = () => {
  return (
    <div>
      <GenresSelector />
      <MoviesList />
    </div>
  );
};

export default MainContent;
