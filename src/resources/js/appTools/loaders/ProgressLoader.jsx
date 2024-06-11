import React from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';

const ProgressLoader = ({ height = '100%', loadingText = 'Loading, please wait...' }) => (
  <Stack alignItems="center" justifyContent="center" height={height} gap={2}>
    <CircularProgress color="info" />
    <Typography variant="h6">{loadingText}</Typography>
  </Stack>
);

export default ProgressLoader;