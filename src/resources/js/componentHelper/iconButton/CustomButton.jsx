import { Button } from '@mui/material';
import React from 'react';

export const LightButton = ({ color, children, ...others }) => {
  return (
    <Button
      sx={{
        backgroundColor: `${color}.light`,
        color: `${color}.contrastText`,
        '&:hover': {
          backgroundColor: `${color}.dark`,
          borderColor: `${color}.contrastText`,
        },
      }}
      {...others}
    >
      {children}
    </Button >
  );
};