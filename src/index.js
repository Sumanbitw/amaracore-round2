import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Contacts from "./context/ContactsContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Contacts>
        <App />
      </Contacts>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
