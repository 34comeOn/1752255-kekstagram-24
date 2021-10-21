const closePicture = function (pictureBarrel, commentsBarrel) {
  pictureBarrel.classList.add('hidden');
  document.body.classList.remove('modal-open');

  for (let i = commentsBarrel.children.length -1; i >= 0; i--) {
    const child = commentsBarrel.children[i];
    child.parentElement.removeChild(child);
  }
};

export {closePicture};
