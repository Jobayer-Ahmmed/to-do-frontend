import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/MainRoute";
import MyAuthProvider from "./ContextApi/MyAuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyAuthProvider>
      <RouterProvider router={routes} />
    </MyAuthProvider>
  </React.StrictMode>
);
