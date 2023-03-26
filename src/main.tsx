import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalProvider from "@/hooks/GlobalContext";

import { ToastContainer } from "react-toastify";

import "./index.css";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
    <ToastContainer />
  </React.StrictMode>
);
