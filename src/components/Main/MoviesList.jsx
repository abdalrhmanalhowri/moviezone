import useMovies from "../../hooks/useMovies";
import MoviesCard from "./MoviesCard";

const MoviesList = () => {
  const { movies, error } = useMovies();
  return (
    <>
      <ul>
        {error && (
          <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-[#BBBBBB] dark:bg-[#1A1A1A] dark:text-red-700"
            role="alert"
          >
            <span class="font-medium">Danger alert!</span> {error} Change a few
            things up and try submitting again.
          </div>
        )}
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movies={movie} />
          ))}
        </div>
      </ul>
    </>
  );
};

export default MoviesList;
