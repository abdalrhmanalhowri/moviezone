import { useEffect, useState } from "react";
import apiTmdb from "../services/api-tmdb.js";
import { CanceledError } from "axios";

const useData = ({ Urlendpoint, dataKey, deps = [] }) => {
  const [Data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [Loding, setLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoding(true);
    apiTmdb
      .get(Urlendpoint, { signal: controller.signal })
      .then((res) => {
        setLoding(false);
        setData(res.data[dataKey]);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoding(false);
      });

    return () => controller.abort();
  }, [Urlendpoint, ...deps]);

  return { Data, error, Loding };
};

export default useData;
