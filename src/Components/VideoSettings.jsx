import IconSettingsButton from "./IconSettingsButton";
import { VideoCameraFilled } from "@ant-design/icons";

// this is filled in from the videoSDK response
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const VideoSettings = () => {
  return <IconSettingsButton OnIcon={VideoCameraFilled} items={items} />;
};

export default VideoSettings;
