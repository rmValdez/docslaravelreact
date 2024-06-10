
import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';

const tableSubtrahend = 20;
const useWindowSize = () => {
  const [width, setWidth] = useState(window?.innerWidth ? window.innerWidth : 0);
  const [height, setHeight] = useState(window?.innerHeight ? window.innerHeight : 0);
  const [tablesHeight, setTablesHeight] = useState(window?.innerHeight - tableSubtrahend);
  const theme = useTheme();


  const listener = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setTablesHeight(window.innerHeight - tableSubtrahend);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    }
  }, []);

  return {
    width,
    height,
    tablesHeight,
  };
};

export default useWindowSize;

