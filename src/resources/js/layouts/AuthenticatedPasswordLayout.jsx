import { Fragment, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { FormikTextfieldPass } from "../generic/formik/FormikTextfieldPass";
import { useFormik } from "formik";
import { confirmUserPassword } from "../../config/apisauce";
import { useUIStore } from "../../states/store";
import * as Yup from 'yup';
import useSnackbar from "../../hooks/useSnackbar";

export const AuthenticatedPasswordLayout = ({ title, description, children, isAuthenticated }) => {
  const [, { openLoader, closeLoader }] = useUIStore();
  const { success, error } = useSnackbar();
  const [authenticated, setAuthenticated] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      openLoader();
      const { ok, data } = await confirmUserPassword(values);

      if (ok) {
        setAuthenticated(true);
        isAuthenticated(true);
        closeLoader();
      } else {
        error(data?.message);
      }
      closeLoader();
    }
  });

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      py={'1rem'}
    >
      {
        authenticated ? <Fragment>{children}</Fragment>
          : <form onSubmit={formik.handleSubmit}>
            <Typography variant="h6">{description} </Typography>
            <Typography fontWeight="bold">{title}</Typography>

            <FormikTextfieldPass
              field={"password"}
              placeholder={"Password"}
              fieldchange={(field, value) => formik.setFieldValue(field, value)}
              fieldval={formik.values.password}
              helpertxt={formik.errors?.password}
              err={formik.errors?.password ? true : false}
            />

            <Stack flexDirection={'row'} justifyContent={'end'} width={'100%'}>
              <Button color="error" onClick={() => formik.handleSubmit()}>Submit</Button>
            </Stack>
          </form>
      }
    </Stack>
  );
}