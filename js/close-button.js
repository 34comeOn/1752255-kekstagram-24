const uploadPicture = document.querySelector('.img-upload__preview').children;

const closePicture = function (pictureBarrel, commentsBarrel) {
  pictureBarrel.classList.add('hidden');
  document.body.classList.remove('modal-open');

  for (let i = commentsBarrel.children.length -1; i >= 0; i--) {
    const child = commentsBarrel.children[i];
    child.parentElement.removeChild(child);
  }
};

const closeForm = function (form) {
  form.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadPicture[0].src = '';
};

export {closePicture};
export {closeForm};
