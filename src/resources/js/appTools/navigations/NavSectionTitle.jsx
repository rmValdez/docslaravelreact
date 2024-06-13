import React, { Fragment } from 'react';
import { Divider, List, ListSubheader, Typography } from '@mui/material';
import { useUIStore } from '../../states/store';
import { useStyles } from '../../hooks/useStyles';
import { capitalizeFirst } from '../../helpers/stringHelpers';

export const NavSectionTitle = ({section , hide ,children}) => {
  const [{ drawerMode },] = useUIStore();
  const { classes } = useStyles();

  return (
    <List
      sx={{
        ...classes.sideBarList,
        display: hide && 'none'
      }}
      subheader={
        <Fragment>
          {
            drawerMode == 'close' ?
              <Divider variant='middle' sx={classes.subheadDivider} flexItem />
              :
              <ListSubheader>
              <Typography sx={{ fontSize: '12px',margin: '5px 0 0 10px' }}>{capitalizeFirst(section)}</Typography>
              </ListSubheader>
          }
        </Fragment>
      }
    >
      {children}
    </List>
  );
};
