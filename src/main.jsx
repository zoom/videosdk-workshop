import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClientContext } from "./Context/Contexts";
import ZoomVideo from "@zoom/videosdk";
const client = ZoomVideo.createClient();

// async function initClient() {
//   let result = await client.init("en-US");
//   return result;
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={[client, ZoomVideo]}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);
