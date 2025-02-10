import React from "react";
import GenresSelector from "./GenresSelector.jsx";
import MoviesList from "./HomeMoviesList.jsx";
import DiscoverMoviesTv from "./DiscoverMoviesTv.jsx";
const MainContent = ({ onSelectGenre, activePage }) => {
  const moviesList = {
    movie: {
      "Now Playing": "now_playing",
      Popular: "popular",
      "Top Rated": "top_rated",
      Upcoming: "upcoming",
    },
    tv: {
      "Airing Today": "airing_today",
      Popular: "popular",
      "Top Rated": "top_rated",
      "On The Air": "on_the_air",
    },
  };
  console.log(activePage);

  return (
    <div>
      <GenresSelector onSelectGenre={onSelectGenre} />
      {activePage === "home" ? (
        Object.entries(moviesList).map(([type, sections]) =>
          Object.entries(sections).map(([moviesTitle, moviesSection]) => (
            <MoviesList
              key={`${type}-${moviesTitle}`}
              moviesTitle={moviesTitle}
              moviesSection={moviesSection}
              type={type}
            />
          ))
        )
      ) : (
        <DiscoverMoviesTv
          type={activePage}
          typeEndPoint={`discover/${activePage}`}
          deps={activePage}
        />
      )}
    </div>
  );
};

export default MainContent;
