import MoviesCard from "./MoviesCard.jsx";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardsSkeleton from "./CardsSkeleton.jsx";
import ScrollingCards from "../../hooks/ScrollingCards.js";
import useMovies from "../../hooks/useMovies.js";

const MoviesList = ({ moviesSection, moviesTitle, type, deps }) => {
  const { Loading, Data, error } = useMovies({
    type: type,
    section: moviesSection,
    deps: deps,
  });
  const { containerRef, handleScroll, CardWidth } = ScrollingCards({
    SizeScrolling: 1000,
  });
  const skeletons = [1, 2, 3, 4, 5, 6, 7];
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
      <div className="CardSection">
        <h2 className="text-2xl mb-5 font-bold ">{moviesTitle}</h2>
        <div className="flex">
          <div className="w-6 mr-5 place-content-center">
            <button onClick={() => handleScroll(-CardWidth)}>
              <MdKeyboardArrowLeft
                size={40}
                className=" text-black dark:text-white hover:text-red-700"
              />
            </button>
          </div>
          <div
            className="flex overflow-x-hidden scroll-smooth"
            ref={containerRef}
          >
            <div className="MoviesList">
              {Loading &&
                skeletons.map((skeleton) => <CardsSkeleton key={skeleton} />)}
              {Data.map((movie) => (
                <MoviesCard key={movie.id} movies={movie} type={type} />
              ))}
            </div>
          </div>
          <div className="w-6 ml-2 place-content-center">
            <button onClick={() => handleScroll(CardWidth)}>
              <MdKeyboardArrowRight
                size={40}
                className=" text-black dark:text-white  hover:text-red-700"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
