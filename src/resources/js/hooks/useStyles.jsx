import React, { useMemo } from 'react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  
  const classes = useMemo(() => {
    return {
      global: {
        html: {
          'msOverflowStyle': '-ms-autohiding-scrollbar',
          '--scrollbarBG': 'transparent',
          '--scrollbarBGhovered': theme.palette.secondary.main,
          '--active': theme.palette.secondary.main,
          '--hovered': theme.palette.primary.main,
          // height: '4px',
          // width: '4px'
          '--thumbBG': theme.palette.primary.main,
          '--thumb-width': '6px',
          'scrollbarWidth': 'none',
        },
        '&::-webkit-scrollbar': {
          height: '4px',
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '5px',
          backgroundColor: 'var(--scrollbarBG)'
        },
        '&::-webkit-scrollbar-track:hover': {
          backgroundColor: 'var(--scrollbarBGhovered)',
        },
        '&::-webkit-scrollbar-track:active': {
          backgroundColor: 'var(--scrollbarBGhovered)',
        },
        //scrollbar color
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '5px',
          backgroundColor: 'var(--active)',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'var(--hovered)',
        },
        '&::-webkit-scrollbar-thumb:active': {
          backgroundColor: 'var(--hovered)',
        },
      },
      topBar: {
        backgroundColor: theme.palette.background.paper,
        height: theme.props.topBarHeight
      },
      subheadDivider: {
        marginY: '23px',
      },
      sideBarList: {
        '.MuiListSubheader-root': {
          backgroundColor: 'transparent',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '150%',
          letterSpacing: '0.15px',
          color: theme.props.contrastText,
          paddingLeft: '0px',
          width: '235px',
          height: '35px',
          margin: '8px 0 4px 10px',
        },
        maxHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      reactDataGrid: {
        fontSize: theme.typography.fontSize,
        backgroundColor: 'transparent',
        borderRadius: '10px',
      },
      textHover: {
        ':hover': {
          color: theme.palette.secondary.main,
          transition: '0.5s',
          cursor: 'pointer'
        }
      },
      cardHover: {
        padding: '23px !important',
        boxShadow: 'none',
        ':hover': {
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)'
        }
      },
      fileUploadBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2.3,
        borderRadius: '20px',
        border: '1px dashed #979A9A',
      },
      fileMenuItemUnselected: {
        height: 55,
        padding: 2,
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        ':hover': {
          background: theme.palette.secondary.main,
          transition: '0.5s',
        }
      },
      fileMenuItemSelected: {
        backgroundColor: theme.palette.primary.main,
        color: '#FFF'
      },
      employeeProfileToolbar: {
        backgroundColor: theme.palette.background.secondary,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '13px 25px 10px 25px',
        color: theme.props.contrastText
      },
      dynamicFormSticky: {
        padding: '20px !important',
        mb: 2,
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: theme.palette.background.paper,
      },
      dynamicFormHistory: {
        padding: '15px 20px !important',
        borderRadius: '10px !important',
        position: 'sticky',
        bottom: 0,
        zIndex: 1,
        backgroundColor: theme.palette.background.default,
      },
      dynamicSection: {
        variant: 'outlined',
        padding: '15px 15px !important',
        mb: 1.5,
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1) !important',
        transition: '0.5s'
      },
      fieldItemStyle: {
        padding: '10px 20px!important',
        borderRadius: '12px !important',
        boxShadow: 'none',
        ':hover': {
          border: '1px solid grey',
          transition: '0.5s',
          cursor: 'pointer'
        }
      },
      popOverStyle: {
        '.MuiPaper-root': {
          padding: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2);',
          borderRadius: '10px',
          width: '22vw'
        }
      },
      employeeProfileBanner: {
        color: '#FFF',
        position: 'sticky',
        top: 0,
        zIndex: 9,
        backgroundColor: '#2c3945', 
      },
      listItemStyle: {
        display: 'list-item',
        p: '2px 10px',
        borderRadius: '50px',
        mb: '10px'
      },
      timelogStyle: {
        p: '2px',
        borderRadius: '50px',
        backgroundColor: 'info.main',
        display: 'flex',
        justifyContent: 'center',
        mb: '10px',
      },
      tableCellPdf:{
        borderBottom: 'none',
        fontSize: 14
      }
    };
  }, [theme]);
  return {
    classes
  };
};