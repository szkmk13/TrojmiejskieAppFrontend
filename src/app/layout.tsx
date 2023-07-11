import React, { useEffect, useState } from "react";
import { HeaderApp } from "../components/Header/Header.tsx";
import Head from "./head.tsx";
import NotLoggedIn from "./Notimplemented/NotLoggedIn.tsx";
import {useAuthStore} from 'authStore.js'
import { Button } from "@mantine/core";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
    
  //   if (token === 'test') {
  //     setLoggedIn(true);
  //   }
  // }, []);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  //   localStorage.setItem('token', 'test');
  //   console.log('zalogowano');
  // };

  const auth = useAuthStore(state => state.loggedin)
  const logInUser = useAuthStore(state => state.logIn)
  const logOutUser = useAuthStore(state => state.logOut)

  // const handleLogout = () => {
  //   // Set loggedin to false
  //   setLoggedin(false);
  // };
  return (
    <>
      <Head />
      <HeaderApp handleLogin={logInUser} loggedIn={auth}/>
      <Button onClick={logInUser}>log in </Button>
      <Button onClick={logOutUser}>log out</Button>
      {auth ? children : <NotLoggedIn handleLogin={logInUser} />}
    </>
  );
}
