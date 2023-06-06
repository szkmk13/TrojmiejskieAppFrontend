import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './app/Home/Home.tsx'
import Meetings from './app/Meetings/Meetings.tsx'
import Data from './app/Data/Data.tsx'
import PatchNotes from './app/PatchNotes/PatchNotes.tsx'
import NotImplemented from './app/Notimplemented/NotImplemented.tsx'
import reportWebVitals from './reportWebVitals';
import RootLayout from './app/layout.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {path: "/",element: <Home/>,},
  {path: "/meetings",element: <Meetings/>,},
  {path: "/profile",element: <NotImplemented/>,},
  {path: "/data",element: <Data/>,},
  {path: "/patch_notes",element: <PatchNotes/>,},
  {path: "/bets",element: <NotImplemented/>,},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
);


reportWebVitals();
