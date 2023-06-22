import { useEffect, useState } from "react";

const useAPI = (url, setLoading, setError) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const parsedData = await res.json();
      setData(parsedData);
    };

    fetchData()
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, setData];
};

export default useAPI;
