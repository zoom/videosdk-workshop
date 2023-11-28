import IconSettingsButton from "../_Base/IconSettingsButton";
import { faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";

// need to also track off/on
// make sure the video is reveresed for me, normal for everyone else
// blur backgrounds? anything else?
// callback methods for play/stop video, resizing participant rendering

const VideoSettings = ({ menuItems = [], on = true }) => {
  return (
    <IconSettingsButton
      onIcon={faVideo}
      offIcon={faVideoSlash}
      on={on}
      items={menuItems}
    />
  );
};

export default VideoSettings;
