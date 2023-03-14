import { infoParameters } from "./infoParameters";

export const isGoodParameters = (params) => {
  let goodParams = [];
  params.forEach((item) => {
    if (
      item.value >=
        infoParameters[
          infoParameters.findIndex((param) => param.name === item.indicatorEnum)
        ].info.menNormMin &&
      item.value <=
        infoParameters[
          infoParameters.findIndex((param) => param.name === item.indicatorEnum)
        ].info.menNormMax
    ) {
      goodParams.push(item.indicatorEnum);
    }
  });

  return goodParams;
};

export const isBadParameters = (params) => {
  let badParams = [];
  params.forEach((item) => {
    if (
      item.value <
        infoParameters[
          infoParameters.findIndex((param) => param.name === item.indicatorEnum)
        ].info.menNormMin ||
      item.value >
        infoParameters[
          infoParameters.findIndex((param) => param.name === item.indicatorEnum)
        ].info.menNormMax
    ) {
      badParams.push(item.indicatorEnum);
    }
  });

  return badParams;
};
