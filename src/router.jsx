import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import HungerMap from "./pages/HungerMap";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/hungerMap",
    element: <HungerMap />,
  },
]);

export default router;
