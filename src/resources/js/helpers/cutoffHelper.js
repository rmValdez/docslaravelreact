import { getLastDateOfMonth } from './dateHelper';

export const getCurrentCutoff = () => (new Date().getDate() > 16 ? 2 : 1);
export const getCurrentDate = (dateValue) => (new Date(dateValue).getDate());
export const getDatesByCutoff = (cutoff, month = null) => {
  cutoff = Number(cutoff);
  const date = month ? new Date(month) : new Date();  
  return {
    startDate: `${date.getFullYear()}-${date.getMonth()+1}-${cutoff == 1 ? '01' : 16 }`,
    endDate: `${date.getFullYear()}-${date.getMonth()+1}-${cutoff == 1 ? 15 : getLastDateOfMonth(date) }`,
  };
};