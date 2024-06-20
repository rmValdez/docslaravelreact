import React, { useEffect, useState, Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useSnackbar } from "notistack";
import { Grid, Typography, Button } from "@mui/material";
import { queryIsKeyValid, setNewPasswordForUser, getSettings } from "../../config/apisauce";
import { LoginLayout } from "../../components/layouts/LoginLayout";
import { useNavigate, useParams } from "react-router-dom";
import { FormikTextfieldPass } from "../../components/generic/formik/FormikTextfieldPass";
import { useUIStore } from "../../states/store";

const SetNewPasswordPage = () => {
  const [, { openLoader, closeLoader }] = useUIStore();
  const { forgotPasswordKey } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [ minimumPasswordLen, setMinimumPasswordLen ] = useState(6);

  const setPasswordFormik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .required('Required')
        .min(minimumPasswordLen, 'Minimum of '+minimumPasswordLen+' characters'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('newPassword'), ''], 'Passwords do not match'),
    }),
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
      setTimeout(() => {
        handleSetNewPassword(values);
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  const handleSetNewPassword = async(values) => {
    const payload = {...values, key: forgotPasswordKey};
    const result = await setNewPasswordForUser(payload);
    if (result.ok) {
      enqueueSnackbar({ message: result?.data?.message, variant: "success" });
      navigate("/login");
    } else {
      enqueueSnackbar({ message: result?.data?.message, variant: "error" });
    }
  };

  const fetchSettings = async() => {
    openLoader();
    const result = await getSettings();
    if (result.ok) {
      setMinimumPasswordLen(result.data.data.password_minimum_length);
    } else {
      enqueueSnackbar({ message: result?.data?.message, variant: "error" });
    }
    closeLoader();
  };

  const checkIsKeyValid = async() => {
    const result = await queryIsKeyValid({ 'key': forgotPasswordKey });
    if (result.ok) {
      if (!result.data.data.valid) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  const returnNewPasswordForm = () => {
    return (
      <Fragment>
        <form onSubmit={setPasswordFormik.handleSubmit}>
          <Grid
            container
            direction="column"
            spacing={1}
          >
            <Grid item>
              <Typography>Set your new password:</Typography>
            </Grid>
            <Grid item>
              <FormikTextfieldPass
                field={"newPassword"}
                placeholder={"Password"}
                fieldchange={(field, value) => setPasswordFormik.setFieldValue(field, value)}
                fieldval={setPasswordFormik.values.newPassword}
                helpertxt={setPasswordFormik.errors?.newPassword}
                err={setPasswordFormik.errors?.newPassword ? true : false}
              />
            </Grid>
            <Grid item>
              <FormikTextfieldPass
                field={"confirmPassword"}
                placeholder={"Confirm Password"}
                fieldchange={(field, value) => setPasswordFormik.setFieldValue(field, value)}
                fieldval={setPasswordFormik.values.confirmPassword}
                helpertxt={setPasswordFormik.errors?.confirmPassword}
                err={setPasswordFormik.errors?.confirmPassword ? true : false}
              />
            </Grid>
            <Grid item>
              <Button type={"submit"} fullWidth color="primary" size="large">
                Set New Password
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    );
  }

  useEffect(() => {
    checkIsKeyValid();
    fetchSettings();
  }, []);

  return (
    <LoginLayout sideComponents={returnNewPasswordForm()} />
  );
}

export default SetNewPasswordPage;
