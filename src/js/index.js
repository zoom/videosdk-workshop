import '@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css';
import '../css/index.css';
import initPreview from './preview.js';

window.addEventListener('DOMContentLoaded', async () => {
  await initPreview();
});
//
