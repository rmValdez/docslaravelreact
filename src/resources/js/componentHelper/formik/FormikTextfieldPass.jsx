import { Visibility, VisibilityOff, Casino } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { CustomIconButton } from '../iconButton/CustomIconButton';
import { generateRandomAlphaNumericString } from '../../helpers/stringHelpers';
import React, { useState, useEffect, Fragment } from 'react';

export const FormikTextfieldPass = ({
  variant = 'outlined',
  fieldchange,
  field,
  fieldval = '',
  title = '',
  err = false,
  helpertxt = '',
  size = 'small',
  preventPaste = false,
  hasGeneratePasswordAdornment = false,
  generatePasswordOnLoad = false,
  readOnly = false,
  onSetPassword,
  minimumPasswordLength,
  disabled = false,
  ...otherProps // Capture remaining props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [defaultError, setDefaultError] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleGenerateRandomPassword = () => {
    const generatedPassword = generateRandomAlphaNumericString(minimumPasswordLength);
    setPasswordValue(generatedPassword);
    onSetPassword(generatedPassword, true);
  };

  useEffect(() => {
    if (generatePasswordOnLoad) {
      hasGeneratePasswordAdornment ? handleGenerateRandomPassword() : setPasswordValue(fieldval);
    }
  }, [generatePasswordOnLoad, hasGeneratePasswordAdornment, fieldval]);

  const handleChange = (event) => {
    preventPaste && setDefaultError('');
    fieldchange(field, event.target.value ?? '');
    setPasswordValue(event.target.value);
  };

  useEffect(() => {
    onSetPassword && onSetPassword(passwordValue);
  }, [onSetPassword, passwordValue]);

  const EndAdornments = () => {
    if (disabled) return <Fragment></Fragment>;

    return(
      <Fragment>
        {
          hasGeneratePasswordAdornment &&
            <CustomIconButton
              tooltip={'Generate random password'}
              icon={<Casino />}
              onClick={handleGenerateRandomPassword}
            />
        }
        <CustomIconButton
          tooltip={'Toggle password visibility'}
          icon={showPassword ? <VisibilityOff /> : <Visibility />}
          onClick={handleClickShowPassword}
        />
      </Fragment>
    );
  };

  return (
    <TextField
      helperText={helpertxt || defaultError}
      value={passwordValue}
      disabled={disabled}
      autoComplete={'off'}
      size={size}
      placeholder={title}
      variant={variant}
      readOnly={false}
      onPaste={(event) => {
        if (preventPaste) {
          event.preventDefault();
          setDefaultError('Pasting is not allowed');
        }
      }}
      inputProps={{
        'aria-autocomplete': 'off',
        autoComplete: 'off',
      }}
      InputLabelProps={{
        'aria-autocomplete': 'off',
        autoComplete: 'off',
      }}
      onChange={handleChange}
      type={showPassword ? 'text' : 'password'}
      fullWidth={true}
      error={Boolean(err) || Boolean(defaultError)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EndAdornments />
          </InputAdornment>
        ),
        ...(variant === 'outlined' ? {} : { disableUnderline: true }),
        ...otherProps,
      }}
    />
  );
};
