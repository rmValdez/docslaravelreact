import React, { Fragment } from 'react';
import { Grid } from "@mui/material";
import { Loader } from '../appTools/loaders/Loader';
import useStore from '../states/store';

export const LoginLayout = ({
  children
}) => {
  const [initialState] = useStore();

  return (
    <Grid
      container
      direction="row"
      height="100vh"
      justifyContent="center" 
      alignItems="center"
    >
      <Grid container direction="column" justifyContent="center" alignItems="center" tablet={3}>
        {children}
      </Grid>
      {initialState.loaderState ? (
        <Loader />
      ) : <Fragment />}
    </Grid>
  );
};

export default LoginLayout;