import { useEffect, useState } from "react";
import apiTmdb from "../services/api-tmdb.js";
import { CanceledError } from "axios";
import useData from "./useData.js";

const useMovies = ({ type, section, deps }) =>
  useData({
    Urlendpoint: section ? `${type}/${section}` : `${type}`,
    dataKey: "results",
    deps: deps,
  });

export default useMovies;
