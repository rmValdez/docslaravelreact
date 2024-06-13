import React, { Fragment } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ListItem } from '../../componentHelper/listitem/ListItem';

export const QuickNavItem = (props) => {
  const { listKey, title, path, linkIcn, activeNav = false, closeQuickNav, ...others} = props;
  
  return (
    <ListItem
      key={listKey}
      component={NavLink}
      to={path}
      selected={activeNav}
      onClick={() => closeQuickNav()}
      sx={{
        minWidth: '100%',
        borderRadius: '16px',
        backgroundColor:(theme) => activeNav && theme.palette.primary.main,
      }}
      {...others}
    >
      {linkIcn ?
        <ListItemIcon sx={{
          // bgcolor: 'primary.main',
          transition: '0.5s',
        }}>
          {linkIcn}
        </ListItemIcon>
        :
        <Fragment />
      }
      <ListItemText primary={title} />
    </ListItem>
  );
}; 