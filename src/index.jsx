import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga4";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (process.env.REACT_APP_GA_ID)
  ReactGA.initialize(process.env.REACT_APP_GA_ID);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
