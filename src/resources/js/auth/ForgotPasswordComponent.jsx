import React, {Fragment} from "react";
import { Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';
import { FormikTextField } from "../componentHelper/formik/FormikTextField";

const ForgotPasswordComponent = ({
  formikAuth,
  openDialog,
  setOpenDialog,
  handleCloseDialog,
  setAuthResetpasswordResponse,
  authResetpasswordResponse,
  setAuthenticationState
}) => {
    const forgotPasswordResponse = Object.entries(authResetpasswordResponse).length === 0;
    return(
      <Dialog  sx={{'& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              backgroundColor:'paper',
            },
          },}} 
        open={Boolean(openDialog)}
        onClose={handleCloseDialog}
      >
        <Stack spacing={3} direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant={'h6'} alignSelf={'center'}>
          {
          forgotPasswordResponse 
            ? 
          'Company Email Address'
            :
          authResetpasswordResponse.message
          }
          </Typography>
        </Stack>
        <DialogContent>
          
          <ResetWithmEmail
          formikAuth={formikAuth}
          authResetpasswordResponse={authResetpasswordResponse}
          forgotPasswordResponse={forgotPasswordResponse}
          />

        </DialogContent>
          <HandleFormikSubmit
          forgotPasswordResponse={forgotPasswordResponse }
          formikAuth={formikAuth}
          setOpenDialog={setOpenDialog}
          openDialog={openDialog}
          setAuthResetpasswordResponse={setAuthResetpasswordResponse}
          setAuthenticationState={setAuthenticationState}
          />
      </Dialog>
    );
}

export default ForgotPasswordComponent;

const ResetWithmEmail = ({
  formikAuth,
  authResetpasswordResponse,
  forgotPasswordResponse
}) => {
  return(
  <Stack>
  {
   forgotPasswordResponse ?
    <FormikTextField
      fieldchange={(field, value) => formikAuth.setFieldValue(field, value)}
      field={'company_email_reset_password'}
      fieldval={formikAuth.values.company_email_reset_password}
      err={formikAuth.errors?.company_email_reset_password ? true : false}
      helpertxt={formikAuth.errors?.company_email_reset_password}
      placeholder={'Email'}
    />    
   :
    <Typography variant={'h6'} alignSelf={'center'}>
      {authResetpasswordResponse.action}
    </Typography>
  }
  </Stack>
  );
}

const HandleFormikSubmit = ({
  formikAuth,
  setAuthenticationState,
  setOpenDialog,
  openDialog,
  forgotPasswordResponse,
  setAuthResetpasswordResponse
}) => {
 return (
  <Stack>
    {forgotPasswordResponse ? 
   <Stack spacing={3} direction='row' justifyContent='flex-end' alignItems='center'>
    <Button onClick={() => {
      setAuthenticationState('login');
      setOpenDialog(openDialog ? false : true);
      formikAuth.setValues({company_email: '',password: ''});
      }}>
            cancel
    </Button>
    <Button 
      color='success' 
      type={"submit"}
      onClick={formikAuth.handleSubmit}
    >
      submit
    </Button>
  </Stack>
  :
  <Button color='success' onClick={() => {
    setOpenDialog(openDialog ? false : true);
    setAuthResetpasswordResponse({});
  }}>
      OK
  </Button>
}
  </Stack>
  );
};
