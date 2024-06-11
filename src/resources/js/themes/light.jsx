import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from '../appTools/enums/themeEnums';

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#E53935' },
    secondary: { main: '#D63535' },
    tertiary: { main: '#FF6969' },
    quaternary: { main: '#DFDFDF' },
    info: { main: '#61A3E5' },
    warning: { main: '#edce2a' },
    error: { main: '#D32F2F' },
    success: { main: '#03C04A' },
    neutral: { main: '#fff' },
    icon: { main: '#757575' },
    text: { main: '#4E4E4E' },
    grey: { main: '#E5E7E9', hoverColor: '#BDC3C7' },
    border: { main: '#BDC3C7' },
    background: { default: '#F2F3F4', paper: '#F9F9F9', secondary: '#E5E7E9' },
  },
  spacing: 8,
  breakpoints: { values: BREAKPOINTS },
  props: { ...UIHELPER, contrastText: '#5A5A5A' },
  shadows: Array(25).fill('none'),
  typography: { fontSize: 11, color: '#595959', ...TYPOGRAPHIES },
});