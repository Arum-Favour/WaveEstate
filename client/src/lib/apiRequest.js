import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://wave-estate-backend.onrender.com",
  withCredentials: true,
   headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  },
});

export default apiRequest;
