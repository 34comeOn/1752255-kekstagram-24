import { isEscapeKey } from './util.js';
import { usersCommentsFragment } from './pictures-preview.js';
import { closePicture } from './close-button.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('#picture-cancel');
const picImage = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');
const commentItem = commentsContainer.querySelector('.social__comment');
const commentItems = commentsContainer.querySelectorAll('.social__comment');

const onModalEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose)) {
    evtClose.preventDefault();
    closePicture(bigPicture, commentsContainer);
  }
};

function closeUserModal () {
  document.removeEventListener('keydown', onModalEscKeydown);
}

commentsContainer.removeChild(commentItems[0]);
commentsContainer.removeChild(commentItems[1]);

picturesContainer.addEventListener('click', (evtClick) => {
  if (evtClick.target.classList.value.includes('picture__img')) {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    picImage.children[0].src = evtClick.target.src;
    likesCount.textContent = evtClick.target.closest('.picture').querySelector('.picture__likes').textContent;
    commentsCount.textContent = evtClick.target.closest('.picture').querySelector('.picture__comments').textContent;

    bigPictureCloseElement.addEventListener('click', () => {
      closePicture(bigPicture, commentsContainer);
      closeUserModal();
    });
    document.addEventListener('keydown', onModalEscKeydown);

    for (let i= usersCommentsFragment.children.length-1; i >= 0; i--) {
      if(evtClick.target.closest('.picture').querySelector('.picture__id').textContent === usersCommentsFragment.children[i].querySelector('.id__link').textContent) {
        commentsContainer.appendChild(usersCommentsFragment.children[i].cloneNode(true));
      }
    }
  }

});

export {picturesContainer, commentItem, commentsContainer};
