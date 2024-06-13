import React from 'react';
import { Box, Dialog, DialogContent, Divider, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import { CustomIconButton } from '../iconButton/CustomIconButton';
import ClearIcon from '@mui/icons-material/Clear';

export const CustomDialog = (props) => {

  const {
    divider = true,
    dialogStatus,
    handleCloseDialog,
    dialogSize = 'laptop',
    actionButtons,
    title,
    subTitle,
    isCloseVisible = true,
    children,
    minHeight,
    maxHeight,
    isPersistent = false,
    isLoading = false,
    fullScreen = false,
    headerAction,
    titleTextTransform = 'capitalize',
    ...others
  } = props;

  return (
    <Dialog open={dialogStatus} onClose={!isPersistent ? handleCloseDialog : null} maxWidth={dialogSize} {...others} fullScreen={fullScreen} fullWidth>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Typography variant='h5' textTransform={titleTextTransform}>{title}</Typography>
          <Typography mt={0.5}>{subTitle}</Typography>
        </Box>
        {
          isCloseVisible && <CustomIconButton icon={<ClearIcon />} tooltip={'Close'} onClick={() => handleCloseDialog()} />
        }
      </Stack>
      {divider && (<Divider sx={{ margin: '13px 0px' }} />)}
      {isLoading && <LinearProgress />}
      {headerAction}
      <DialogContent sx={{ minHeight: minHeight, maxHeight: maxHeight }}>
        {children}
      </DialogContent>
      {
        actionButtons &&
        <Grid container item mobile={12} justifyContent={'flex-end'} mt={1.5}>
          {actionButtons}
        </Grid>
      }
    </Dialog>
  );
};