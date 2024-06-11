import React, { useEffect } from 'react';
import MaterialThemeProvider from 'MaterialThemeProvider';
import { CssBaseline } from '@mui/material';
import { light } from '../themes/light';
import { dark } from '../themes/dark';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useUIStore } from '../states/store';

const ThemeProvider = ({ children }) => {
  const [{ theme }, actions] = useUIStore();
  const [defaultTheme] = useLocalStorage('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  useEffect(() => {
    actions.setTheme(defaultTheme);
  }, [actions, defaultTheme]);

  return (
    <MaterialThemeProvider theme={theme == 'light' ? light : dark }>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;