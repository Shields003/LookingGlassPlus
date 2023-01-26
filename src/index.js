import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BigChart from "./pages/BigChart";
import Home from "./pages/Home";
import Widgets from "./pages/Widgets";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import Weather from "./pages/Weather";
import Flights from "./pages/Flights";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppLayout = () => (
  <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bigchart",
        element: <BigChart />,
      },
      {
        path: "/widgets",
        element: <Widgets />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
