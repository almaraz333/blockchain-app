import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch(url)).json();

      setResponse(data);
    };

    fetchData();
  }, [url]);

  return response;
};
