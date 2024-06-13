import { Card } from '@mui/material';
import { styled } from '@mui/system';

export const NmsCardComponent = styled(Card)(({ theme }) => ({
  borderRadius: '1rem',
  transition: '0.3s',
  boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
}));

export const CardTranspComponent = styled(Card)(({ theme }) => ({
  transition: '0.3s',
  backgroundColor: 'transparent',
  border: 'none'
}));