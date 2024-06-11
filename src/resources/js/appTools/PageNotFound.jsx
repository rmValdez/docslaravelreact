import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { LottieAnimation } from '../../../components/generic/lottie/LottieAnimation';
import moonDog from '../../../../../public/jsonAnimation/moon-dog.json';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  
  const navigate = useNavigate();
  return (
    <Grid container direction={'column'} alignItems={'center'}>
      <Grid item>
        <LottieAnimation animation={moonDog} style={{ height: '50vh', width: '100%' }} />
      </Grid>
      <Grid container item direction={'column'} alignItems={'center'} spacing={2}>
        <Grid item>
          <Typography variant='h3'>
            Sorry,
          </Typography>
          <Typography variant='h5'>
            The page you request was not found
          </Typography>
        </Grid>
        <Grid container item direction={'row'} alignItems={'center'} spacing={3} justifyContent={'center'}>
          <Grid item>
            <Button color={'info'} variant='outlined' onClick={() => navigate(-1)} fullWidth>
              Go back
            </Button>
          </Grid>
          <Grid item>
            <Button color={'info'} variant='outlined' onClick={() => navigate('/', { replace: true })}>
              Back to home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;