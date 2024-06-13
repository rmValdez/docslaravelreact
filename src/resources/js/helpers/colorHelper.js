export const getContrastColor = (hexColor) => {
  if (typeof hexColor != 'string' || hexColor?.length != 7) return '#000';
  // Remove the # character, if present
  hexColor = hexColor.replace(/^#/, '');

  // Convert the hex color to RGB
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the relative luminance using the formula for sRGB
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Choose white or black text based on luminance
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};