import React from 'react';
import { styled } from '@mui/system';
import { Drawer } from '@mui/material';

const openedMixin = (theme) => ({
  width: theme.props.drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.props.drawerWidthClose,
});

const hoveredMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    delay: '200ms',
  }) + ' !important',
  overflowX: 'hidden',
  width: theme.props.drawerWidth,
  backgroundColor: theme.palette.mode == 'dark' ? 'background.paper' : '#ededed'
});

export const Drawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, hovered }) => {
    return (
      ({
        '.MuiPaper-root': {
          // marginTop: theme.props.topBarHeight,
          borderColor: 'transparent',
        },
        width: theme.props.drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
        ...(hovered == 'true' && {
          ...hoveredMixin(theme),
          '& .MuiDrawer-paper': hoveredMixin(theme),
        }),
				
      })
    );
  },
);