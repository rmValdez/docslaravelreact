import React from 'react';
import { Grid, Popover, Typography } from '@mui/material';
import { CustomIconButton } from '../iconButton/CustomIconButton';
import { CloseIcon } from '../../icons/MaterialIcons';
import { CustomDivider } from '../dividers/Divders';

export const CustomPopover = (props) => {

  const {
    open,
    anchorEl,
    handleClose,
    children,
    title = 'Details',
    titleVariant = 'h6',
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'left',
    },
    transformOrigin = {
      vertical: 'top',
      horizontal: 'right',
    },
    width,
    showDivider = true,
    closeIcon,
    closeTooltip
  } = props;

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      sx={{
        '.MuiPaper-root': {
          padding: '20px 20px 30px 20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2);',
          borderRadius: '10px',
          width: width,
        }
      }}
    >
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Grid item>
          <Typography variant={titleVariant}>{title}</Typography>
        </Grid>
        <Grid item>
          <CustomIconButton icon={closeIcon ?? <CloseIcon />} onClick={() => handleClose()} tooltip={closeTooltip}/>
        </Grid>
      </Grid>
      {showDivider && <CustomDivider />}
      {children}
    </Popover>
  );
};
