import styled from '@emotion/styled';
import { Box } from '@mui/material';
const generalBoxStyle = {
  overflowX: 'hidden',
  overflowY: 'auto'
};

export const NavBox = styled(Box)(({ theme }) => ({
  maxHeight: '93vh',
  ...generalBoxStyle
}));

export const NavInnerBox = styled(Box)(({ theme }) => ({
  maxHeight: 'calc(99vh - calc(230px + 32px + 32px + 50px))',
  ...generalBoxStyle
}));

export const NavMySectionBox = styled(Box)(({ theme }) => ({
  maxHeight: '200px',
  ...generalBoxStyle
}));