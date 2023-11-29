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

// function useOnlineStatus() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);
//   return isOnline;
