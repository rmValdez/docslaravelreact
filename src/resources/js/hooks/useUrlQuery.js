import { useSearchParams } from 'react-router-dom';

const useUrlQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setUrlQuery = (keyOrQueryObject, value = '') => {
    if (typeof keyOrQueryObject == 'object') {
      setSearchParams(keyOrQueryObject);
    } else {
      setSearchParams(prev => {
        prev.set(keyOrQueryObject, value);
        return prev;
      });
    }
  };

  return [searchParams, setUrlQuery];
};

export default useUrlQuery;