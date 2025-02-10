import React from "react";
import useData from "./useData";

const useGenres = () =>
  useData({ Urlendpoint: "genre/movie/list", dataKey: "genres" });

export default useGenres;
