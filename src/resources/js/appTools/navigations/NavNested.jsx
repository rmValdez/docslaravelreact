import React, { Fragment } from 'react';
import { Collapse, List, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '../icons/MaterialIcons';
import { useUIStore } from '../../states/store';
import { NmsListItem } from '../generic/listitem/ListItem';
import { NavItem } from './NavItem';

export const NavNested = ({ page, handleNestedChange, openNested }) => {
  const [{ drawerMode },] = useUIStore();
  const { pathname } = useLocation();
  
  return (
    <Fragment>
      {
        page?.main ?
          <NmsListItem onClick={() => handleNestedChange(page.groupBy)} sx={{maxHeight: '32px'}}>
            <ListItemIcon>
              {
                page.icon
              }
            </ListItemIcon>
            <ListItemText primary={page.title} />
            {
              openNested === page.groupBy ?
                <ExpandLess />
                :
                <ExpandMore />
            }
          </NmsListItem>
          :
          <Fragment />
      }
      <Collapse in={openNested === page.groupBy} timeout="auto">
        <List disablePadding sx={{
          '.MuiListItemIcon-root': {
            marginLeft: ['open', 'hovered'].includes(drawerMode) ? '20px' : '0.5rem'
          },
          backgroundColor: (theme) => theme?.palette.mode == 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'
        }}>
          {
            !page?.main ?
              <NavItem
                title={page.title}
                path={page.path}
                linkIcn={page.icon}
                activeNav={pathname == page.path}
              />
              :
              <Fragment />
          }

        </List>
      </Collapse>
    </Fragment>
  );
};