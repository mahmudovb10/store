import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something Went Wrong :(");
        }
        const result = await req.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setisPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
