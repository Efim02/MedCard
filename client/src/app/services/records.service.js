import axios from "axios";
import { $host } from "./index";

//Тестовое получение индикаторов
export const getRecordByType = async (indicatorType) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${indicatorType}`
  );
  return data;
};

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
