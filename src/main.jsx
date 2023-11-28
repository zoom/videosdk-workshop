import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClientContext } from "./Context/Contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);
