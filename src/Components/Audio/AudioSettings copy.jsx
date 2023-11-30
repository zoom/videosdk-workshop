import IconSettingsButton from "../_Base/IconSettingsButton";
import {
  faMicrophone,
  faMicrophoneSlash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useCallback } from "react";
import { MediaContext } from "../Context/Contexts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAntdItem } from "../../utils";

const AudioSettings = ({ localAudio }) => {
  const [media, setMedia] = useContext(MediaContext);

  const startPreviewMic = useCallback(async () => {
    await localAudio.start();
    setMedia({ ...media, audioStarted: true });
  }, [localAudio, setMedia, media]);

  // run this on clean up?
  const stopPreviewMic = useCallback(async () => {
    await localAudio.stop();
    setMedia({ ...media, audioStarted: false });
  }, [localAudio, setMedia, media]);

  const unmutePreviewMic = useCallback(async () => {
    await localAudio.unmute();
    setMedia({ ...media, audioOn: true });
  }, [localAudio, setMedia, media]);

  const mutePreviewMic = useCallback(async () => {
    await localAudio.mute();
    setMedia({ ...media, audioOn: false });
  }, [localAudio, setMedia, media]);

  const toggleMic = useCallback(async () => {
    if (!media?.audioStarted) {
      await startPreviewMic();
      await unmutePreviewMic();
    }
    if (media?.audioStarted === true && media?.audioOn === true) {
      unmutePreviewMic();
    }

    if (media?.audioStarted === true && !media?.audioOn) {
      mutePreviewMic();
    }
  }, [media, startPreviewMic, mutePreviewMic, unmutePreviewMic]);

  const switchAudio = useCallback((deviceId, type) => {
    console.log(type, deviceId);
    stopPreviewMic();
    ZoomVideo.createLocalAudioTrack(deviceId);
    setMedia({ ...media, activeMic: deviceId });
    startPreviewMic();
  }, []);
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
      onToggle={onMicrophoneClick}
      onSelect={onMicrophoneMenuClick}
    />
  );
};

export default AudioSettings;
