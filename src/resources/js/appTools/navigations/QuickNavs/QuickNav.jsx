import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { CustomDialog } from '../../../componentHelper/dialogs/CustomDialog';
import { PAGE_LIST } from '../../../routes/routes/routesOne';
import { frontendSearchSingle } from '../../../helpers/stringHelpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuickNavItem } from './QuickNavItem';
import { useUIStore, useUserInfo } from '../../../states/store';
import { sortMultidimensional } from '../../../helpers/arrayHelpers';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const QuickNav = () => {
  const [quickNavDialog, setQuickNavDialog] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(0);
  const [pressEnter, setPressEnter] = useState(false);
  const [{ loader },] = useUIStore();
  const [{ permissions },] = useUserInfo();
  const { pathname } = useLocation();
  const listItemsRef = useRef([]);
  const navigate = useNavigate();

  const handleClose = () => {
    setSelectedItem(0);
    setQuickNavDialog(false);
    setSearch('');
    setPressEnter(false);
    window.removeEventListener('keydown', handleKeyPress);
  };

  const memoizePages = useMemo(() => {
    let pages = [...PAGE_LIST].filter((item) => !item.hidden).sort((a, b) => sortMultidimensional(a, b, 'title'));
    if (search != '') {
      pages = frontendSearchSingle(pages, 'title', search);
    }
    return pages ?? [];
  }, [search]);

  const handleNavigation = (idx) => {
    if (memoizePages[idx]) {
      handleClose();
      setQuickNavDialog(false);
      navigate(memoizePages[idx]['path']);
    }
  };

  const handleKeyPress = (event) => {
    let itemSelect = selectedItem;
    if ((event.ctrlKey && event.key === 'm') && !loader) {
      setQuickNavDialog(true);
      setPressEnter(false);
    }
    if (event.key === 'ArrowDown') {
      setSelectedItem(prevIndex => {
        itemSelect = prevIndex < memoizePages.length - 1 ? prevIndex + 1 : prevIndex;
        return itemSelect;
      });
      setPressEnter(false);
    } else if (event.key === 'ArrowUp') {
      setSelectedItem(prevIndex => {
        itemSelect = prevIndex > 0 ? prevIndex - 1 : prevIndex;
        return itemSelect;
      });
      setPressEnter(false);
    }
    if (event.key === 'Enter') {
      setPressEnter(prev => !prev);
    }
  };

  const scrollToItem = () => {
    if (listItemsRef.current[selectedItem]) {
      const idx = selectedItem - 1;
      const listItem = listItemsRef.current[idx <= 0 ? 0 : idx];
      listItem?.scrollIntoView({ behaviour: 'smooth' });
    }
  };

  useEffect(() => {
    if (selectedItem) {
      scrollToItem();
    }
  }, [selectedItem]);

  useEffect(() => {
    if (pressEnter && quickNavDialog) {
      handleNavigation(selectedItem);
    }
  }, [pressEnter, selectedItem]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <CustomDialog dialogStatus={quickNavDialog} handleCloseDialog={() => handleClose()} title={'Page Search'} dialogSize={'tablet'}>
      <TextField value={search} onChange={(e) => setSearch(e.target.value)}
        InputProps={{ endAdornment: <FindInPageIcon />, }} inputProps={{
          autoComplete: 'off'
        }}
        autoFocus
      />
      <Box sx={{
        maxHeight: '35vh',
        overflowY: 'auto'
      }}
      >
        {
          memoizePages.map((page, idx) => {
            if (permissions?.includes(page.permission)) {
              return (
                <Fragment key={`${page.key}-${idx}-${page.path}`}>
                  <QuickNavItem
                    key={`${page.key}-${idx}-${page.path}`}
                    listKey={`${page.key}-${idx}-${page.path}`}
                    title={page.title}
                    path={page.path}
                    linkIcn={page.icon}
                    activeNav={pathname == page.path || idx == selectedItem}
                    closeQuickNav={handleClose}
                  />
                  <Box ref={(el) => (listItemsRef.current[idx] = el)} />
                </Fragment>
              );
            }
          })
        }
      </Box>
    </CustomDialog>
  );
};

export default QuickNav;