import IconSettingsButton from "../_Base/IconSettingsButton";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

// will also need to track speaker - different update?
// track mute/unmute
// callbacks for the click events - switching devices, mute/unmute
const AudioSettings = ({ menuItems = [], on = true }) => {
  return (
    <IconSettingsButton
      onIcon={faMicrophone}
      offIcon={faMicrophoneSlash}
      on={on}
      items={menuItems}
    />
  );
};

export default AudioSettings;
