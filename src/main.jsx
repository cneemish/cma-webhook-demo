import { StrictMode } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import PersonalDetails from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonalDetails />
  </React.StrictMode>
);
