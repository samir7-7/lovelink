'use client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./homePage";
import Header from './Header';
import ProfileCards from "./ProfileCards";
import Signup from "./signup";
import Mainpage from "./mainpage";
import Dob from "./dob"
import Fullname from "./Fullname"
import Selectgender from './Selectgender';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/mainpage",
    element: <Mainpage/>,
  },
  {
    path: "/dob",
    element: <Dob/>,
  },
  {
    path: "/fullname",
    element: <Fullname/>,
  },
  {
    path: "/selectgender",
    element: <Selectgender/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
