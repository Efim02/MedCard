import axios from 'axios';

const getRecordByType = async (indicatorType) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${indicatorType}`);
    return response.data;
}

export { getRecordByType };