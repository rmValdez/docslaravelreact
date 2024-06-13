import React from 'react';
import { Box, Button, Popover, Typography } from '@mui/material';

const ConfirmPopover = (props) => {
  const {
    text,
    secondary = '',
    anchorEl,
    handleClose,
    children,
    handleConfirm,
    maxWidth = '250px',
    disabledButtonConfirm = false,
  } = props;
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Box padding={2} sx={{ maxWidth: maxWidth, p: 2 }}>
        <Typography fontWeight={'bold'}>{text}</Typography>
        {secondary && <Typography mb={1}>{secondary}</Typography>}
        {children}
        <Box display={'flex'} gap={1} justifyContent={'flex-end'}>
          <Button onClick={()=>handleClose()}>Cancel</Button>
          <Button disabled={disabledButtonConfirm} color='success' onClick={()=>handleConfirm()}>Confirm</Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default ConfirmPopover;