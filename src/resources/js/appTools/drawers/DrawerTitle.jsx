import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useUIStore } from '../../states/store';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { DRAWER_DEFAULT, DRAWER_KEY } from '../../../enums/enums';

export const DrawerTitle = () => {
  const [{ drawerMode, contentBoxWidth }, { setDrawerMode }] = useUIStore();
  const [drawerModeLocal, setDrawer] = useLocalStorage(DRAWER_KEY, DRAWER_DEFAULT);

  const handleDrawerChange = () => {
    if(contentBoxWidth <= 600) return;
    const drawer = drawerMode == 'open' ? 'close' : 'open';
    setDrawerMode(drawer);
    setDrawer(drawer);
  };

  return (
    <Stack onClick={() => handleDrawerChange()} sx={{cursor: 'pointer'}} direction={'row'} alignItems={'center'} spacing={1} justifyContent={'center'}>
      <Typography variant='h6' sx={{
        display: drawerMode == 'hovered' || drawerModeLocal == 'close' && 'none'
      }}>{'NMSAPPS'}</Typography>
    </Stack>
  );
};