import axios from "axios";

export const baseURL = "http://localhost:5173/api";
const api = axios.create({
  baseURL: baseURL,
});

export default api;