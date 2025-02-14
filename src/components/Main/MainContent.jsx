import React from "react";
import GenresSelector from "./GenresSelector.jsx";
import HomeMoviesList from "./HomeMoviesList.jsx";

const MainContent = ({
  onSelectGenre,
  activePage,
  selectGenre,
  searchText,
}) => {
  return (
    <div>
      <GenresSelector onSelectGenre={onSelectGenre} />
      <HomeMoviesList
        activePage={activePage}
        selectGenre={selectGenre}
        searchText={searchText}
      />
    </div>
  );
};

export default MainContent;
