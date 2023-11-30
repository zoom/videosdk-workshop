import { useEffect, useState } from "react";

import IconSettingsButton from "../_Base/IconSettingsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAntdItem } from "../../utils";
import { useContext } from "react";
import { ClientContext, DeviceContext } from "../../Context/Contexts.js";
import { useDevices } from "../../Hooks/useDevices.js";
import {
  faVideo,
  faVideoSlash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

//localAudio or stream
const CameraSettings = ({ videoRef, stream }) => {
  const { cameras } = useDevices();
  const { selectedCamera, videoOn, setSelectedCamera, setVideoOn } =
    useContext(DeviceContext);
  const { client, ZoomVideo } = useContext(ClientContext);
  const [localVideoTrack, setLocalVideoTrack] = useState("");
  let defaultCamera = cameras?.[0]?.deviceId;

  useEffect(() => {
    if (!selectedCamera) {
      setSelectedCamera(defaultCamera);
    }
  }, [defaultCamera, selectedCamera, setSelectedCamera]);

  useEffect(() => {
    if (!localVideoTrack && selectedCamera) {
      setLocalVideoTrack(ZoomVideo.createLocalVideoTrack(selectedCamera));
    }
  }, [localVideoTrack, selectedCamera, videoOn, ZoomVideo]);

  useEffect(() => {
    if (localVideoTrack && !localVideoTrack.isVideoStarted && videoOn) {
      localVideoTrack.start(videoRef.current);
    }
    if (localVideoTrack && localVideoTrack.isVideoStarted && !videoOn) {
      localVideoTrack.stop();
    }
  }, [localVideoTrack, videoOn, videoRef, ZoomVideo]);

  const swtichCamera = (deviceId) => {
    if (localVideoTrack.isVideoStarted) {
      localVideoTrack.switchCamera(deviceId);
    }
    setSelectedCamera(deviceId);
    setLocalVideoTrack(ZoomVideo.createLocalVideoTrack(deviceId));
  };

  const menuItems =
    (cameras &&
      cameras.length > 0 && [
        getAntdItem(
          "Select a Camera",
          "camera",
          null,
          cameras.map((item) =>
            getAntdItem(
              item.label,
              `camera|${item.deviceId}`,
              item.deviceId === selectedCamera && (
                <FontAwesomeIcon icon={faCheck} />
              )
            )
          ),
          "group"
        ),
      ]) ||
    [];

  return (
    <IconSettingsButton
      onIcon={faVideo}
      offIcon={faVideoSlash}
      isOn={videoOn}
      onToggle={() => setVideoOn(!videoOn)}
      onSelect={swtichCamera}
      menuItems={menuItems}
    />
  );
};

export default CameraSettings;
