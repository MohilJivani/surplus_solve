import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import NutritionalAnalysis from "./NutritionalAnalysis";
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/nutritionalAnalysis",
    element: <NutritionalAnalysis />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);