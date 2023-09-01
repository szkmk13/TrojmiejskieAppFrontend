// authStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const apicall = async (username, password) => {
  const payload = {
    username: username,
    password: password,
  };

  const res = await fetch("https://szymon.kowalski.cybulski.dev/api/token/", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res.json());
  return res.json();
};

// const {data, error, isLoading} = useQuery('login', apicall);

export const useAuthStore = create(
  persist(
    (set) => ({
      loggedin: false,
      logIn: () => set(() => ({ loggedin: true })),
      logOut: () => set(() => ({ loggedin: false })),
    }),
    {
      name: "user_logged_in", // unique name
    }
  )
);
