import { InfoRounded } from '@mui/icons-material';
import { TextField, InputAdornment, Tooltip } from '@mui/material';
import React, { Fragment } from 'react';

export const FormikTextField = ({
  variant = 'outlined',
  fieldchange,
  field,
  fieldval = '',
  title = '',
  type = 'text',
  select = false,
  multiline = false,
  err = false,
  helpertxt = '',
  children,
  icon,
  message,
  inputadornmentmessage,
  readOnly = false,
  size = 'small',
  ...otherProps // Collect other props
}) => {
  const handleChange = (event) => {
    fieldchange(field, event.target.value);
  };

  return (
    <TextField
      size={size}
      placeholder={title}
      variant={variant}
      select={select}
      multiline={multiline}
      rows={8}
      onChange={handleChange}
      type={type}
      error={Boolean(err)}
      label={title}
      helperText={helpertxt}
      value={fieldval}
      {...otherProps}  // Spread the rest of the props
      SelectProps={{ IconComponent: () => null }}
      InputProps={{
        style: {
          fontWeight: readOnly ? 700 : 400,
        },
        readOnly: readOnly,
        ...(variant === 'outlined' ? {} : { disableUnderline: true }),
        startAdornment: icon ? icon : '',
        endAdornment: inputadornmentmessage ?
          <InputAdornment position="end">
            {inputadornmentmessage}
          </InputAdornment> :
          message ?
            <Fragment >
              <Tooltip title={message}>
                <InfoRounded sx={{ cursor: 'pointer' }} color='info' />
              </Tooltip>
            </Fragment> : ''
      }}
    >
      {children}
    </TextField>
  );
};
