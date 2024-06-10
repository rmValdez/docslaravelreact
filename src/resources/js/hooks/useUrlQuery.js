import { useSearchParams } from 'react-router-dom';

const useUrlQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setUrlQuery = (keyOrQueryObject, value) => {
    if (typeof keyOrQueryObject === 'object') {
      setSearchParams(keyOrQueryObject);
    } else {
      searchParams.set(keyOrQueryObject, value);
      setSearchParams(searchParams);
    }
  };
  return [searchParams, setUrlQuery];
};

export default useUrlQuery;