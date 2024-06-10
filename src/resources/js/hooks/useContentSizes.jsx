import React, { useMemo } from 'react';
import { useTheme } from '@mui/material';
import useWindowSize from './useWindowSize';
import useStore from '../states/store';

export const useContentSizes = () => {
  const theme = useTheme();
  const { height, width } = useWindowSize();
  const [{ drawerMode }] = useStore();

  const contentSizes = useMemo(() => {
    const topBarHeight = parseInt(theme.props.topBarHeight);
    const drawerOpenW = parseInt(theme.props.drawerWidthClose);
    const drawerW = parseInt(theme.props.drawerWidth);

    const contentHeight = height - (topBarHeight + 20);
    const contentWidth = drawerMode === 'open' ? width - drawerW - 27 : width - drawerOpenW - 27;
    const tableHeight = height - (topBarHeight + 62);
    const tableWidth = width > theme.breakpoints.values.mobile
      ? drawerMode === 'open' ? width - drawerW - 58 : width - drawerOpenW - 60
      : '100%';

    return { contentHeight, contentWidth, tableHeight, tableWidth };
  }, [width, height, theme, drawerMode]);

  return { contentSizes };
};
