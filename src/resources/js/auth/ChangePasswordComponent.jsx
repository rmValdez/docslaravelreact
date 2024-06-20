import React, { Fragment } from "react";
import { Grid, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { userSetNewPassword } from "../config/apisauce";
import { FormikTextfieldPass } from "../componentHelper/formik/FormikTextfieldPass";
import { useUIStore } from "../states/store";
import { useSnackbar } from "notistack";
import * as Yup from 'yup';

const ChangePasswordComponent = ({
  formikData,
  redirect,
}) => {

  const [, { setUserInfo, openLoader, closeLoader }] = useUIStore();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .required('New Password is required')
        .min(8, 'Password must be at least 8 characters long'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .min(8, 'Password must be at least 8 characters long'),

    }),
    onSubmit: (values, action) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async (values) =>  {
    openLoader();
    const result = await userSetNewPassword({
      password: values.newPassword,
      password_confirmation: values.newPassword,
      current_password: formikData.password,
      company_email: formikData.company_email,
    });

    if (result.ok) {
      window.location.href = "/auth/callback?url=" + redirect;
      enqueueSnackbar({ message: result?.data?.message, variant: 'success' });
    } else {
      enqueueSnackbar({ message: result?.data?.message, variant: 'error' });
    }
    closeLoader();
  }

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          spacing={1}
          height="100vh"
        >
          <Grid
            item
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              width="100px"
              src="/images/nms-icon.png"
            />
          </Grid>
          <Grid item>
            <FormikTextfieldPass
              fieldchange={(field, value) =>
                formik.setFieldValue(field, value)
              }
              field={"newPassword"}
              fieldval={formik.values.newPassword}
              err={formik.errors?.newPassword ? true : false}
              helpertxt={formik.errors?.newPassword}
              placeholder={"Set New Password"}
            />
          </Grid>
          <Grid item>
            <FormikTextfieldPass
              fieldchange={(field, value) =>
                formik.setFieldValue(field, value)
              }
              field={"confirmPassword"}
              fieldval={formik.values.confirmPassword}
              err={formik.errors?.confirmPassword ? true : false}
              helpertxt={formik.errors?.confirmPassword}
              placeholder={"Confirm New Password"}
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
};

export default ChangePasswordComponent;