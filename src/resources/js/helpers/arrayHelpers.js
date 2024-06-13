export const findIndex = (currentList, currentData, compare = 'id') => {
  return [...currentList].findIndex((element) => element[compare] == currentData[compare]);
};

export const pushToArray = (currentList, data) => {
  const updatedList = [...currentList];
  updatedList.push(data);
  return updatedList;
};

export const unshiftToArray = (currentList, data) => {
  const updatedList = [...currentList];
  updatedList.unshift(data);
  return updatedList;
};

export const findContains = (currentList, find) => {
  return [...currentList].includes(find);
};

export const manageAddOrUpdate = (currentList, currentData, compare = 'id', type = 'unshift') => {
  let updatedlist = [...currentList];
  const idx = findIndex(updatedlist, currentData, compare);
  if (idx == -1) {
    if (type == 'push') {
      updatedlist = pushToArray(updatedlist,currentData);
    } else {
      updatedlist = unshiftToArray(updatedlist,currentData);
    }
  } else {
    updatedlist[idx] = { ...currentData };
  }
  return [...updatedlist];
};

export const manageAddOrDelete = (currentList, currentData, compare = 'id', type = 'unshift') => {
  let updatedlist = [...currentList];
  const idx = updatedlist.findIndex((element) => element[compare] == currentData[compare]);
  if (idx == -1) {
    if (type == 'push') {
      updatedlist = pushToArray(updatedlist,currentData);
    } else {
      updatedlist = unshiftToArray(updatedlist,currentData);
    }
  } else {
    updatedlist.splice(idx, 1);
  }

  return [...updatedlist];
};

export const manageAllChanges = (currentList, currentData, compare = 'id', type = 'add/update') => {
  let updatedlist = [...currentList];
  const idx = updatedlist.findIndex((element) => element[compare] == currentData[compare]);
  if (idx == -1) {
    updatedlist = unshiftToArray(updatedlist,currentData);
  } else {
    if (type == 'delete') {
      updatedlist.splice(idx, 1);
    } else {
      updatedlist[idx] = { ...currentData };
    }
  }
  return [...updatedlist];
};

export const sortMultidimensional = (a,b , field = 'order') => {  
  return (a[field] || Infinity) - (b[field] || Infinity);
};

export const keyArrayBy = (arr) => {
  const result = {};

  arr.forEach(item => {
    if (typeof item == 'object' && item.hasOwnProperty('legend')) {
      result[item.legend] = item;
    }
  });

  return result;
};

export const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();
  return sortedArr1.every((value, index) => value === sortedArr2[index]);
};

export const intersection = (arr1, arr2) => {
  return arr1.filter((value) => arr2.indexOf(value) !== -1);
};

export const not = (arr1, arr2) => {
  return arr1.filter((value) => arr2.indexOf(value) === -1);
};