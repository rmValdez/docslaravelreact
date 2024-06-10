import React from 'react';
import { Box, Dialog, Stack, Skeleton, Grid } from '@mui/material';
import { IconSpinner } from './ApiLoader';

export const Loader = () => (
  <Dialog open sx={{ backdropFilter: 'blur(50px)', zIndex: 9999 }}
    PaperProps={{ style: { background: 'transparent', boxShadow: 'none' } }}
  >
    <Stack justifyContent="center" alignItems="center">
      <IconSpinner />
    </Stack>
  </Dialog>
);

export const SkeletonLoader = ({
  mode = 'alternate',
  columns = 0,
  rows = 0,
  width = 200,
  height = 40
}) => (
  <Stack gap={1}>
    {mode === 'alternate' &&
      Array.from({ length: 6 }).map((_, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
          <Skeleton variant="rounded" width={width} height={height} sx={{ borderRadius: '15px' }} />
        </Box>
      ))
    }
    {mode === 'column' &&
      <Grid container spacing={3}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Grid key={colIndex} item xs={12 / columns}>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <Skeleton key={rowIndex} variant="rounded" width={width} height={height} sx={{ borderRadius: '15px', m: 3 }} />
            ))}
          </Grid>
        ))}
      </Grid>
    }
  </Stack>
);