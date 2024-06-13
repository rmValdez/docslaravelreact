import { Box, Button } from '@mui/material';
import React, { Fragment } from 'react';
import { CustomDialog } from './CustomDialog';

export const ConfirmationDialog = (props) => {

  const {
    dialogStatus,
    onCloseDialog,
    onConfirm,
    confirmButtonColor = 'success',
    dialogSize = 'laptop',
    title = 'Confirmation',
    children,
    isLoading = false,
    cancelLabel = 'Cancel',
    confirmLabel = 'Confirm',
    actionButtons = null,
    ...others
  } = props;

  return (
  <CustomDialog
    {...others}
    dialogSize={dialogSize}
    title={title}
    isLoading={isLoading}
    handleCloseDialog={!isLoading && onCloseDialog}
    dialogStatus={dialogStatus}
    actionButtons={ 
      <Box display={'flex'} gap={1} justifyContent={'flex-end'}>
        {
         actionButtons ?? (
          <Fragment>
            <Button disabled={isLoading} onClick={onCloseDialog}>{cancelLabel}</Button>
            <Button disabled={isLoading} color={confirmButtonColor} onClick={onConfirm}>{confirmLabel}</Button>
          </Fragment>
         )
        }
      </Box>
    }
  >
    {children}
  </CustomDialog>
  );
};