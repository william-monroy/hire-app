import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/Users";
import Videos from "./pages/Dashboard/Videos";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </React.StrictMode>,
  </BrowserRouter>,
  document.getElementById("root")
);
