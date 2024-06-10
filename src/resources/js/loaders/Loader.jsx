import React from 'react';
import { Box } from '@mui/system';
import { Dialog, Stack, Skeleton, Grid } from '@mui/material';
import { IconSpinner } from './ApiLoader';
import { floor } from 'lodash';

export const Loader = () => {
  return (
    <Dialog open={true} sx={{ backdropFilter: 'blur(50px)', zIndex: 9999 }}
      PaperProps={{
        style: {
          background: 'transparent',
          boxShadow: 'none'
        }
      }}
    >
      <Stack direction='column' justifyContent={'center'} alignItems='center'>
        <IconSpinner />
      </Stack>
    </Dialog>
  );
};

export const SkeletonLoader = (props) => {
  const {
    mode = 'alternate',
    columns = 0,
    rows = 0,
    width = 200,
    height = 40
  } = props;
  return (
    <Stack gap={1}>
      {mode == 'alternate' &&
        Array.from({ length: 6 }, (_, index) => {
          const align = index % 2 == 0 ? 'flex-start' : 'flex-end';
          return (
            <Box key={`skeleton-index-${index}`} sx={{ display: 'flex', justifyContent: align }}>
              <Skeleton variant="rounded" width={width} height={height} sx={{ borderRadius: '15px' }} />
            </Box>
          );
        })
      }
      {
        mode == 'column' &&
        <Grid container spacing={3}>
          {
            Array.from({ length: columns }, (_, index) => {
              return (
                <Grid key={`grid-index-${index}`} item mobile={floor(rows / 12)}>
                  {Array.from({ length: rows }, (_, index) => <Skeleton key={`skeleton-index-${index}`} variant="rounded" width={width} height={height} sx={{ borderRadius: '15px', m: 3 }} />)}
                </Grid>
              );
            })
          }
        </Grid>
      }
    </Stack>
  );
};