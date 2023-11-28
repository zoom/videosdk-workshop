import IconSettingsButton from "../_Base/IconSettingsButton";
import { AudioFilled, AudioMutedOutlined } from "@ant-design/icons";

// will also need to track speaker - different update?
// track mute/unmute

const AudioSettings = ({ menuItems = [] }) => {
  return (
    <IconSettingsButton
      OnIcon={AudioFilled}
      OffIcon={AudioMutedOutlined}
      items={menuItems}
    />
  );
};

export default AudioSettings;
