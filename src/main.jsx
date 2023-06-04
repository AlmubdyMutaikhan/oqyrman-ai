import React from 'react'
import ReactDOM from 'react-dom/client'
import Login_Screen from "./Login_Screen.jsx";
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./routes/SystemLog/Login.jsx";
import Register from "./routes/SystemLog/Register.jsx";
import Preferences from "./routes/SystemLog/Preferences.jsx";
import Homepage from "./routes/MainApp/Homepage.jsx";
import Search from "./routes/MainApp/Search.jsx";
import Bookpage from "./routes/books/Bookpage.jsx";
import Read from "./routes/books/book-interaction/Read.jsx";
import Audio from "./routes/books/book-interaction/Audio.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login_Screen/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/register/preferences",
        element: <Preferences/>,
    },
    {
        path: "/homepage",
        element: <Homepage/>,
    },
    {
        path: "/search",
        element: <Search/>,
    },
    {
        path: "/books/1000002",
        element: <Bookpage/>,
    },
    {
        path: "/books/1000002/read",
        element: <Read/>,
    },
    {
        path: "/books/1000002/audio",
        element: <Audio/>,
    },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
