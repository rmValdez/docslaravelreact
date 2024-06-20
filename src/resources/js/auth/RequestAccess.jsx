import React, { useEffect, useState, Fragment } from "react";

import { useFormik } from 'formik';
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { getUserPlatformAccessStatus, requestAccessOnPlatform } from "../../config/apisauce";
import { useSnackbar } from 'notistack';
import LoginLayout from "../../components/layouts/LoginLayout";
import { useNavigate, useParams } from "react-router-dom";

const RequestAccess = () => {

  const { clientId } = useParams();
  const navigate = useNavigate();
  const [access, setAccess] = useState('');
  const [platformDetail, setPlatformDetail] = useState({});
  const [message, setMessage] = useState('');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const checkUserAccess = async() => {
    const data = { oauth_clients_id: clientId };
    const result = await getUserPlatformAccessStatus(data);
    if (result.ok) {
      const platform = result.data?.platformDetail;
      const userAccess = result.data?.userAccess?.access;
      setPlatformDetail(platform);
      if (result.data && userAccess == 'allowed' && platform.locked == 0) {
        const url = new URL(result.data?.userAccess.client.redirect);
        const baseUrl = `${url.protocol}//${url.hostname}`;
        window.location.href = baseUrl;
      }
      
      const retrievedAccess = result.data?.userAccess != null ? userAccess : 'request';
      const accessStatus = platform?.locked == 1 ? 'locked' : retrievedAccess;
      setAccess(accessStatus);
      setAppropriateMessage(accessStatus);
    } else {
      navigate("/login");
    }
  };

  const setAppropriateMessage = (accessStatus) => {
    switch(accessStatus) {
      case 'request':
        setMessage('You are currently not allowed to access this platform. Would you like to request access for this platform?');
        return;
      case 'unauthorized':
        setMessage('You are currently not authorized to access this platform.');
        return;
      case 'pending':
        setMessage('You have requested access to this platform and it is currently pending.');
        return;
      case 'allowed':
        setMessage('Redirecting..');
        return;
      case 'locked':
        setMessage(`${platformDetail?.name} is locked`);
        return;
      default:
        setMessage('You are currently not allowed on this platform.');
        return;
    }
  };

  const requestAccessFormik = useFormik({
    initialValues: {
      oauth_clients_id: clientId,
      access: 'pending',
    },
    onSubmit: async (values) => {
      const result = await requestAccessOnPlatform(values);
      if (result.ok) {
        setAccess('pending');
        setAppropriateMessage('pending');
      } else {
        enqueueSnackbar({message:result?.data?.message, variant: 'error'});
      }
    },
  });

  useEffect(() => {
    checkUserAccess();
  }, []);

  return (
    <LoginLayout sideComponents={
      <form onSubmit={requestAccessFormik.handleSubmit}>
        <Grid
          container
          direction="column"
          spacing={1}
          padding={"20%"}
        >
          <Grid item>
            <Typography>{message}</Typography>
          </Grid>

          { access == 'request' &&
            <Grid item>
              <Button type='submit' fullWidth  color='primary' size="large">Request Access</Button>
            </Grid>
          }
        </Grid>
      </form>
    }/>
  );
}

export default RequestAccess;