const convertCtoF = (C) => {
  return (C * 9.0) / 5.0 + 32.0;
};
const convertFtoC = (F) => {
  return (5.0 * (F * 1.0 - 32.0)) / 9.0;
};
export {convertCtoF, convertFtoC};