import React from "react";
import { createRoot } from "react-dom/client";

import Routes from "./routes";
import CoreLayout from "./common/layouts/CoreLayout";
import "./styles/_main.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CoreLayout>
      <Routes />
    </CoreLayout>
  </React.StrictMode>
);
