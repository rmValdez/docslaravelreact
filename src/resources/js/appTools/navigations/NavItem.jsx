import React, { Fragment } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { NmsListItem } from '../generic/listitem/ListItem';
import { useUIStore } from '../../states/store';

export const NavItem = (props) => {
  const [{ drawerMode, currentBreakPoint },] = useUIStore()
  const { listKey, title, path, linkIcn, activeNav = false } = props;
  return (
    <NmsListItem key={listKey} component={NavLink} to={path} selected={activeNav}
      sx={{
        '&.Mui-selected': {
          backgroundColor: (drawerMode == 'close' && currentBreakPoint != 'mobile') && 'transparent',
        },
        overflow: 'hidden'
      }}>
      {
        linkIcn ?
          <ListItemIcon sx={{
            marginLeft: '60px',
            bgcolor: (activeNav && drawerMode == 'close' && currentBreakPoint != 'mobile') && 'primary.main',
            borderRadius: 10,
            transition: '0.5s',
          }}>
            {linkIcn}
          </ListItemIcon>
          :
          <Fragment />
      }
      <ListItemText primary={title} />
    </NmsListItem>
  );
}; 