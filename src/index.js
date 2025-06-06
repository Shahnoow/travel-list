import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./components/App";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
