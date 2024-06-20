import { findContains } from './arrayHelpers';
import { checkIsWholeNumber } from './numberHelpers';

export const replaceAllText = (text = '', replace = '', replacement = '') => {
  let textToReplace = text?.toString();
  textToReplace = textToReplace?.replaceAll(replace, replacement);
  return textToReplace;
};

export const generateRandomAlphaNumericString = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }
  return result;
};

export const snakeToCapitalized = (role) => role ? role.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
export const kebabToCapitalized = (text) => text ? text.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
export const capitalizeFirst = (str) => str ? str.replace(/^\w/, c => c.toUpperCase()) : '';
export const truncateText = (text = '', length = 10) => {
  const stringified = text?.toString();
  return stringified?.substring(0, length) + `${stringified.length > length ? '...' : ''}`;
};
export const ucWords = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const isBlank = (str) => (!str || /^\s*$/.test(str));
export const firstLetterOnly = (str) => str && `${str.charAt(0).toUpperCase()}.`;
export const capitlized = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
export const fullNameHelper = (userInfo) => `${capitlized(userInfo.last_name ?? '')}, ${capitlized(userInfo.first_name ?? '')} ${firstLetterOnly(userInfo.middle_name ?? '')} ${capitalizeFirst(userInfo.suffix ?? '')}`;

export const fullNameFormat = (data) => {
  if(data == ({} || null)) return 'None';
  return `${data?.last_name ?? ''}, ${data?.first_name ?? ''} ${firstLetterOnly(data?.middle_name ?? '')} ${capitalizeFirst(data?.suffix ?? '')}`;
};

export const findPresentTense = (word, ARRAY) => {
  return ARRAY[word] ?? word;
};

export const checkIsString = (str) => {
  return typeof str === 'string';
};

export const limitStringLength = (str, requiredLength) => {
  if (!checkIsString(str)) throw new Error('First argument must be a string');
  if (!checkIsWholeNumber(requiredLength)) throw new Error('Second argument must be a whole number');
  return (str.length > requiredLength) ? truncateText(str, requiredLength) : str;
};

export const compareTexts = (compareFrom, compareTo, toUpperCase = false) => {

  if (compareFrom == undefined) return false;

  if (typeof compareTo == 'string') {
    return compareFrom.toLowerCase() == compareTo.toLowerCase();
  } else if (typeof compareTo == 'object') {
    const formattedText = toUpperCase ? compareFrom.toUpperCase() : compareFrom.toLowerCase();
    return findContains(compareTo, formattedText);
  }

};

export const getFirstWord = (word) => word.split(' ')[0] ?? '';

export const isVowel = (char) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
};

export const pluralize = (noun, number) => {
  if (typeof noun == 'string' && typeof number == 'number') {
    return number > 1
      ? (noun.endsWith('y') && !isVowel(noun.charAt(noun.length - 2))
        ? noun.slice(0, -1) + 'ies'
        : noun + 's')
      : noun;
  }
  return noun;
};

export const searchRegex = (val) => {
  return val.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const frontendSearch = (listRows, search) => {
  const regex = new RegExp(searchRegex(search ?? ''), 'i');
  listRows = listRows.filter((val) => {
    return Object.keys(val).some((field) => {
      return regex.test(val[field]?.toString());
    });
  });
  return listRows;
};

export const frontendSearchSingle = (listRows, field, search, strict = false) => {
  const regexString = strict ? `^${searchRegex(search ?? '')}$` : searchRegex(search ?? '');
  const regex = new RegExp(regexString, 'i');
  listRows = listRows.filter((row) => {
    return regex.test(row[field]?.toString());
  });
  return listRows;
};


export const booleanToString = (boolean, type = 'yn') => {
  if (type == 'yn') return boolean ? 'Yes' : 'No';
  if (type == 'tf') return boolean ? 'True' : 'False';
};

export const generateUniqueRandomLetters = (list,) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let tries = 0;
  let randomString = alphabet[Math.floor(Math.random() * alphabet.length)];
  do {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    if (tries >= 5) {
      const randomNumber = Math.floor(Math.random() * 10000);
      randomString = `${randomString}${randomNumber}`;
      break;
    }
    tries += 1;
  } while (list.includes(randomString));
  return randomString;

};

export const toSnakeCase = (input = '') => input?.replace(/\s+/g, '_').toLowerCase();
export const replacePlaceholders = (stringTemplate, replacements = null) => {
  if (!replacements) return stringTemplate;
  for (const key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      const placeholder = `:${key}:`;
      const replacement = replacements[key];
      stringTemplate = stringTemplate.replace(new RegExp(placeholder, 'g'), replacement);
    }
  }

  return stringTemplate;
};

export const copyToClipboard = (text) => {
  const element = document.createElement('textarea');
  element.value = text;
  element.setAttribute('readonly', '');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
};

export const convertToOptions = (array) => {
  if (array?.length === 0) return '';
  const formattedValues = array?.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  const lastValue = formattedValues.pop();
  if (array?.length === 1) return lastValue;
  return `${formattedValues.join(', ')} and ${lastValue}`;
};

export const makeNamePossessive = (name) => name?.endsWith('s') ? name + '\'' : name + '\'s';

export const strSlug = (str, isLowerCase = true) => {
  str = str.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-{2,}/g, '-').trim();
  return isLowerCase ? str.toLowerCase() : str.toUpperCase();
};

export const emptyStringSetDefaultValue = (value, alternateValue) => {
  if(typeof value != 'string') return ' ';
  return (value==null ||  value=='') ? alternateValue : value; 
};

export const getAllFirstLetters = (word) => {
  const words = word.match(/\b\w/g);
  const resultString = words ? words.join('') : '';
  return resultString;
};

export const stringToColor = (word) => {
  return '#' + word.split('').reduce((hash, char) => {
    const charCode = char.charCodeAt(0);
    return ((hash << 5) - hash) + charCode;
  }, 0).toString(16).slice(-6);
};

export const toKebabCase = (str = '', isLowerCase = true) => {   
  if (isLowerCase) str = str.toLowerCase();   
  str = str.replace(/\s+/g, '-').replace(/[^a-z0-9-]/gi, '').replace(/-{2,}/g, '-').trim();                          
  return isLowerCase ? str : str.toUpperCase(); 
};

export const isJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};