import React from 'react';
import { Divider, Grid, Stack, Typography, } from '@mui/material';

export const AppBarLayout = (props) => {
  const{
      icon,
      label,
      variant,
      color,
      alignItems,
      containerProps,
      children
    } = props;

  return (
    <Grid container
      width='100%'
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack mb={1} width='100%'>
        <Divider color='white'/>
      </Stack>

      <Grid item>
        <Grid container width='100%' alignItems={alignItems} {...containerProps}>
          <Grid item>
            <Typography variant={variant} sx={{verticalAlign: 'middle', display: 'inline-flex' }} color={color}>
              {label}
            </Typography>
          </Grid>
          <Grid item ml={1}>
            {icon}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {children}
      </Grid>

      <Stack mt={1} width='100%'>
        <Divider color='white'/>
      </Stack>
    </Grid>
  );
};

export default AppBarLayout;
