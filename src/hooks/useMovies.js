import useData from "./useData.js";

const useMovies = ({ type, section, deps, genre, pages, searchText }) =>
  useData(
    {
      Urlendpoint: section ? `${type}/${section}` : `${type}`,
      dataKey: "results",
      deps: deps,
      pages: pages,
      searhText: searchText,
    },
    {
      ...(genre?.id ? { with_genres: genre?.id } : {}),
    }
  );

export default useMovies;
