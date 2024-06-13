export const stripDynamicPath = (pathString) => {
  if (!pathString.includes(':')) return pathString;
  const indexOfColon = pathString.indexOf(':');
  return pathString.substring(0, indexOfColon - 1);
}