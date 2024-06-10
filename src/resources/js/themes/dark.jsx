import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from '../enums/themeEnums';

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#E53935' },
    secondary: { main: '#E06C6C' },
    tertiary: { main: '#FF6969' },
    quaternary: { main: '#fff' },
    info: { main: '#61a3e5' },
    warning: { main: '#edce2a' },
    error: { main: '#D32F2F' },
    success: { main: '#03C04A' },
    neutral: { main: '#ffffff' },
    icon: { main: '#A9A9A9' },
    text: { main: '#ACACAC' },
    grey: { main: '#333d47', hoverColor: '#202830' },
    border: { main: '#616A6B' },
    background: { default: '#1c2833', paper: '#28333d', secondary: '#303f4d' },
  },
  spacing: 8,
  breakpoints: { values: BREAKPOINTS },
  props: { ...UIHELPER, contrastText: '#f3f3f3' },
  shadows: Array(25).fill('none'),
  typography: { fontSize: 11, color: '#A9A9A9', ...TYPOGRAPHIES },
});