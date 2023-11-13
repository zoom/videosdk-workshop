import { useContext } from "react";
import { UserContext, ClientContext } from "../Context/globalContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Session = () => {
  const meetingArgs = useContext(UserContext);
  const { topic, signature, name, password } = meetingArgs;
  const client = useContext(ClientContext);

  const navigate = useNavigate();

  const joinSession = async () => {
    await client.join(topic, signature, name, password);
    try {
      console.log("join succesful");
      // console.log(client.getSessionInfo());
      const stream = client.getMediaStream();
      const userId = client.getCurrentUserInfo().userId;
    } catch (err) {
      console.log(`joining failed due to ${err}`);
    }
  };

  const endSession = () => {
    client.leave();
    navigate("/");
  };

  const userJoined = () => {
    message.success("user has joined");
  };

  const userLeft = () => {
    message.success("user has left");
  };

  client.on("user-added", userJoined);

  return (
    <div>
      <button onClick={() => joinSession()}>Join Session</button>
      <button onClick={() => endSession()}>Leave Session</button>
    </div>
  );
};

export default Session;
