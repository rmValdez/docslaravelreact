import React from 'react';
import { Tooltip } from '@mui/material';

export const TooltipPopover = ({ title, handleClosePopover, open, children }) => {

  return (
    <Tooltip
      PopperProps={{
        disablePortal: true,
      }}
      open={open}
      onClose={handleClosePopover}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      arrow
      placement='top'
      sx={{
        '.css-1dnhiyy-MuiTooltip-tooltip': {
          backgroundColor: (theme) => `${theme.palette.background.default} !important`
        }
      }}
      title={title}
    >
      {children}
    </Tooltip>
  );
};