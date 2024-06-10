import { useEffect, useRef } from 'react';

const useDebounce = (func, delay) => {
  const timeReference = useRef(null);

  if (typeof func !== 'function') throw new Error('The "func" parameter must be a function.');
  if (typeof delay !== 'number' || delay <= 0) throw new Error('The "delay" parameter must be a positive number.');
  
  useEffect(() => () => clearTimeout(timeReference.current), []);

  return (...args) => {
    clearTimeout(timeReference.current);
    timeReference.current = setTimeout(() => func(...args), delay);
  };
};

export default useDebounce;