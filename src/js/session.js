import uitoolkit from '@zoom/videosdk-ui-toolkit/index.js';
import { clickEventFactory } from './helpers/eventFactory.js';
import { switchLoadingToSessionView, switchSessionToEndingView } from './helpers/views.js';

const getSignature = async (sessionName) => {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      topic: sessionName,
      roleType: 0
    })
  });
  return await response.json();
};

const initSession = async () => {
  let sessionContainer = document.getElementById('sessionContainer');
  const sessionJoined = () => {
    // console.log('session joined');
  };

  const sessionClosed = () => {
    uitoolkit.closeSession(sessionContainer);
    switchSessionToEndingView();
  };

  const config = {
    videoSDKJWT: '',
    sessionName: 'SessionA',
    userName: 'UserA',
    sessionPasscode: 'abc123',
    features: ['video', 'audio', 'share', 'chat', 'users', 'settings']
  };

  const signature = await getSignature(config.sessionName);
  config.videoSDKJWT = signature.signature;

  switchLoadingToSessionView();
  uitoolkit.joinSession(sessionContainer, config);
  uitoolkit.onSessionJoined(sessionJoined);
  uitoolkit.onSessionClosed(sessionClosed);

  return;
};

export default initSession;
