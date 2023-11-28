import { useContext, useState } from "react";
import { ClientContext, UserContext } from "../Context/Contexts.js";

import Preview from "./Preview.jsx";
import Video from "./Video.jsx";
import "./Session.css";

const Session = () => {
  const [state] = useState("preview");
  const userDetails = useContext(UserContext);
  const client = useContext(ClientContext);
  console.log(userDetails);
  console.log(client);

  if (state === "preview") return <Preview />;
  if (state === "video") return <Video />;
};

export default Session;
