const clickEventFactory = ({ id, callback }) => {
  const $el = document.getElementById(id);
  let isElAlreadyClicked = false;

  const onClick = async (event) => {
    event.preventDefault();
    if (!isElAlreadyClicked) {
      // Blocks logic from executing again if already in progress
      isElAlreadyClicked = true;
      try {
        await callback();
      } catch (e) {
        return e;
      }

      isElAlreadyClicked = false;
    }
  };
  return $el.addEventListener('click', onClick);
};

export { clickEventFactory };
