import { useEffect, useState } from "react";
import { getAllShows, searchShows } from "../services/tvmazeApi";
import useDebounce from "./useDebounce";

export default function useMovies(query) {
  const debouncedQuery = useDebounce(query.trim(), 400);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");

    const load = async () => {
      try {
        const data = debouncedQuery
          ? await searchShows(debouncedQuery, controller.signal)
          : await getAllShows(controller.signal);
        setMovies(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            "Unable to load shows right now. Please check your connection and try again.",
          );
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, [debouncedQuery]);

  return { movies, loading, error };
}
