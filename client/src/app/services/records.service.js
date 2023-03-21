import axios from "axios";
import { infoParameters } from "../utils/infoParameters";
import { $host } from "./index";

//Получение актуальных параметров пользователя
export const getUserActualIndicators = async (id) => {
  const { data } = await $host.get(`api/record?userId=${id}`);
  return data;
};

//Получение индикаторов по идентификатору записи
export const getIndicatorsByIdRecord = async (id) => {
  const { data } = await $host.get(`api/record/${id}`);
  return data;
};

//Удаление записи по идентификатору
export const deleteRecordById = async (id) => {
  const { data } = await $host.delete(`api/record/${id}`);
  return data;
};

// Создание записи с помощью ручного ввода
export const createHandRecordApi = async (userId, dataIndicators) => {
  const { data } = await $host.post(`api/record?userId=${userId}`, {
    indicators: dataIndicators,
  });
  return data;
};

// Загрузка файла с показателями
export const createRecordByLoadFile = async (userId, formFile) => {
  const { data } = await $host.post(
    `api/record/pdf/file?userId=${userId}`,
    formFile,
    { headers: { "Content-Type": "application/pdf" } }
  );
  return data;
};

// Полуение последних показателей пользователя
export const getLastIndicatorsApi = async (userId, indicatorsType) => {
  const { data } = await $host.get(
    `api/record/history/indicator?indicatorType=${indicatorsType}&userId=${userId}`
  );
  return data;
};

// Полуение последних показателей пользователя по определенным показателям
export const getLastIndicatorsToTypesApi = async (userId, indicatorsTypes) => {
  const resultData = await Promise.all(
    indicatorsTypes.map((param) => {
      return $host.get(
        `api/record/history/indicator?indicatorType=${param}&userId=${userId}`
      );
    })
  );
  let currentData = [];
  resultData.forEach((item) => {
    if (item.data.length !== 0) {
      currentData.push(item.data[item.data.length - 1]);
    }
  });

  return currentData;
};
