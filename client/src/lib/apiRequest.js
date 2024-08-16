import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://eonwavetech.com",
  withCredentials: true,
});

export default apiRequest;
