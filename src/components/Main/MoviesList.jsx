import useMovies from "../../hooks/useMovies";
import MoviesCard from "./MoviesCard";
import TrailerVideo from "./TrailerVideo";
import ScrollingCards from "../../hooks/ScrollingCards.js";
import LeftButton from "../../img/left.svg";
import RightButton from "../../img/Right.svg";

const MoviesList = ({ moviesSection, moviesTitle }) => {
  const { movies, error } = useMovies({ type: `${moviesSection}` });
  const { containerRef, handleScroll, CardWidth } = ScrollingCards({
    SizeScrolling: 1000,
  });

  return (
    <>
      {error && (
        <div
          class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-[#BBBBBB] dark:bg-[#1A1A1A] dark:text-red-700"
          role="alert"
        >
          <span class="font-medium">Danger alert!</span> {error} Change a few
          things up and try submitting again.
        </div>
      )}
      {/* <div className="grid grid-cols-3 gap-5 grid-rows-1">
          {movies.map((movie) => (
            <TrailerVideo key={movie.id} movieId={movie.id} />
          ))}
        </div> */}
      <div className="CardSection">
        <h2 className="text-2xl mb-5 font-bold ">{moviesTitle}</h2>
        <div className="relative ">
          <div className="absolute left-0 top-40 transform  p-2 ">
            <button onClick={() => handleScroll(-CardWidth)}>
              <img
                className="w-4 drop-shadow-[0_0px_5px_rgba(0,0,0,1)]"
                src={LeftButton}
                alt="Left Button"
              />
            </button>
          </div>
          <div className="absolute right-0 top-40 transform  p-2 ">
            <button onClick={() => handleScroll(CardWidth)}>
              <img
                className="w-4 drop-shadow-[0_1px_3px_rgba(0,0,0,1)] "
                src={RightButton}
                alt="Right Button"
              />
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          style={{ overflowX: "hidden", scrollBehavior: "smooth" }}
        >
          <div className="MoviesList">
            {movies.map((movie) => (
              <MoviesCard key={movie.id} movies={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
