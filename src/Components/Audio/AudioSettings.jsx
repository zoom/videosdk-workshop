import IconSettingsButton from "../_Base/IconSettingsButton";
import { useContext } from "react";
import { ClientContext, MediaContext } from "../../Context/Contexts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAntdItem } from "../../utils";
import { useDevices } from "../../Hooks/useDevices.js";
import {
  faMicrophone,
  faMicrophoneSlash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

//localAudio or stream
const AudioSettings = ({ localAudio }) => {
  const [media] = useContext(MediaContext);
  const [_, ZoomVideo] = useContext(ClientContext);
  const { mics, speakers } = useDevices();

  localAudio.start();

  const toggleMic = async () => {
    if (!localAudio.isAudioStarted) {
      localAudio.start();
    }
    if (!localAudio.isMicUnmuted) {
      localAudio.unmute();
    }
    if (localAudio.isMicUnmuted) {
      localAudio.mute();
    }
  };

  const switchAudio = (deviceId, type) => {
    if (localAudio.isAudioStarted) {
      localAudio.stop();
    }
    ZoomVideo.createLocalAudioTrack(deviceId);
    localAudio.start();
    localAudio.unmute();
  };

  let menuItems = [];
  if (mics?.length > 0) {
    menuItems.push(
      getAntdItem(
        "Select a Microphone",
        "microphone",
        undefined,
        mics.map((i) =>
          getAntdItem(
            i.label,
            `microphone|${i.deviceId}`,
            media.activeMic === i.deviceId && <FontAwesomeIcon icon={faCheck} />
          )
        ),
        "group"
      )
    );
    menuItems.push(getAntdItem("", "d1", undefined, undefined, "divider"));
  }
  if (speakers?.length > 0) {
    menuItems.push(
      getAntdItem(
        "Select a speaker",
        "speaker",
        undefined,
        speakers.map((i) =>
          getAntdItem(
            i.label,
            `speaker|${i.deviceId}`,
            media.activeSpeaker === i.deviceId && (
              <FontAwesomeIcon icon={faCheck} />
            )
          )
        ),
        "group"
      )
    );
  }

  return (
    <IconSettingsButton
      onIcon={faMicrophone}
      offIcon={faMicrophoneSlash}
      isOn={localAudio.isMicUnmuted}
      menuItems={menuItems}
      onToggle={toggleMic}
      onSelect={switchAudio}
    />
  );
};

export default AudioSettings;
