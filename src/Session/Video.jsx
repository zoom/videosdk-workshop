import GalleryView from "../Components/Video/GalleryView";
import RibbonView from "../Components/Video/RibbonView";

const Video = () => {
  return (
    <>
      <h1>Video</h1>
      <GalleryView />
      <RibbonView />
    </>
  );
};
// this controls the gallery view
// bottom buttons - how do these get managed

// this will need to have the main speaker video presenter view
// participants view should be either a scrollable bar, or show all as grid
// this container will manage the two rendered participant views, etc.
// it will also have the settings buttons as well
// hopefully the context will maintain these items properly

export default Video;
