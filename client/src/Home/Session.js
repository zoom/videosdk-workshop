import {useContext} from "react";
import { UserContext, ClientContext } from "../Context/globalContext";
import ZoomVideo from "@zoom/videosdk";
import {useNavigate} from 'react-router-dom';

const Session = () => {

  const meetingArgs = useContext(UserContext);
  const {topic, signature, name, password} = meetingArgs;
  const client = useContext(ClientContext);

  const navigate = useNavigate();

  const joinSession = () => {
    client.join(topic, name, password, signature);
    const stream = client.getMediaStream();
    const userId = client.getCurrentUserInfo().userId;
  }
  const endSession = () => {
    ZoomVideo.destroyClient();
    navigate('/')
  }
  return(
    <div>
      <button onClick={() => joinSession()}>Join Session</button>
      <button onClick={() => endSession()}>Leave Session</button>
    </div>
  )
}

export default Session;