import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Contexts.js";

import Preview from "./Preview.jsx";
import Video from "./Video.jsx";
import "./Session.css";

const Session = () => {
  const [state] = useState("preview");
  const meetingArgs = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (meetingArgs.videoSDKJWT === "") navigate("/");
  }, [meetingArgs.videoSDKJWT, navigate]);
  if (state === "preview") return <Preview />;
  if (state === "video") return <Video />;
};

export default Session;
