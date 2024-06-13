import { LOG_DIFF_HALF_DAY_MINUTES, LOG_DIFF_WHOLE_DAY_MINUTES } from '../enums/attendanceEnums';
import { addMinsToDate, cleanFormatDate } from './dateHelper';

export const convertMinToHours = (values) => {
  return values / 60;
};

export const createTimeIntervals = (start = 30, end = 1440, step = 15) => {
  let currentValue = start;
  let intervalArray = [];

  while (currentValue <= end) {
    intervalArray.push({ minutes: currentValue, hours: convertMinToHours(currentValue), info: `${currentValue} min. (${convertMinToHours(currentValue)} hrs.)` });
    currentValue += step;
  }

  return intervalArray;
};

export const handlePagination = (field, value, setPagination) => {
  setPagination((prev) => {
    const updatedFilters = { ...prev };
    updatedFilters[field] = value;
    if (value === '') delete updatedFilters[field];
    return updatedFilters;
  });
};

export const generateLogs = (startTime, isHalfDay = false) => {
  const idealLogs = isHalfDay ? LOG_DIFF_HALF_DAY_MINUTES : LOG_DIFF_WHOLE_DAY_MINUTES;
  const logs = [];
  idealLogs.forEach((minutes, idx) => {
    const currentLogTime = addMinsToDate(new Date(startTime), minutes);
    logs.push({
      id: idx,
      log_time: cleanFormatDate(currentLogTime, 'yyyy-MM-dd HH:mm:ss'),
      log_type: logs.length % 2 === 0 ? 'In' : 'Out'
    });
  });

  return logs;
};

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
  case 'scheduled':
    color = { name: 'info', color: '#61a3e5' };
    break;
  case 'done':
    color = { name: 'success', color: '#03C04A' };
    break;
  default:
    color = { name: 'default', color: '#D9DDDC' };
  }
  return field == 'all' ? color : color[field] ?? '#D9DDDC';
};