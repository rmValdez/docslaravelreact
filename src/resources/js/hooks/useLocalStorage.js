import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial = ![saved !== null, saved !== undefined , saved != 'undefined'].includes(true) ? JSON.parse(saved) : defaultValue;
    return initial;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};