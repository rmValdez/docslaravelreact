import React from 'react';
import { Dialog, Stack, Typography } from '@mui/material';

export const IconSpinner = () => {
  return (
    <Stack direction='column' justifyContent={'center'} alignItems='center' sx={{ height: '150px' }}>
      <Stack>
        <Typography>
          asasas
        </Typography>
      </Stack>
    </Stack>
  );
};

export const ApiLoader = ({
  isLoading = true,
}) => {
  return (
    <Dialog open={isLoading}
      PaperProps={{
        style: {
          background: 'transparent',
          boxShadow: 'none'
        }
      }}
    >
      <IconSpinner />
    </Dialog>
  );
};

