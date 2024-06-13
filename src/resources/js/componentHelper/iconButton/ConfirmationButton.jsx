import React, { Fragment, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export const ConfirmationButton = (props) => {
  const {
    handleConfirm,
    children,
    disabledSubmit = false
  } = props;
  const [forConfirm, setForConfirm] = useState(false);
  const handleProceed = () => {
    handleConfirm();
    setForConfirm(false);
  };

  return <Fragment>
    {
      forConfirm
        ? <Box display={'flex'} gap={1} alignItems={ children ? 'start' : 'center'} flexDirection={children ? 'column' : 'row'} >
          <Typography variant='small'>Would you like to proceed?</Typography>
          {children}
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <Button variant='outlined' size={'small'} color={'secondary'} onClick={() => setForConfirm(false)}>
              Cancel
            </Button>
            <Button variant='contained' size={'small'} color={'success'} onClick={() => handleProceed()}>
              Proceed
            </Button>
          </Box>
        </Box>
        : <Button disabled={disabledSubmit} variant='contained' size={'small'} color={'success'} onClick={() => setForConfirm(true)}>
          Submit
        </Button>
    }
  </Fragment>;
};