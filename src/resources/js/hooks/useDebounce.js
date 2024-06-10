import { useEffect, useRef } from 'react';
import { DEBOUNCE_DELAY } from '../enums/enums';

const useDebounce = (func, delay = DEBOUNCE_DELAY) => {
  if (typeof func !== 'function') {
    throw new Error('The "func" parameter must be a function.');
  }

  if (typeof delay !== 'number' || delay <= 0) {
    throw new Error('The "delay" parameter must be a positive number.');
  }

  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const debouncedFunction = (...args) => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunction;
};

export default useDebounce;