import { format, isValid, parseISO, parse, isWithinInterval, addMinutes, isAfter, addDays, addHours, subHours } from 'date-fns';
import { DATE_FORMAT, DATE_TIME_FORMAT, DAY_OF_WEEK_FORMAT, DB_DATE_FORMAT, DB_DATE_TIME_FORMAT, DB_TIME_FORMAT, FULL_MONTH_NAME, TIME_FORMAT, YEAR_MONTH_FORMAT } from '../enums/dateEnums';
import { pluralize } from './stringHelpers';
import { AM, PM } from '../enums/attendanceEnums';

export const checkPeriod = () => {
  const now = new Date();
  const morningStart = parse('06:00', DB_TIME_FORMAT, new Date());
  const eveningStart = parse('18:00', DB_TIME_FORMAT, new Date());
  if (isWithinInterval(now, { start: morningStart, end: eveningStart })) {
    return 'morning';
  } else {
    return 'evening';
  }
};

export const formatDate = (currentDate, dateFormat = null) => {
  if (!currentDate ?? currentDate == null) return 'No Date';
  const parsedDate = currentDate instanceof Date ? currentDate : parseISO(currentDate);
  if (isNaN(parsedDate.getTime()) && !isValid(parsedDate)) return 'Invalid Date';
  return format(parsedDate, dateFormat ?? DATE_FORMAT);
};

export const dayOfWeek = (currentDate) => {
  if (!currentDate) return;
  const parsedDate = parseISO(currentDate);
  return format(parsedDate, DAY_OF_WEEK_FORMAT);
};

export const formatHour = (date) => {
  if (!date) return;
  const parsedDate = parseISO(date);
  return format(parsedDate, TIME_FORMAT);
};

export const formatDayAndHour = (date) => {
  if (!date) return;
  const parsedDate = parseISO(date);
  if (isNaN(parsedDate.getTime())) return 'Invalid Date';
  return format(parsedDate, DATE_TIME_FORMAT);
};

export const formatYearMonth = (date) => {
  if (!date) return;
  const parsedDate = parseISO(date);
  return format(parsedDate, YEAR_MONTH_FORMAT);
};

export const cleanFormatDate = (date, dateForm = DB_DATE_TIME_FORMAT) => {
  let formatedDate = date;
  if (date != undefined && date.toString().includes('GMT')) {
    formatedDate = format(date, dateForm);
  } else if (date.toString().includes('Z')) {
    formatedDate = format(parseISO(date), dateForm);
  }
  return formatedDate;
};

export const timeNumericToWords = (hours = '00:00') => {
  const formattedMinutes = hours.split(':');
  const hour = formattedMinutes[0]?.startsWith('0') ? formattedMinutes[0]?.substring(1) : formattedMinutes[0];
  const minute = formattedMinutes[1]?.startsWith('0') ? formattedMinutes[1]?.substring(1) : formattedMinutes[1];
  let timeString = hour == '0' ? '' : `${hour} ${pluralize('hour', Number(hour))}`;
  timeString += minute == '0' ? '' : `${timeString == '' ? '' : ', '}${minute} ${pluralize('minute', Number(minute))}`;
  return timeString;
};

export const dateTommorow = (date) => {
  if (!date) return;
  date.setDate(date.getDate() + 1);
  return date.toDateString();
};

export const isValidDate = (date) => !isNaN((new Date(date)).getTime());
export const maxYearAddDate = (yearNumber) => (new Date(new Date().getFullYear() + yearNumber, new Date().getMonth(), new Date().getDate()));
export const minYearSubtractDate = (yearNumber) => (new Date(new Date().getFullYear() - yearNumber, new Date().getMonth(), new Date().getDate()));

export const explodeDate = (date) => {
  if (!date ?? date == null) return 'No Date';
  const parsedDate = isValidDate(date) ? date : parseISO(date);

  return {
    day: parsedDate.getDate(),
    day_name: format(parsedDate, DAY_OF_WEEK_FORMAT),
    month: format(parsedDate, FULL_MONTH_NAME),
    year: parsedDate.getFullYear(),
    db_formatted_date: format(parsedDate, DB_DATE_FORMAT),
    raw_date: parsedDate
  };
};

export const getLastDateOfMonth = (date, dateOnly = true, format = DB_DATE_FORMAT) => {
  if (!date) return;
  const nextMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const lastDateOfMonth = new Date(nextMonthFirstDay - 1);
  return dateOnly ? lastDateOfMonth.getDate() : formatDate(lastDateOfMonth, format);
};

export const isNotWithinTimeRange = (time, timeRange) => {
  if (!time) return;
  const timeCheck = new Date(time);
  const startTime = new Date(`${timeRange?.date} ${timeRange?.start_time}`);
  const endTime = new Date(`${timeRange?.date} ${timeRange?.end_time}`);
  startTime.setHours(startTime.getHours() - 1);
  endTime.setHours(endTime.getHours() + 1);
  return timeCheck < startTime || timeCheck > endTime;
};

// Format strings of format like Jan.30, 2023 - Jan. 31, 2023 to Jan. 30-31, 2023
export const formatDateRangeStrings = (datesRange) => {
  if (!datesRange) return;
  const dates = datesRange.split('-');

  if (dates.length > 1) {
    const formattedDate = {
      'startDate': new Date(dates[0]),
      'endDate': new Date(dates[1]),
    };
    if (formattedDate?.startDate.getMonth() == formattedDate?.endDate.getMonth()) {
      const startMonth = formatDate(formattedDate?.startDate, 'MMM. dd ');
      const endDate = formatDate(formattedDate?.endDate, ' dd');
      const year = formatDate(formattedDate?.startDate, 'yyyy');
      return `${startMonth}-${endDate}, ${year}`;
    }
  } else {
    return datesRange;
  }
};

export const addMinsToDate = (date, hours) => {
  return addMinutes(date, hours);
};

export const generateStartAndEndDate = (date = new Date(), startTime, endTime, halfDayPeriod = 'none') => {
  const currentDate = date;
  let parsedStartTime = parse(startTime, 'HH:mm', currentDate);
  let parsedEndTime = parse(endTime, 'HH:mm', currentDate);

  if (halfDayPeriod == AM) {
    parsedEndTime = subHours(parsedEndTime, 4);
  }

  if (halfDayPeriod == PM) {
    parsedStartTime = addHours(parsedStartTime, 5);
  }

  if (!isAfter(parsedEndTime, parsedStartTime)) {
    parsedEndTime = addDays(parsedEndTime, 1);
  }

  if (!isAfter(parsedEndTime, parsedStartTime)) {
    parsedEndTime = addDays(parsedEndTime, 1);
  }

  return {
    start_time: cleanFormatDate(parsedStartTime),
    end_time: cleanFormatDate(parsedEndTime),
  };
};

export const removeDayOfWeekFormat = (dateString) => {
  const dayOfWeekFormats = ['-Mon', '-Tue', '-Wed', '-Thu', '-Fri', '-Sat', '-Sun'];
  const indexOfFormat = dayOfWeekFormats.findIndex(format => dateString.includes(format));

  return indexOfFormat !== -1 ? dateString.split(dayOfWeekFormats[indexOfFormat])[0] : dateString;
};

export const formatDatesToDateRangeText = (startDate, endDate) => {
  if (!startDate || !endDate) return;
  const formattedStartDate = formatDate(new Date(startDate), 'MMM. dd');
  const formattedEndDate = formatDate(new Date(endDate), 'dd, yyyy');
  return `${formattedStartDate} - ${formattedEndDate}`;
};