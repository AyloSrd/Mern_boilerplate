import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";
import './assets/css/bootstrap.min.css'
import './assets/css/light-bootstrap-dashboard.css'
import './assets/css/dashboard.css'
import "./assets/css/nucleo-icons.css";

import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
