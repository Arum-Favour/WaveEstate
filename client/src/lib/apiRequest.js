import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://app.eonwavetech.com",
  withCredentials: true,
});

export default apiRequest;
