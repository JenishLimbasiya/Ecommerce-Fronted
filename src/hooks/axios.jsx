import axios from "axios";

export default axios.create({
  baseURL: import.meta.REACT_APP_BASE_URL,
});

export const instance = axios.create({
  baseURL: import.meta.REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
