import IconSettingsButton from "../_Base/IconSettingsButton";
import {
  faVideo,
  faVideoSlash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAntdItem } from "../../utils";
import { useContext } from "react";
import { MediaContext } from "../../Context/Contexts.js";
import { useDevices } from "../../Hooks/useDevices.js";

//localAudio or stream
const CameraSettings = ({ videoRef, localVideo }) => {
  const [media] = useContext(MediaContext);
  const { cameras } = useDevices();

  const toggleCamera = async () => {
    if (media?.videoOn === true) {
      await localVideo.stop();
    }

    if (!media?.videoOn) {
      await localVideo.start(videoRef.current);
    }
  };

  const switchCamera = async (deviceId) => {
    await localVideo.switchCamera(deviceId);
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
      isOn={media?.videoOn}
      onToggle={toggleCamera}
      onSelect={switchCamera}
      menuItems={menuItems}
    />
  );
};

export default CameraSettings;
