import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Paths } from "./lib/paths.js";
import Layout from "./components/Layout";
import About from "./routes/About";
import Findings from "./routes/Findings";
import Custom404 from "./routes/Custom404";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path={Paths.Findings} element={<Findings />} />
          <Route path={Paths.About} element={<About />} />
        </Route>
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
