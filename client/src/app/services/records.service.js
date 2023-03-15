import axios from 'axios';
import { $host } from "./index";

const getRecordByType = async (indicatorType) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${indicatorType}`);
    return response.data;
}

// Создание записи с помощью ручного ввода
export const createHandRecordApi = async (userId, dataIndicators) => {
    console.log(userId)
    console.log(dataIndicators)
    const {data} = await $host.post(`api/record?userId=${userId}`,{indicators: dataIndicators});
    return data;
}

export { getRecordByType };