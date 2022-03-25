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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={Paths.Introduction} element={<App />} />
          <Route path={Paths.Findings} element={<Findings />} />
          <Route path={Paths.About} element={<About />} />
          {/* 404 */}
          <Route path="*" element={<p>404 Error not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
