
import React from 'react';
import { SnackbarProvider } from 'notistack';
import ThemeProvider from './ThemeProvider';
import { ContentCopyRounded, RadioButtonCheckedRounded } from '@mui/icons-material';

const RootProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top'
        }}
        iconVariant={{
          copy: <ContentCopyRounded sx={{ mr: 1 }} />,
          default: <RadioButtonCheckedRounded sx={{ mr: 1 }} />,
        }}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider >
  );
};

export default RootProvider;