import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./homePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage /> // Updated component name
  </React.StrictMode>
);
