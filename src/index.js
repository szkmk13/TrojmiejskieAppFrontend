import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./app/Home/Home.tsx";
import Meetings from "./app/Meetings/Meetings.tsx";
import Data from "./app/Data/Data.tsx";
import Profile from "./app/Profile/Profile.tsx";
import PatchNotes from "./app/PatchNotes/PatchNotes.tsx";
import Bets from "./app/Bets/Bets.tsx";
import NotImplemented from "./app/Notimplemented/NotImplemented.tsx";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "./app/layout.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthStore } from "./authStore.js";
import { Notifications } from "@mantine/notifications";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/meetings", element: <Meetings /> },
  { path: "/profile", element: <Profile /> },
  { path: "/data", element: <Data /> },
  { path: "/patch_notes", element: <PatchNotes /> },
  { path: "/bets", element: <Bets /> },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootLayout>
      <Notifications position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RootLayout>
  </React.StrictMode>
);

reportWebVitals();
