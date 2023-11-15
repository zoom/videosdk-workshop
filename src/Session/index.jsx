import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/globalContext";

import Preview from "./Preview.jsx";
import Video from "./Video.jsx";
import "./Session.css";

const Session = () => {
  const [state, updateState] = useState("preview");
  const meetingArgs = useContext(UserContext);
  const navigate = useNavigate();

  const handleJoin = () => {
    console.log("Session joined");
  };
  const handleClose = () => {
    console.log("Session closed");
    navigate("/");
  };

  useEffect(() => {
    if (meetingArgs.videoSDKJWT === "") navigate("/");
  }, [meetingArgs.videoSDKJWT, navigate]);
  if (state === "preview")
    return <Preview handleOk={() => updateState("video")} />;
  if (state === "video")
    return <Video handleClose={handleClose} handleJoin={handleJoin} />;
};

export default Session;
