import React from "react";
import { HeaderApp } from "../components/Header/Header.tsx";
import Head from "./head.tsx";
import NotLoggedIn from "./Notimplemented/NotLoggedIn.tsx";
import { useAuthStore } from "authStore.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuthStore((state) => state.loggedin);
  return (
    <>
      <Head />
      <div style={{ position: "sticky", top: 0, zIndex: 9 }}>
        <HeaderApp />
      </div>
      {auth ? children : <NotLoggedIn />}
    </>
  );
}
