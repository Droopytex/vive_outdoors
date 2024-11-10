import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import viveOutdoorProvider from "./context/viveProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <viveOutdoorProvider>
        <App />
      </viveOutdoorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
