import { useEffect, useState } from "react";
import apiTmdb from "../services/api-tmdb.js";
import { CanceledError } from "axios";

const useData = (
  { Urlendpoint, dataKey, deps = [], pages = [1], searhText },
  requestConfig
) => {
  const [Data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [currentPages, setCurrentPages] = useState(pages);

  useEffect(() => {
    setData([]);
    if (searhText) {
      Urlendpoint = "search/multi";
      deps = searhText;
      requestConfig = { ...(searhText ? { query: searhText } : {}) };
    }
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        const allRequests = currentPages.map((page) =>
          apiTmdb.get(Urlendpoint, {
            signal: controller.signal,
            params: { ...requestConfig, page },
          })
        );
        const responses = await Promise.all(allRequests);

        const allData = responses.flatMap((res) => res.data[dataKey]);

        setData((prevData) => [...prevData, ...allData]);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [Urlendpoint, currentPages, ...deps]);

  useEffect(() => {
    setCurrentPages(pages);
    setData([]);
  }, [Urlendpoint]);

  const loadMore = () => {
    setCurrentPages((prev) => {
      const lastPage = prev[prev.length - 1];
      return [...prev, lastPage + 1, lastPage + 2, lastPage + 3];
    });
  };
  return { Data, error, Loading, loadMore };
};

export default useData;
