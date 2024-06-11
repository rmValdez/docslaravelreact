import { ACKNOWLEDGED, ACTIVE, APPROVED, CANCELLED, DELETED, INACTIVE, PENDING, PENDING_DELETE, REJECTED } from "./statusEnums";

export const STATUS_COLORS = Object.freeze({
  [ACTIVE]: 'success',
  [INACTIVE]: 'error',
  [PENDING]: 'info',
  [PENDING_DELETE]: 'success',
  [REJECTED]: 'error',
  [ACKNOWLEDGED]: 'success',
  [APPROVED]: 'success',
  [CANCELLED]: 'error',
  [DELETED]: 'warning',
});

export const statusColorSwitcher = (status, field = 'name') => {
  let color = { name: 'default', color: '#D9DDDC' };
  switch (status?.toLowerCase()) {
  case 'approved':
    color = { name: 'success', color: '#03C04A' };
    break;
  case 'yes':
    color = { name: 'success', color: '#03C04A' };
    break;
  case 'active':
    color = { name: 'success', color: '#03C04A' };
    break;
  case 'allowed':
    color = { name: 'success', color: '#03C04A' };
    break;
  case 'pending':
    color = { name: 'info', color: '#61a3e5' };
    break;
  case 'rejected':
    color = { name: 'error', color: '#D32F2F' };
    break;
  case 'inactive':
    color = { name: 'error', color: '#D32F2F' };
    break;
  case 'no':
    color = { name: 'error', color: '#D32F2F' };
    break;
  case 'resigned':
    color = { name: 'error', color: '#D32F2F' };
    break;
  case 'cancelled':
    color = { name: 'warning', color: '#edce2a' };
    break;
  case 'unauthorized':
    color = { name: 'error', color: '#edce2a' };
    break;
  case 'unauthorize':
    color = { name: 'error', color: '#D32F2F' };
    break;
  case 'paid':
    color = { name: 'success', color: '#03C04A' };
    break;
  case 'unpaid':
    color = { name: 'info', color: '#61a3e5' };
    break;
  default:
    color = { name: 'default', color: '#D9DDDC' };
  }
  return field == 'all' ? color : color[field] ?? '#D9DDDC';
};