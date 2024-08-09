import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://wave-estate-backend.onrender.com",
  withCredentials: true,
});

export default apiRequest;
