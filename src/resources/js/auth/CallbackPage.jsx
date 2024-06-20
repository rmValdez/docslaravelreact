import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import LoginLayout from '../../components/layouts/LoginLayout';

const CallbackPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const encodedRedirect = params.get('redirect');

  useEffect(() => {
    const decodedCallbackRedirect = decodeURIComponent(atob(encodedRedirect));
    window.location.href = decodedCallbackRedirect;
  }, [encodedRedirect]);

  return (
    <LoginLayout sideComponents={
      <Grid
        container
        direction="column"
        spacing={1}
        alignItems="center"
        padding={"20%"}
      >
        <Grid item>
          <Typography>Checking authentication status. Please wait..</Typography>
        </Grid>
      </Grid>
    }/>
  );
};

export default CallbackPage;