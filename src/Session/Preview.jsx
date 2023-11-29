import { useEffect, useState, useContext, useCallback, useRef } from "react";
import { Button, Flex } from "antd";
import { ClientContext, MediaContext } from "../Context/Contexts.js";

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
  const [media, setMedia] = useContext(MediaContext);
  const videoRef = useRef(null);
  let localAudio = ZoomVideo.createLocalAudioTrack();
  let localVideo = ZoomVideo.createLocalVideoTrack(media?.cameras[0]?.deviceId);

  async function getDevices() {
    let devices = await ZoomVideo.getDevices();
    const cameraDevices = devices.filter((device) => {
      return device.kind === "videoinput";
    });
    const micDevices = devices.filter((device) => {
      return device.kind === "audioinput";
    });
    const speakerDevices = devices.filter((device) => {
      return device.kind === "audiooutput";
    });
    return {
      mics: micDevices.map((item) => {
        return { label: item.label, deviceId: item.deviceId };
      }),
      speakers: speakerDevices.map((item) => {
        return { label: item.label, deviceId: item.deviceId };
      }),
      cameras: cameraDevices.map((item) => {
        return { label: item.label, deviceId: item.deviceId };
      }),
    };
  }

  useEffect(() => {
    getDevices().then((devices) => {
      let newMedia = {
        ...media,
        mics: devices.mics,
        cameras: devices.cameras,
        speakers: devices.speakers,
      };

      if (devices.speakers.length > 0) {
        newMedia.activeSpeaker = devices.speakers[0].deviceId;
      }
      if (devices.mics.length > 0) {
        newMedia.activeMic = devices.mics[0].deviceId;
      }
      if (devices.cameras.length > 0) {
        newMedia.activeCamera = devices.cameras[0].deviceId;
      }

      setMedia(newMedia);
    });
  }, []);

  const handleJoin = () => {
    // join the session here?
    join();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(media);
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
