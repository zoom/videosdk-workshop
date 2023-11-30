import { useRef } from "react";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

import CameraSettings from "../Components/Video/CameraSettings.jsx";
// import AudioSettings from "../Components/Audio/AudioSettings.jsx";

const Preview = ({ join }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleJoin = () => {
    join();
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Flex vertical>
      <h1>Camera Preview</h1>
      <Flex>
        <div className="preview-video">
          <video
            id="preview-camera-video"
            width="100%"
            ref={videoRef}
            playsInline
          ></video>
        </div>
      </Flex>
      <Flex>
        <CameraSettings videoRef={videoRef} />
        {/* <AudioSettings localAudio={localAudio} /> */}
      </Flex>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleJoin}>Join</Button>
    </Flex>
  );
};

export default Preview;
