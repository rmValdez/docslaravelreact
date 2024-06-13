export const currencyFormatter = (num, decimalDigits = 2) => {
  const numUpdate = roundNumber(num, decimalDigits);
  if(isNaN(numUpdate)) return '';    
  let newNumber = fixedCurrency(numUpdate);
  let str = newNumber.toString().split(".");
 
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
};

export const fixedCurrency = (num, decimalDigits = 2) => Number(num).toFixed(decimalDigits);

export const roundNumber = (number, decimals = 2 ) => {
  decimals = parseInt(decimals, 10);
  const dec = Math.pow(10, decimals)
  number=""+Math.round(parseFloat(number)*dec+.0000000000001); // fixed the .X99999999999
  return parseFloat(number.slice(0,-1*decimals) + "." + number.slice(-1*decimals))     
}