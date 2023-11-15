import { useContext, useEffect } from "react";
import { ClientContext, UserContext } from "../Context/globalContext";

const Video = ({ handleJoin, handleClose }) => {
  const uitoolkit = useContext(ClientContext);
  const meetingConfig = useContext(UserContext);

  useEffect(() => {
    let sessionContainer = document.getElementById("session");
    uitoolkit.joinSession(sessionContainer, meetingConfig);
    uitoolkit.onSessionJoined(handleJoin);
    uitoolkit.onSessionClosed(handleClose);
    return () => {
      uitoolkit.offSessionJoined(handleJoin);
      uitoolkit.offSessionClosed(handleClose);
      uitoolkit.closeSession(sessionContainer);
    };
  }, [meetingConfig, uitoolkit, handleJoin, handleClose]);

  return (
    <>
      <div id="session"></div>
    </>
  );
};

export default Video;
