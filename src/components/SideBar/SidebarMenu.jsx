import home from "../../img/home.svg";
import movies from "../../img/movies.svg";
import tv from "../../img/tv.svg";
const SidebarMenu = ({ setActivePage }) => {
  return (
    <div class="w-48">
      <button
        type="button"
        class="relative inline-flex items-center w-full pr-4 py-2 font-bold text-md mb-5  dark:focus:text-red-700  "
        onClick={() => setActivePage("home")}
      >
        <img className="w-9 mr-5" src={home} alt="" />
        HOME
      </button>
      <button
        type="button"
        class="relative inline-flex items-center w-full pr-4 py-2 font-bold text-md mb-5 dark:focus:text-red-700 "
        onClick={() => setActivePage("movie")}
      >
        <img className="w-9 mr-5" src={movies} alt="" />
        MOVIES
      </button>
      <button
        type="button"
        class="relative inline-flex items-center w-full pr-4 py-2 font-bold text-md mb-5 dark:focus:text-red-700 "
        onClick={() => setActivePage("tv")}
      >
        <img className="w-9 mr-5" src={tv} alt="" />
        SERIES
      </button>
    </div>
  );
};

export default SidebarMenu;
