// authStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    loggedin: false,
    logIn: () => set(() => ({ loggedin: true })),
    logOut: () => set(() => ({ loggedin: false })),
  }),
  {
    name: "user_logged_in", // unique name
  }
  
  )
);
