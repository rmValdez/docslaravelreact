import { useEffect, useState } from "react";

export const useRequestAction = (url, fileName = 'file') => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    urlData: null,
    fileData: null,
    blob: null,
    type: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage?.message || 'Error');
        }
        const type = response.headers.get('Content-Type');
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type });
        const fileData = new File([blob], fileName, { type });
        const urlData = URL.createObjectURL(blob);
        setData({ urlData, fileData, blob, type });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) fetchData();

    return () => {
      if (data.urlData) URL.revokeObjectURL(data.urlData);
    };
  }, [url, fileName]);

  return { isLoading, error, ...data };
};
