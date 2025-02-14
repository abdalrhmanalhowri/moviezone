import useMovies from "../../hooks/useMovies.js";
import MoviesList from "./MoviesList.jsx";
import DiscoverMoviesTv from "./DiscoverMoviesTv.jsx";
const HomeMoviesList = ({ selectGenre, activePage, searchText }) => {
  const moviesTvList = {
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

  return (
    <>
      {activePage === "home" && !selectGenre && !searchText ? (
        Object.entries(moviesTvList).map(([type, sections]) =>
          Object.entries(sections).map(([moviesTitle, moviesSection]) => (
            <MoviesList
              key={`${type}-${moviesTitle}`}
              moviesTitle={moviesTitle}
              moviesSection={moviesSection}
              type={type}
              deps={[selectGenre]}
            />
          ))
        )
      ) : activePage === "home" ? (
        <DiscoverMoviesTv
          type="movies"
          typeEndPoint="discover/movie"
          deps={[activePage, selectGenre]}
          selectGenre={selectGenre}
          searchText={searchText}
        />
      ) : (
        <DiscoverMoviesTv
          type={activePage}
          typeEndPoint={`discover/${activePage}`}
          deps={[activePage, selectGenre]}
          selectGenre={selectGenre}
          searchText={searchText}
        />
      )}
    </>
  );
};

export default HomeMoviesList;
