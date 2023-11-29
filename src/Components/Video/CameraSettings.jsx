import IconSettingsButton from "../_Base/IconSettingsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAntdItem } from "../../utils";
import { useContext } from "react";
import { MediaContext } from "../../Context/Contexts.js";
import { useDevices } from "../../Hooks/useDevices.js";
import {
  faVideo,
  faVideoSlash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

//localAudio or stream
const CameraSettings = ({ videoRef, localVideo }) => {
  const [media] = useContext(MediaContext);
  const { cameras } = useDevices();

  const toggleCamera = () => {
    if (localVideo.isVideoStarted) {
      localVideo.stop();
      return;
    }

    if (!localVideo.isVideoStarted) {
      localVideo.start(videoRef.current);
      return;
    }
  };

  const switchCamera = (deviceId) => {
    localVideo.switchCamera(deviceId);
  };

  const menuItems = cameras &&
    cameras.length > 0 && [
      getAntdItem(
        "Select a Camera",
        "camera",
        null,
        cameras.map((item) =>
          getAntdItem(
            item.label,
            `camera|${item.deviceId}`,
            item.deviceId === media?.activeCamera && (
              <FontAwesomeIcon icon={faCheck} />
            )
          )
        ),
        "group"
      ),
    ];
  return (
    <IconSettingsButton
      onIcon={faVideo}
      offIcon={faVideoSlash}
      isOn={localVideo.isVideoStarted}
      onToggle={toggleCamera}
      onSelect={switchCamera}
      menuItems={menuItems}
    />
  );
};

export default CameraSettings;
