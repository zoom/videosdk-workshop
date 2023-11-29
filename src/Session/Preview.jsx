import { useContext, useRef } from "react";
import { Button, Flex } from "antd";
import { ClientContext } from "../Context/Contexts.js";
import { useDevices } from "../Hooks/useDevices.js";
// this page manages everything related to the preview, and stores
// the media setup for the stream to use and start from

import CameraSettings from "../Components/Video/CameraSettings.jsx";
import AudioSettings from "../Components/Audio/AudioSettings.jsx";

// handle the device changes as well
// auto flip the preview - having it not flipped is uncomfortable
// modal needs to move out of this file
// update user with device selection and off/on

// get place holders in for video and buttons as needed
//    <Divider orientation="left">Horizontal</Divider>

const Preview = ({ join }) => {
  const [_, ZoomVideo] = useContext(ClientContext);
  const { cameras, mics } = useDevices();
  const videoRef = useRef(null);
  let localAudio = ZoomVideo.createLocalAudioTrack(mics?.[0]?.deviceId);
  let localVideo = ZoomVideo.createLocalVideoTrack(cameras?.[0]?.deviceId);

  const handleJoin = () => {
    // join the session here?
    join();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
        <CameraSettings localVideo={localVideo} videoRef={videoRef} />
        <AudioSettings localAudio={localAudio} />
      </Flex>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleJoin}>Join</Button>
    </Flex>
  );
};

export default Preview;
