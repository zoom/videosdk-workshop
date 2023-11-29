import IconSettingsButton from "../_Base/IconSettingsButton";
import {
  faMicrophone,
  faMicrophoneSlash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ClientContext, MediaContext } from "../../Context/Contexts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAntdItem } from "../../utils";

//localAudio or stream
const AudioSettings = ({ localAudio }) => {
  const [media, setMedia] = useContext(MediaContext);
  const [_, ZoomVideo] = useContext(ClientContext);

  const toggleMic = async () => {
    if (!media.audioStarted) {
      await localAudio.start();
      await localAudio.unmute();
      setMedia({ ...media, audioStarted: true, audioOn: true });
    }
    if (media.audioStarted === true && !media.audioOn) {
      await localAudio.unmute();
      setMedia({ ...media, audioOn: true });
    }

    if (media.audioStarted === true && media.audioOn === true) {
      await localAudio.mute();
      setMedia({ ...media, audioOn: false });
    }
  };

  const switchAudio = async (deviceId, type) => {
    // check fore mic || speaker
    if (type === "microphone") {
      await localAudio.stop();
      ZoomVideo.createLocalAudioTrack(deviceId);
      await localAudio.start();
      setMedia({ ...media, activeMic: deviceId });
    } else if (type === "speaker") {
      setMedia({ ...media, activeSpeaker: deviceId });
    }
  };
  let menuItems = [];
  if (media?.mics?.length > 0) {
    menuItems.push(
      getAntdItem(
        "Select a Microphone",
        "microphone",
        undefined,
        media?.mics.map((i) =>
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
  if (media?.speakers?.length > 0) {
    menuItems.push(
      getAntdItem(
        "Select a speaker",
        "speaker",
        undefined,
        media?.speakers.map((i) =>
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
      isOn={media.audioOn}
      menuItems={menuItems}
      onToggle={toggleMic}
      onSelect={switchAudio}
    />
  );
};

export default AudioSettings;
