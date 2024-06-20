import React, { useEffect, Fragment, useState } from 'react';
import { Box, Drawer, GlobalStyles, IconButton, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MemoizeDrawer } from '../generic/drawers/SideDrawer';
import useWindowResize from '../../hooks/useWindowSize';
import { useStyles } from '../../hooks/useStyles';
import useStore from '../../states/store';
import { Loader } from '../loaders/Loader';
import { NmsDrawer } from '../generic/drawers/NmsDrawer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DRAWER_DEFAULT, DRAWER_KEY } from '../../enums/enums';
import { Menu } from '../icons/MaterialIcons';
import { ApiLoader } from '../loaders/ApiLoader';

const Base = ({ handleOnFocus }) => {
  const { height, width , tablesHeight } = useWindowResize();
  const theme = useTheme();
  const [drawer, setDrawerMode] = useLocalStorage(DRAWER_KEY, DRAWER_DEFAULT);
  const { classes } = useStyles();
  const [initialState, actions] = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHoverIn = () => {
    if (initialState.drawerMode == 'close') {
      actions.setDrawerMode('hovered');
      setDrawerMode('hovered');
    }
  };

  const handleToggleMobileDrawer = () => {
    setMobileOpen((prev) => !prev);
  };


  const handleHoverOut = () => {
    if (initialState.drawerMode == 'hovered' && initialState.drawerMode != 'open') {
      actions.setDrawerMode('close');
      setDrawerMode('close');
    }
  };


  useEffect(() => {
    const desktop = theme.breakpoints.values.desktop;
    const laptop = theme.breakpoints.values.laptop;
    const tablet = theme.breakpoints.values.tablet;
    actions.setContentBoxHeight(height);
    actions.setContentBoxWidth(width);
    actions.setTableHeight(tablesHeight);
    var breakpoint = 'desktop';
    if (width > desktop) {
      breakpoint = 'largeDesktop';
    } else if (width >= laptop && width < desktop) {
      breakpoint = 'laptop';
    } else if (width >= tablet && width < laptop) {
      breakpoint = 'tablet';
    } else if (width < tablet) {
      breakpoint = 'mobile';
    }
    actions.setCurrentBreakPoint(breakpoint);
  }, [height, width, theme, initialState.drawerMode, tablesHeight]);

  useEffect(() => {
    if (initialState.loaderState && mobileOpen) {
      handleToggleMobileDrawer();
    }
  }, [initialState.loaderState, mobileOpen]);

  return (
    <Box sx={{ overflowY: 'hidden' }}>
      <GlobalStyles styles={{
        ...classes.global
      }} />
      <IconButton
        onClick={handleToggleMobileDrawer}
        edge="start"
        sx={{ ml: 1, display: { mobile: 'block', tablet: 'none' } }}
      >
        <Menu />
      </IconButton>
      <NmsDrawer
        variant="permanent"
        open={initialState.drawerMode == 'open'}
        hovered={initialState.drawerMode == 'hovered' ? 'true' : 'false'}
        onMouseEnter={() => handleHoverIn()}
        onMouseLeave={() => handleHoverOut()}
        onFocus={handleOnFocus}
        sx={{
          display: { mobile: 'none', tablet: 'block' },
        }}
      >
        <MemoizeDrawer />
      </NmsDrawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => handleToggleMobileDrawer()}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { mobile: 'block', tablet: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: theme.props.drawerWidth },
        }}
      >
        <MemoizeDrawer />
      </Drawer>
      <Outlet />
      {initialState.loaderState ? (
        <ApiLoader />
      ) : <Fragment />}
    </Box>
  );
};

export default Base;