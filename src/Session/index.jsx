import { useState } from "react";
import Preview from "./Preview.jsx";
import Video from "./Video.jsx";
import "./Session.css";

const Session = () => {
  const [state] = useState("preview");

  if (state === "preview") return <Preview />;
  if (state === "video") return <Video />;
};

export default Session;
