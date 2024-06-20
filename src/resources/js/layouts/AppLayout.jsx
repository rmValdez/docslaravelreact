import React from 'react';
import { Box, CardContent, useTheme } from '@mui/material';
import useWindowSize from '../../hooks/useWindowSize';
import { NmsCard } from '../generic/cards/Cards';
import { UIStore } from '../../states/store';

const AppLayout = (props) => {
  const { children, wide = false, narrow = true, ...others } = props;
  const themeG = useTheme();

  return (
    <UIStore>
      {({ drawerMode }) => {
        return (
          <Box
            sx={{
              height: {
                mobile: 'calc(100vh - 60px)',
                tablet: 'calc(100vh - 16px)'
              },
              margin: '8px 10px 0 6px',
              borderRadius: 0,
              overflow: 'auto',
              padding: wide ? 0 : '2px',
              marginLeft: { tablet: drawerMode == 'open' ? `${parseInt(themeG.props.drawerWidth) + 1}px` : `calc(${themeG.spacing(3)} + ${narrow ? '20' : '34' }px)` }
            }}>
            {children}
          </Box>
        );
      }
      }
    </UIStore>
  );
};

export default AppLayout;