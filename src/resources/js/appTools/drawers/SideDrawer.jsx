import React, { Fragment } from 'react';
import { Box } from '@mui/material';
import { SideDrawerOptions } from './SideDrawerOptions';
import { NavigationList } from '../navigations/NavigationList';
import { DrawerTitle } from './DrawerTitle';

const SideBar = () => {
  return (
    <Fragment>
      <Box sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '100%',
      }}
      >
        <DrawerTitle />
        <NavigationList />
        <SideDrawerOptions />
      </Box>
    </Fragment>
  );
};

export default SideBar;

export const MemoizeDrawer = React.memo(SideBar);