export const isValidColor = (color: string): boolean => {
  const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

  return isHexColor;
};
export const getColorToners = (color: string): string[] => {
  return ["#fcba03", "#03fc4a"];
};
export const getSliceList = (list: string[], end: number) => {
  return list.slice(0, end);
};
