import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  }
});

export {$host}