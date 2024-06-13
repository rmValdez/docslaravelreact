import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { BlockIcon, CheckIcon, SaveIcon } from '../../icons/MaterialIcons';
import { CustomIconButton } from './CustomIconButton';

const FormIconButtons = ({ saveAction, isSaveDisabled }) => {

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const buttons = [
    {
      action: () => setIsConfirmationVisible(true),
      isConfirm: !isConfirmationVisible,
      icon: <SaveIcon />,
      color: 'success',
      disabled: isSaveDisabled
    },
    {
      action: saveAction,
      isConfirm: isConfirmationVisible,
      icon: <CheckIcon />,
      color: 'success',
      disabled: isSaveDisabled
    },
    {
      action: () => setIsConfirmationVisible(false),
      isConfirm: isConfirmationVisible,
      icon: <BlockIcon />,
      color: 'secondary'
    }
  ];

  return (
    <Stack direction={'row'}>
      {
        buttons?.map((button, index) => {
          return (
            <CustomIconButton
              key={`button-key-${index}`}
              icon={button?.icon}
              color={button?.color}
              sx={{ display: !button?.isConfirm ? 'none' : 'visible' }}
              onClick={button?.action}
              isDisabled={button?.disabled}
            />
          );
        })
      }
    </Stack>
  );
};

export default FormIconButtons;