import React from "react";
import { HeaderApp } from "../components/Header/Header.tsx";
import Head from "./head.tsx";
import NotLoggedIn from "./Notimplemented/NotLoggedIn.tsx";
import {useAuthStore} from 'authStore.js'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const auth = useAuthStore(state => state.loggedin)
  const logInUser = useAuthStore(state => state.logIn)
  const logOutUser = useAuthStore(state => state.logOut)

  return (
    <>
      <Head />
      <HeaderApp/>
      {auth ? children : <NotLoggedIn />}
    </>
  );
}
