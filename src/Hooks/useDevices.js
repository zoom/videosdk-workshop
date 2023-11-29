import ZoomVideo from "@zoom/videosdk";
import { useEffect, useState, useCallback } from "react";

export function useDevices(stream) {
  const [devices, setDevices] = useState({});

  const getStreamDevices = useCallback(
    async () => ({
      mics: await stream.getMicList(),
      speakers: await stream.getSpeakerList(),
      cameras: await stream.getCameraList(),
    }),
    [stream]
  );

  const getPreviewDevices = async () => {
    let dl = await ZoomVideo.getDevices();
    return {
      mics: dl.filter((d) => d.kind === "audioinput"),
      speakers: dl.filter((d) => d.kind === "audiooutput"),
      cameras: dl.filter((d) => d.kind === "videoinput"),
    };
  };

  useEffect(() => {
    if (stream) {
      getStreamDevices().then((devices) => {
        setDevices(devices);
      });
    } else {
      getPreviewDevices().then((devices) => {
        setDevices(devices);
      });
    }
  }, [getStreamDevices, stream]);

  return devices;
}
//
