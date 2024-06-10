import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS, TYPOGRAPHIES, UIHELPER } from '../enums/themeEnums';

export const dark = createTheme(({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E53935'
    },
    secondary: {
      main: '#E06C6C',
    },
    tertiary: {
      main: '#FF6969'
    },
    quaternary: {
      main: '#fff'
    },
    info: {
      main: '#61a3e5'
    },
    warning: {
      main: '#edce2a'
    },
    error: {
      main: '#D32F2F'
    },
    success: {
      main: '#03C04A'
    },
    neutral: {
      main: '#ffffff'
    },
    icon: {
      main: '#A9A9A9'
    },
    text: {
      main: '#ACACAC'
    },
    grey: {
      main: '#333d47',
      hoverColor: '#202830',
    },
    border: {
      main: '#616A6B'
    },
    background: {
      default: '#1c2833',
      paper: '#28333d',
      secondary: '#303f4d'
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      ...BREAKPOINTS
    },
  },
  props: {
    ...UIHELPER,
    contrastText: '#f3f3f3',
  },
  shadows: Array(25).fill('none'),
  typography: {
    fontSize: 11,
    color: '#A9A9A9',
    ...TYPOGRAPHIES
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '11px',
          borderRadius: '15px',
          padding: '10px',
          margin: '0 5px 0 0'
        },
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small'
      },
      styleOverrides: {
        root: {
          fontSize: '0.8rem',
          borderRadius: '10px',
          textTransform: 'capitalize',
          boxShadow: 'none',
          minWidth: '80px',
        },
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        variant: 'outlined'
      },
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            borderRadius: '10px',
            minHeight: '37px',
            gap: '5px',
          },
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '1rem',
          transition: '0.3s',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }
      }
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderRadius: '10px',
          minWidth: '80px',
          fontSize: '12px',
        }
      }
    },

    MuiDialog: {
      defaultProps: {
        maxWidth: 'tablet',
        fullWidth: true
      },
      styleOverrides: {
        root: {
          '.MuiDialog-paper': {
            borderRadius: '20px',
            padding: '25px'
          },
          '.MuiDialogContent-root': {
            padding: '15px 0 15px 0'
          },
          '.MuiDialogActions-root': {
            padding: '15px 0 0 0'
          },
        }
      }
    },
    MuiIcon: {
      defaultProps: {
        fontSize: 'inherit',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '.MuiPaper-outlined': {
            borderRadius: '20px',
            padding: '40px',
            // backgroundColor: '#1c2833'
          },
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        standard: {
          width: '30px',
          height: '30px',
          borderRadius: '100%'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: '300px'
        }
      }
    },
  },
}));