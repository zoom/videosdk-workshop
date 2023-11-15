import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClientContext } from "./Context/globalContext";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={uitoolkit}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);
