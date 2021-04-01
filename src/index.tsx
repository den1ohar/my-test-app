import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styledTheme from "./theme/styledTheme";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={styledTheme}>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
