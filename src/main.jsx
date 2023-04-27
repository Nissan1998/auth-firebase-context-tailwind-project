import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import Orders from "./Orders/Orders";
import PrivetRouts from "./Routes/PrivetRouts";
import Profile from "./Profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivetRouts>
            <Orders></Orders>
          </PrivetRouts>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRouts>
            <Profile></Profile>
          </PrivetRouts>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
