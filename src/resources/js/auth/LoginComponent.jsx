import React, { Fragment } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { FormikTextField } from "../componentHelper/formik/FormikTextField";
import { FormikTextfieldPass } from "../componentHelper/formik/FormikTextfieldPass";

const initialValuesResetWithEmail = {
  company_email_reset_password: "",
};

const LoginComponent = ({
  formikAuth,
  setOpenDialog,
  openDialog,
  setAuthenticationState,
}) => {
  const handleFieldChange = (field, value) => {
    formikAuth.setFieldValue(field, value);
  };

  return (
    <Fragment>
      <form onSubmit={formikAuth.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          spacing={1}
          height="100vh"
        >
          <Grid item>
            <FormikTextField
              fieldchange={handleFieldChange}
              field={"company_email"}
              fieldval={formikAuth.values.company_email}
              err={formikAuth.errors?.company_email}
              helpertxt={formikAuth.errors?.company_email}
              placeholder={"Email"}
            />
          </Grid>
          <Grid item>
            <FormikTextfieldPass
              fieldchange={handleFieldChange}
              field={"password"}
              fieldval={formikAuth.values.password}
              err={formikAuth.errors?.password}
              helpertxt={formikAuth.errors?.password}
              placeholder={"Password"}
            />
          </Grid>
          <Grid item>
            <Button type={"submit"} fullWidth color="success" size="large">
              Log in
            </Button>
          </Grid>
          <Grid item>
            <Button
              m={1}
              fullWidth
              size="small"
              variant="standard"
              onClick={() => {
                formikAuth.setValues(initialValuesResetWithEmail);
                setAuthenticationState("resetWitmEMail");
                setOpenDialog(openDialog ? false : true);
              }}
            >
              <Typography>Forgot Password?</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default LoginComponent;
