import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  const token = localStorage.getItem('token');
  number: 0,
  fetch: async () => {
     'Authorization': `Bearer ${token}`,
    const res = await apiRequest("/api/users/notification");
    set({ number: res.data });
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));
