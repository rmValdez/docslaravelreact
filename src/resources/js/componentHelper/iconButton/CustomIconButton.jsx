import { IconButton, Tooltip } from '@mui/material';
import React, { Fragment } from 'react';

export const CustomIconButton = (props) => {
  const {
    tooltip,
    icon,
    isDisabled,
    tooltipPlacement,
    withArrow = false,
    ...others
  } = props;

  return (
    <Tooltip title={tooltip} placement={tooltipPlacement} arrow={withArrow}>
      <IconButton {...others} disabled={isDisabled}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export const ConfirmIconButton = (props) => {
  const {
    tooltip,
    icon,
    isDisabled,
    text,
    secondary,
    anchorEl,
    handleClose,
    handleConfirm,
    ...others
  } = props;
  return (
    <Fragment>
      <ConfirmPopover
        text={text}
        secondary={secondary}
        anchorEl={anchorEl}
        handleClose={() => handleClose()}
        handleConfirm={() => handleConfirm()}
      />

      <Tooltip title={tooltip}
      // sx={{display: Boolean(anchorEl) && 'none' }}
      >
        <IconButton {...others} disabled={isDisabled}>
          {icon}
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};