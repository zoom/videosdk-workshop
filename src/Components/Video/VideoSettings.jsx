import IconSettingsButton from "../_Base/IconSettingsButton";
import { VideoCameraFilled, VideoCameraOutlined } from "@ant-design/icons";

// need to also track off/on
// make sure the video is reveresed for me, normal for everyone else
// blur backgrounds? anything else?

const VideoSettings = ({ menuItems = [] }) => {
  return (
    <IconSettingsButton
      OnIcon={VideoCameraFilled}
      OffIcon={VideoCameraOutlined}
      items={menuItems}
    />
  );
};

export default VideoSettings;
