import { Box, Fade, LinearProgress } from '@mui/material';
import React from 'react';

const LinearLoader = ({ loading }) => {
  return (
    <Box height={'5px'}>
      <Fade in={loading} unmountOnExit>
        <LinearProgress />
      </Fade>
    </Box>
  );
};

export default LinearLoader;