import uitoolkit from '@zoom/videosdk-ui-toolkit/index.js';
import { clickEventFactory } from './helpers/eventFactory.js';
import initSession from './session.js';
import { switchPreviewToLoadingView } from './helpers/views.js';

const initPreview = () => {
  let previewContainer = document.getElementById('previewContainer');

  uitoolkit.openPreview(previewContainer);

  clickEventFactory({
    id: 'join-button',
    callback: async () => {
      uitoolkit.closePreview(previewContainer);
      switchPreviewToLoadingView();
      await initSession();
    }
  });
};

export default initPreview;
