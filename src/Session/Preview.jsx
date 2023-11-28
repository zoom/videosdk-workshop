import { useEffect, useState, useContext } from "react";
import { Button, Modal } from "antd";
import { ClientContext, UserContext } from "../Context/Contexts.js";

// this page manages everything related to the preview, and stores
// the media setup for the stream to use and start from

import VideoSettings from "../Components/Video/VideoSettings.jsx";
import AudioSettings from "../Components/Audio/AudioSettings.jsx";

// handle the device changes as well
// auto flip the preview - having it not flipped is uncomfortable
// modal needs to move out of this file
// update user with device selection and off/on

// get place holders in for video and buttons as needed
//    <Divider orientation="left">Horizontal</Divider>

const Preview = ({ join }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { ZoomVideo } = useContext(ClientContext);
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    async function getDevices() {
      let devices = await ZoomVideo.getDevices();

      const cameraDevices = devices.filter((device) => {
        return device.kind === "videoinput";
      });
      const micDevices = devices.filter((device) => {
        return device.kind === "audioinput";
      });
      const speakerDevices = devices.filter((device) => {
        return device.kind === "audiooutput";
      });

      let result = {
        mics: micDevices.map((item) => {
          return { label: item.label, deviceid: item.deviceId };
        }),
        speakers: speakerDevices.map((item) => {
          return { label: item.label, deviceid: item.deviceId };
        }),
        cameras: cameraDevices.map((item) => {
          return { label: item.label, deviceid: item.deviceId };
        }),
      };
      setUser({ ...user, devices: result });
    }
    if (!user.devices) {
      getDevices();
    }
  }, [ZoomVideo, user, setUser]);

  const handleJoin = () => {
    join();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Camera Preview"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="join" type="primary" onClick={handleJoin}>
            Join
          </Button>,
        ]}
      >
        <VideoSettings menuItems={user?.devices?.cameras} />
        <AudioSettings menuItems={user?.devices?.speakers} />
      </Modal>
    </>
  );
};

export default Preview;

// ZoomVideo.getDevices().then((devices) => {
//   audioDevices = devices.filter((device) => {
//     return device.kind === 'audioinput'
//   })

//   localAudioTrack = ZoomVideo.createLocalAudioTrack(audioDevices[0].deviceId)

//   localAudioTrack.start()
// })

// // turn on microphone preview
// function previewMicrophoneButton() {
//   localAudioTrack.unmute()

//   // add logic to display microphone volume level using localMicrophoneTrack.getCurrentVolume()
// }

// // turn off microphone preview
// function stopPreviewMicrophoneButton() {
//   localAudioTrack.mute()
// }

// call back method for the onClick
// switchMicrophone(microphoneId) {
//   localAudioTrack.stop().then(() => {
//     localAudioTrack = ZoomVideo.createLocalAudioTrack(microphoneId)
//     localAudioTrack.start().then(() => {
//       this.localAudioTrack.unmute()
//     })
//   })
// }

// let localAudio = ZoomVideo.createLocalAudioTrack();
// let localVideo = ZoomVideo.createLocalVideoTrack();
// let allDevices;

// const mountDevices: () => Promise<{
//   mics: MediaDevice[];
//   speakers: MediaDevice[];
//   cameras: MediaDevice[];
// }> = async () => {
//   allDevices = await ZoomVideo.getDevices();
//   const cameraDevices: Array<MediaDeviceInfo> = allDevices.filter((device) => {
//     return device.kind === 'videoinput';
//   });
//   const micDevices: Array<MediaDeviceInfo> = allDevices.filter((device) => {
//     return device.kind === 'audioinput';
//   });
//   const speakerDevices: Array<MediaDeviceInfo> = allDevices.filter((device) => {
//     return device.kind === 'audiooutput';
//   });
//   return {
//     mics: micDevices.map((item) => {
//       return { label: item.label, deviceId: item.deviceId };
//     }),
//     speakers: speakerDevices.map((item) => {
//       return { label: item.label, deviceId: item.deviceId };
//     }),
//     cameras: cameraDevices.map((item) => {
//       return { label: item.label, deviceId: item.deviceId };
//     })
//   };
// };

// const updateMicFeedbackStyle = () => {
//   const newVolumeIntensity = localAudio.getCurrentVolume();
//   let newMicFeedbackStyle = '';

//   if (newVolumeIntensity === 0) {
//     newMicFeedbackStyle = '';
//   } else if (newVolumeIntensity <= 0.05) {
//     newMicFeedbackStyle = 'mic-feedback__very-low';
//   } else if (newVolumeIntensity <= 0.1) {
//     newMicFeedbackStyle = 'mic-feedback__low';
//   } else if (newVolumeIntensity <= 0.15) {
//     newMicFeedbackStyle = 'mic-feedback__medium';
//   } else if (newVolumeIntensity <= 0.2) {
//     newMicFeedbackStyle = 'mic-feedback__high';
//   } else if (newVolumeIntensity <= 0.25) {
//     newMicFeedbackStyle = 'mic-feedback__very-high';
//   } else {
//     newMicFeedbackStyle = 'mic-feedback__max';
//   }
//   const micIcon: any = document.getElementById('auido-volume-feedback');
//   if (prevMicFeedbackStyle !== '' && micIcon) {
//     micIcon.classList.toggle(prevMicFeedbackStyle);
//   }

//   if (newMicFeedbackStyle !== '' && micIcon) {
//     micIcon.classList.toggle(newMicFeedbackStyle);
//   }
//   console.log(newMicFeedbackStyle, newVolumeIntensity);
//   prevMicFeedbackStyle = newMicFeedbackStyle;
// };
