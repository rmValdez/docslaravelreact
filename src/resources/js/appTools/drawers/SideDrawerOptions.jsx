import React, { Fragment, useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Gravatar } from '../avatar/Avatars';
import useStore from '../../states/store';
import { ThemeSwitcher } from '../../componentHelper/iconButton/ThemeSwitcher';
import { TooltipPopover } from '../../componentHelper/tooltip/TooltipPopover';
import { getFirstWord, truncateText } from '../../helpers/stringHelpers';
import { CustomIconButton } from '../../componentHelper/iconButton/CustomIconButton';
import { ArrowDownwardIcon, ArrowUpwardIcon, CloseIcon, LogoutIcon, PersonIcon } from '@mui/icons-material';

export const SideDrawerOptions = () => {
  const [{ drawerMode, userInfo }, { logoutUser }] = useStore();
  const [popOverState, setPopOverState] = useState(false);
  const [showMyPlatforms, setShowMyPlatforms] = useState(false);

  const onLogout = () => {
    window.location.href = '/logout';
    logoutUser();
  };
  const handlePopover = () => {
    setPopOverState(prev => !prev);
  };

  const handleClosePopover = () => {
    setPopOverState(false);
    setShowMyPlatforms(false);
  };

  useEffect(() => {
    if (drawerMode == 'close') {
      handleClosePopover();
    }
  }, [drawerMode]);


  return (
    <Fragment>
      {
        userInfo &&
        <Fragment>
          <TooltipPopover
            title={
              <Fragment>
                <Box sx={{ opacity: 1, zIndex: 9999, }}>
                  <Grid container direction='column' alignItems='center' spacing={1}>
                    <Grid container item justifyContent={'space-between'}>
                      <Grid item>
                        <ThemeSwitcher />
                        {
                          showMyPlatforms ? <CustomIconButton
                            icon={<PersonIcon sx={{ color: '#FFF' }} />}
                            tooltip={'Profile'}
                            onClick={() => setShowMyPlatforms(false)}
                          /> : <CustomIconButton
                            icon={<PersonIcon/>}
                            tooltip={'Platforms'}
                            onClick={() => setShowMyPlatforms(true)}
                          />
                        }
                      </Grid>
                      <Grid item>
                        <CustomIconButton
                          icon={<CloseIcon />}
                          tooltip={'Close'}
                          onClick={handleClosePopover}
                          sx={{ color: '#FFF' }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item sx={{ width: (theme) => `calc(${theme.props.drawerWidth} - 25px)`, height: 145 }}>
                      {
                        showMyPlatforms ? <Stack />
                          : <Stack alignItems={'center'} mb={2}>
                            <Gravatar avatar={userInfo?.md5_company_email} border={'0px'} width={70} height={70} />
                            <Typography variant='h6'>{userInfo?.first_name}</Typography>
                            <Typography variant='body2'>{userInfo?.company_email}</Typography>
                          </Stack>
                      }
                    </Grid>
                    <Grid item sx={{ width: (theme) => `calc(${theme.props.drawerWidth} - 25px)` }}>
                      <Button
                        variant='contained'
                        fullWidth
                        onClick={() => onLogout()}
                        color='error'
                        startIcon={<LogoutIcon />}
                      >
                        Logout
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fragment>
            }
            open={popOverState}
            handleClosePopover={handleClosePopover}
          >
            {
              drawerMode == 'close' ?
                <IconButton onClick={handlePopover} sx={{ position: 'absolute', bottom: 7, width: '100%' }}>
                  <Gravatar avatar={userInfo?.md5_company_email} />
                </IconButton>
                :
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{ position: 'absolute', bottom: 7, width: '100%' }}>
                  <Button
                    sx={{
                      margin: '0 5px 0 5px',
                      color: (theme) => theme.props.contrastText,
                      ':hover': {
                        backgroundColor: (theme) => theme.palette.grey.hoverColor
                      }
                    }}
                    color={'grey'}
                    onClick={handlePopover}
                    fullWidth
                  >
                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                      <Grid item>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
                          <Gravatar avatar={userInfo?.md5_company_email} border={'0px'} background={'#FFF'}/>
                          <Typography fontWeight={800}>{truncateText(getFirstWord(userInfo?.first_name ?? ''), 15)}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item mt={0.5}>
                        {popOverState ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                      </Grid>
                    </Grid>
                  </Button>
                </Stack>
            }
          </TooltipPopover>
        </Fragment >
      }
    </Fragment >
  );
};