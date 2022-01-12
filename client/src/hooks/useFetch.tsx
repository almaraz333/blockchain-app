import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>(null);

  const fetchData = async () => {
    const data = await (await fetch(url)).json();

    setResponse(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return response;
};
