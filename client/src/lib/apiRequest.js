import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://waveestate-1.onrender.com",
  withCredentials: true,
});

export default apiRequest;
