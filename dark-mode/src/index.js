import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import AppProviders from "./common/providers/AppProviders";
import "./styles/_main.scss";

ReactDOM.render(
  // AppProviders wraps the Routes component, providing it with the necessary contexts
  <AppProviders>
    <Routes />
  </AppProviders>,
  document.getElementById("root")
);
