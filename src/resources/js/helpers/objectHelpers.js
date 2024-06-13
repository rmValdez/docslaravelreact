export const validateObject = (obj) => {
  return Boolean(obj !== null && typeof obj === 'object');
};

export const isEmptyObject = (obj) => {
  return Boolean(Object.keys(obj).length === 0);
};

export const validateInsideObject = (obj, field) => {
  return Boolean(obj[field] != undefined && obj[field] != null);
};

export const isSet = (obj, field) => {
  return Boolean(obj[field] != null || obj[field] != undefined);
};