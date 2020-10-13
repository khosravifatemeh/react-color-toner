export const isValidColor = (color: string): boolean => {
  const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

  return isHexColor;
};
export const getColorToners = (color: string): string[] => {
  return [];
};
