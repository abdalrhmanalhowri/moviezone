import useMovies from "../../hooks/useMovies";
import MoviesCard from "./MoviesCard";
import CardsSkeleton from "./CardsSkeleton.jsx";
const DiscoverMoviesTv = ({
  type,
  typeEndPoint,
  deps,
  selectGenre,
  searchText,
}) => {
  const { Data, Loading, error, loadMore } = useMovies({
    type: typeEndPoint,
    deps: [deps, searchText],
    genre: selectGenre,
    pages: [1, 2, 3],
    searchText: searchText,
  });
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-[#BBBBBB] dark:bg-[#1A1A1A] dark:text-red-700"
          role="alert"
        >
          <span className="font-medium">Danger alert!</span> {error} Change a
          few things up and try submitting again.
        </div>
      )}
      <div>
        <h2 className="font-bold mb-10 text-2xl">
          {type === "movie" ? "MOVIES" : type === "tv" ? "SERIES" : ""}
        </h2>
        <div className="grid grid-cols-7">
          {Loading &&
            skeletons.map((skeleton) => <CardsSkeleton key={skeleton} />)}
          {Data.length === 0 && !Loading && (
            <p className="text-red-700 font-bold text-lg">
              No {type === "tv" ? "Series" : type} Found
            </p>
          )}
          {Data.map((e, i) => (
            <MoviesCard
              key={i}
              type={
                type === "movies" ? "movie" : type === "series" ? "tv" : type
              }
              movies={e}
            />
          ))}
        </div>
        <div className="w-full text-center my-6">
          <button
            className="font-bold bg-[#BA181B] p-2 rounded-md px-8"
            onClick={loadMore}
          >
            LoadMore..
          </button>
        </div>
      </div>
    </>
  );
};

export default DiscoverMoviesTv;
