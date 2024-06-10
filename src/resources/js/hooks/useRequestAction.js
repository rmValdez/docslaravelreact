import { useEffect, useState } from "react";

export const useRequesAction = (url, fileName = 'file') => {
  const [isLoading, setIsLoading] = useState(true);
  
  const [parseUrlData, setParseUrlData] = useState({
    urlData: null,
    fileData: null,
    blob: null,
    type: null
  });

  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchUrl = async () => {
    try {
      const response = await fetch(url);
      if(!response.ok) {
        const responseMessage = await response.json();
        throw(responseMessage?.message ?? 'Error');
      }
      const type = response.headers.get('Content-Type');
      const arrayBuffer = await response.arrayBuffer();
      setIsLoading(false);
      const blob = new Blob([arrayBuffer], { type });
      const dataFile = new File([blob], fileName, { type });
      const dataURL = URL.createObjectURL(blob);

      setParseUrlData({
        urlData: dataURL,
        fileData: dataFile,
        blob: blob,
        type: type
      });
    } catch (urlError) {
      setError(urlError)
      setIsLoading(false);
    }
  };

  if(url) fetchUrl();

  return () => {
    if (parseUrlData?.urlData) {
      URL.revokeObjectURL(parseUrlData?.urlData);
    }
  };
}, [url]);

  return { isLoading, error, ...parseUrlData };
};