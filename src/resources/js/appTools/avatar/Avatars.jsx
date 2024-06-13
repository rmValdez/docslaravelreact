import React from 'react';
import { Avatar, Box, Stack, Tooltip, Typography } from '@mui/material';
import { fullNameHelper } from '../../helpers/stringHelpers';
import { NmsCardComponent } from '../../componentHelper/cards/Cards';

export const Gravatar = (props) => {
  const {
    avatar = 'a07bbea5209d',
    width = '30px',
    height = '30px',
    border = '2px solid red',
    background,
    boxShadow = 'none',
    others,
    tooltip = null
  } = props;

  return (
    <Tooltip title={tooltip}>
      <Avatar
        sx={{
          width: width,
          height: height,
          border: border,
          background: background,
          boxShadow: boxShadow
        }}
        src={`https://www.gravatar.com/avatar/${avatar}?&s=256&d=robohash`}
        alt={'Gravatar'}
        {...others}
      />
    </Tooltip>
  );
};

export const ManualGravatar = (props) => {
  const { userInfo, } = props;
  return (
    <Box sx={{borderRadius: '5px', margin: '5px', display: 'flex',minWidth: '15vw'}}>      
      <NmsCardComponent sx={{width:'350px'}}>
        <Box display={'flex'}>
          <Gravatar border={'2px solid #ffffff00'} avatar={userInfo?.md5_company_email ?? 'asdasd123aZcz'} height={'60px'} width={'60px'}/>
          <Stack marginLeft={'10px'}>
            <Typography variant='h6' sx={{ color: 'text.secondary' }}>          
              {fullNameHelper(userInfo)}
            </Typography>
            <Typography variant='h6' sx={{ color: 'text.main' }}>
              {userInfo?.position ?? 'Rank and file'}
            </Typography>
          </Stack>
        </Box>
      </NmsCardComponent>
    </Box>
  );
};