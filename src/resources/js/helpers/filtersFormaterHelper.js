import { format } from 'date-fns';
import { FILTER_COLUMN_KEYS } from '../enums/attendanceEnums';
import { DB_DATE_FORMAT } from '../enums/dateEnums';
import { formatDate } from './dateHelper';

export const formatFilters = (params, table) => {
  const formatParams = {};
  formatParams['status'] = params.status ?? 'all';
  if (params.search) {
    formatParams['search'] = params.search ?? '';
    delete params.search;
  }
  if (params.status) {
    delete params.status;
  }
  if (params.start_date || params.end_date) {
    formatParams['in_between'] = {
      start_date: format(new Date(), DB_DATE_FORMAT),
      end_date: format(new Date(), DB_DATE_FORMAT)
    };
  }
  if (params.start_date) {
    const startDate = typeof params.start_date == 'object' ? params.start_date : new Date(params.start_date);
    formatParams['in_between']['start_date'] = formatDate(startDate, DB_DATE_FORMAT);
    delete params.start_date;
  }
  if (params.end_date) {
    const endDate = typeof params.end_date == 'object' ? params.end_date : new Date(params.end_date);
    formatParams['in_between']['end_date'] = formatDate(endDate, DB_DATE_FORMAT);
    delete params.end_date;
  }
  formatParams['filters'] = Object.keys(params).map((item) => {
    const filter = {};
    if (typeof params[item] == 'object') {
      const columnParams = FILTER_COLUMN_KEYS[item] ?? { key: 'id', operator: '=', column: 'id' };
      if (params[item][columnParams['key']] == 'all') return;

      filter['column'] = columnParams['column'];
      filter['operator'] = columnParams['operator'];
      if (columnParams['base_table']) {
        filter['table'] = table;
      }
      if (Array.isArray(params[item])) {
        filter['value'] = params[item].map((item) => item[columnParams['key']]);
      } else {
        filter['value'] = params[item][columnParams['key']];
      }
    } else {
      if (params[item] == '' || !params['item']) return;
      filter['column'] = item;
      filter['operator'] = '=';
      filter['value'] = params[item];
    }
    return filter;
  });
  return formatParams;
};

export const formatObjectValues = (field, objectValues) => {
  if (field == 'user_id') {
    const employeeIds = objectValues?.map(employee => employee.id)?.join(',');
    return employeeIds;
  } else {
    const columnParams = FILTER_COLUMN_KEYS[field] ?? { key: 'id', operator: '=', column: 'id' };
    return objectValues[columnParams['key']];
  }

};

export const filterHandler = (field, value, setFilters, setQueryByKey) => {
  let filter = value;
  setFilters((prev) => {
    const updatedFilters = { ...prev };
    updatedFilters[field] = value;
    if (Array.isArray(value)) {
      if (value.length <= 0)
        delete updatedFilters[field];
    } else {
      if (value == '') {
        delete updatedFilters[field];
      }
    }
    return updatedFilters;
  });
  if (typeof value == 'object') {
    filter = formatObjectValues(field, value);
  }
  setQueryByKey(field, filter);
};