import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export default axios.create({
  baseURL: baseURL,
});

export const instance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
