const Views = {
  Preview: document.getElementById('preview-view'),
  Loading: document.getElementById('loading-view'),
  Session: document.getElementById('video-view'),
  End: document.getElementById('end-view')
};

export const switchPreviewToLoadingView = () => {
  Views.Preview.classList.toggle('hidden');
  Views.Loading.classList.toggle('hidden');
};

export const switchLoadingToSessionView = () => {
  Views.Loading.classList.toggle('hidden');
  Views.Session.classList.toggle('hidden');
};

export const switchSessionToEndingView = () => {
  Views.Session.classList.toggle('hidden');
  Views.End.classList.toggle('hidden');
};
