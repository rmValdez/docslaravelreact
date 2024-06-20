import React from 'react';
import { Box, CardContent, useTheme } from '@mui/material';
import { NmsCard } from '../generic/cards/Cards';
import { UIStore } from '../../states/store';
import { Profile } from '../../pages/myAccount/Profile';

const MyAccountLayout = (props) => {
  const { children, wide = false, ...others } = props;
  const themeG = useTheme();
  return (
    <UIStore>
      {({ drawerMode }) => {
        return (
          <Box
            component="span"
            display="block"
            margin={{
              tablet: '10px 10px 10px 0'
            }}
            marginLeft={{
              tablet: drawerMode == 'open' ? `${parseInt(themeG.props.drawerWidth) + 10}px` : `calc(${themeG.spacing(4)} + 20px)`
            }}
            height={{
              mobile: 'calc(100vh - 60px)',
              tablet: 'calc(100vh - 30px)'
            }}
            {...others}>
            <NmsCard variant='outlined' sx={
              {
                maxHeight: '100%',
                // overflow: 'auto',
                p: wide ? 0 : 2,
                padding: 0,

              }}>
              <Profile />
              <CardContent sx={{
                padding: '0px',
                // height: "calc(86vh - 85px)",
                height: "86vh",
                overflow: 'auto',
              }}>
                {children}
              </CardContent>
            </NmsCard>
          </Box>
        );
      }
      }
    </UIStore >
  );
};

export default MyAccountLayout;