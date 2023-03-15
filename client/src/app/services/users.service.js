import { $host } from "./index";

//Получение данных одного пользователя
export const fetchOneUserApi = async (id) => {
  const { data } = await $host.get(`api/user/${id}`);
  return data;
};

//Получение последних индикаторов пользователя
export const fetchOneUserIndicatorsApi = async (id) => {
  const { data } = await $host.get(`api/user/${id}/indicator`);
  return data;
};

//Создание пользователя
export const createUserApi = async (userData) => {
  const { data } = await $host.post(`api/user`, userData);
  return data;
};

//Удаление пользователя
export const deleteUserApi = async (id) => {
  const { data } = await $host.delete(`api/user/${id}`);
  return data;
};

//Изменение данных пользователя
export const updateUserApi = async ({ id, weight, height }) => {
  const { data } = await $host.put(
    `api/user/${id}?weight=${weight}&height=${height}`
  );
  return data;
};
