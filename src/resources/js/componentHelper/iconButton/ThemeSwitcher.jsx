import React from 'react';
import { useUIStore } from '../../states/store';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IconButton, Tooltip } from '@mui/material';
import { THEME_KEY } from '../../appTools/enums/enums';
import { LightMode, ModeNight } from '@mui/icons-material';

export const ThemeSwitcher = () => {
  const [, setDefaultTheme] = useLocalStorage(THEME_KEY);
  const [{ theme }, { setTheme }] = useUIStore();

  const handleThemeChange = (value) => {
    switch (value) {
    case 'light':
      setTheme('dark');
      setDefaultTheme('dark');
      break;
    case 'dark':
      setTheme('light');
      setDefaultTheme('light');
      break;
    default:
      setTheme('light');
      setDefaultTheme('light');
      break;
    }
  };

  return (
    <Tooltip title={theme == 'light' ? 'Dark Mode' : 'Light Mode'}>
      <IconButton onClick={() => handleThemeChange(theme)}>
        {
          theme == 'light' ? <ModeNight sx={{ color: '#AED6F1' }}/> : <LightMode sx={{ color: '#F7DC6F' }}/>
        }
      </IconButton>
    </Tooltip>
  );
};