import React, { useEffect, useState } from "react";
import apiTmdb from "../services/api-tmdb.js";
import { CanceledError } from "axios";

const useMovies = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiTmdb
      .get(`/movie/${type}`, { signal: controller.signal })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useMovies;
