import uitoolkit from '/zoom/index.js';

const joinContainer = document.getElementById('joinContainer');
const sessionContainer = document.getElementById('sessionContainer');
const previewContainer = document.getElementById('previewContainer');
const endContainer = document.getElementById('finalContainer');
const previewWrapper = document.getElementById('previewWrapper');

const config = {
  videoSDKJWT: '',
  sessionName: 'ZoomVideoSDKDemo',
  sessionPasscode: 'abc123',
  features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
};

window.getVideoSDKJWT = getVideoSDKJWT;
window.joinPreview = joinPreview;

async function getVideoSDKJWT() {
  config.userName = document.getElementById('yourName').value;

  if (config.userName) {
    let response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: config.sessionName,
        roleType: parseInt(document.getElementById('role').value, 2)
      })
    });

    let data = await response.json();
    config.videoSDKJWT = data.signature;
    joinSession();
  }
}

function joinPreview() {
  joinContainer.style.display = 'none';
  uitoolkit.openPreview(previewContainer);
  previewWrapper.style.display = 'block';
}

function joinSession() {
  console.log(config);
  uitoolkit.joinSession(sessionContainer, config);
  previewWrapper.style.display = 'none';
  uitoolkit.closePreview(previewContainer);
  uitoolkit.onSessionClosed(sessionClosed);
}

const sessionClosed = () => {
  uitoolkit.closeSession(sessionContainer);
  endContainer.style.display = 'block';
};
