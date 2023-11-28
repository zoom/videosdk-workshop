import { useEffect, useState, useContext } from "react";
import { ClientContext } from "../Context/Contexts.js";
import { useNavigate } from "react-router-dom";

import Preview from "./Preview.jsx";
import Video from "./Video.jsx";
import "./Session.css";

// This page controls the state of the session
// PreSession - Session = PostSession states
// Each state will do the appropriate work

const Session = () => {
  const [state, setState] = useState("PreSession");
  // const [userDetails] = useContext(UserContext);
  const [client] = useContext(ClientContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function initClient() {
      let initializedClient = await client.init("en-US", "CDN");
      return initializedClient;
    }

    initClient();
  }, [client]);

  useEffect(() => {
    if (state === "PostSession") {
      // do clean up here
      navigate("/");
    }
  }, [state, navigate]);
  // manage the session parts here
  // store contexts in localstorage?
  // what else needs to happen on this page specifically?

  if (state === "PreSession")
    return <Preview join={() => setState("Session")} />;
  if (state === "Session")
    return <Video leave={() => setState("PostSession")} />;
  if (state === "PostSession")
    return <h1>Clean up tasks and redirect to home</h1>;
};

export default Session;
