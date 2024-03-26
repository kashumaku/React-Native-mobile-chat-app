import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

const useFetch = (table) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await supabase.from(table).select();
    if (res.error) {
      setIsLoading(false);
      setData(null);
      setError("Something went wrong");
    } else {
      setIsLoading(false);
      setError(null);
      setData(res.data);
    }
  };
  const reFetch = () => fetchData();
  return { data, error, isLoading, reFetch };
};

export default useFetch;
