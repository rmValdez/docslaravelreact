import { ListItem, ListItemButton } from '@mui/material';
import { styled } from '@mui/system';

export const ListItemComponent = styled(ListItemButton)(({ theme }) => ({
  '.MuiListItemIcon-root': {
    color: 'quaternary',
    marginLeft: '0.5rem',
    marginRight: '18px',
    minWidth: '13.5px',
    padding: 5,
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    }
  },
  transition: '0.5s',
  paddingRight: 10,
  '.MuiButtonBase-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 10
  },
  '&.MuiListItem-button': {
    paddingRight: 10,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '.MuiListItemIcon-root': {
      color: '#fff',
    },
    '.MuiTypography-root': {
      color: '#fff',
      width: '187px',
      fontWeight: 700,
    },
    'MuiListItem-button': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.tertiary.main,
    color: '#FFF',
    '.MuiListItemIcon-root': {
      color: '#FFF',
    },
    '.MuiTypography-root': {
      color: '#fff',
    },
  },
  borderRadius: '0 16px 16px 0',
  padding: '0px',
  isolation: 'isolate',
  width: `${parseInt(theme.props.drawerWidth) - 15}px`,
  height: '32px',
}));
