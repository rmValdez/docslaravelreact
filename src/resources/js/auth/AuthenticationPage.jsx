import React, { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Box, Grid } from "@mui/material";
import { checkUserStatus, login, resetPasswordSendEmail } from "../config/apisauce";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import LoginComponent from "./LoginComponent";
import { useUIStore } from "../states/store";
import { LoginLayout } from "../layouts/LoginLayout";
import * as Yup from 'yup';
import ForgotPasswordComponent from "./ForgotPasswordComponent";
import ChangePasswordComponent from "./ChangePasswordComponent"

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const [, { setUserInfo, openLoader, closeLoader }] = useUIStore();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [formikData, setFormikData] = useState('');
  const [redirect, setRedirect] = useState('');
  const [authenticationState, setAuthenticationState] = useState("login");
  const [authResetpasswordResponse, setAuthResetpasswordResponse] = useState({});

  const initialValueGenerator = (initialValue) => {
    if (initialValue !== 'login') return { company_email_reset_password: '' };
    return { company_email: '', password: '' };
  }

  const validationSchemaGenerator = (valueValidator) => {
    if (valueValidator !== 'login') return Yup.object().shape({
      company_email_reset_password: Yup.string().email('Not a valid email').required('Email is required'),
    });
    return Yup.object().shape({
      company_email: Yup.string().email('Email is required').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });
  }

  const formikAuth = useFormik({
    initialValues: initialValueGenerator(authenticationState),
    validationSchema: validationSchemaGenerator(authenticationState),
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
      setTimeout(() => {
        if (authenticationState !== 'login') {
          handleForgotPassword(values);
        } else {
          handleLogIn(values);
        }
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  const handleLogIn = async (formikValues) => {
    // setFormikData(formikValues);
    // openLoader();
    // const result = await login(formikValues);
    // if (result.ok) {
    //   setRedirect(result?.data?.data?.redirect);
    //   const authUser = result?.data?.data;
    //   setUserInfo(authUser.user, authUser.permission, authUser.role);
    //   if (!authUser?.user?.is_password_set) {
    //     setIsLoginMode(false);
    //     enqueueSnackbar({ message: "Please set your new password", variant: 'success' });
    //   } else {
    //     window.location.href = "/auth/callback?url=" + result?.data?.data?.redirect;
    //     enqueueSnackbar({ message: result?.data?.message, variant: 'success' });
    //   }
    // } else {
    //   if (result.status == RETURN_CODE.CSRF) {
    //     window.location.replace('/login');
    //   } else {
    //     enqueueSnackbar({ message: result?.data?.message, variant: 'error' });
    //   }
    // }
    // closeLoader();
  }

  const handleForgotPassword = async (formikValues) => {
  //   openLoader();
  //   const result = await resetPasswordSendEmail(formikValues);
  //   if (result.ok) {
  //     setAuthResetpasswordResponse(result.data.data);
  //     enqueueSnackbar({ message: result?.data?.message, variant: 'success' });
  //   } else {
  //     enqueueSnackbar({ message: result?.data?.message, variant: 'error' });
  //   }
  //   closeLoader();
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const checkUserStatusCall = async () => {
    // const result = await checkUserStatus();
    // const isPasswordSet = result?.data?.data?.user?.is_password_set;
    // setIsLoginMode(isPasswordSet ? false : true);
    // if (result.ok && isPasswordSet) {
    //   return navigate("/me");
    // }
  };

  useEffect(() => {
    checkUserStatusCall();
  }, []);

  return (
    <LoginLayout children={
      <Fragment>
        {
          isLoginMode ? 
          <LoginComponent
            formikAuth={formikAuth}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            setAuthenticationState={setAuthenticationState}
          />
          :
          <ChangePasswordComponent
            formikData={formikData}
            redirect={redirect}
          />
        }
        <ForgotPasswordComponent
          formikAuth={formikAuth}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          handleCloseDialog={handleCloseDialog}
          setAuthenticationState={setAuthenticationState}
          authResetpasswordResponse={authResetpasswordResponse}
          setAuthResetpasswordResponse={setAuthResetpasswordResponse}
        />
      </Fragment>
    }/>
  );
}

export default AuthenticationPage;
