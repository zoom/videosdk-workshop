import IconSettingsButton from "./Base/IconSettingsButton";
import { AudioOutlined } from "@ant-design/icons";

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

const AudioSettings = () => {
  return <IconSettingsButton OnIcon={AudioOutlined} items={items} />;
};

export default AudioSettings;
