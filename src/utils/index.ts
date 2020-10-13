export const isValidColor = (color: string): boolean => {
  const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

  return isHexColor;
};
export const getColorToners = (
  firstColor: string,
  secondColor: string | "#000000",
  numColors: number | 40
): string[] => {
  const color1 = convertHexToRgb(firstColor);
  const color2 = convertHexToRgb(secondColor);
  const factor = (1 / (numColors - 1)) * 0.3;

  const newColors = [];
  for (let index = 0; index < numColors; index++) {
    newColors.push(getNewColor(color1, color2, factor * index));
  }

  return newColors;
};
const getNewColor = (
  firstColor: number[],
  secondColor: number[],
  factor: number
): string => {
  const result = firstColor;
  for (let index = 0; index < 3; index++) {
    result[index] = Math.round(
      firstColor[index] + factor * (secondColor[index] - firstColor[index])
    );
  }
  return convertRgbToHex(result);
};
export const getSliceList = (list: string[], end: number) => {
  return list.slice(0, end);
};
const convertHexToRgb = (hex: string) => {
  const match = hex.replace(/#/, "").match(/.{1,2}/g);
  return [
    parseInt(match![0], 16),
    parseInt(match![1], 16),
    parseInt(match![2], 16),
  ];
};
const convertRgbToHex = (rgbColor: number[]): string => {
  return (
    "#" +
    elementToHex(rgbColor[0]) +
    elementToHex(rgbColor[1]) +
    elementToHex(rgbColor[2])
  );
};
const elementToHex = (element: number): string => {
  const hex = element.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
