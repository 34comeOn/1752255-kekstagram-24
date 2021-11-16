import { isEscapeKey } from './util.js';
import { usersCommentsFragmentElement } from './pictures-preview.js';
import { closePicture } from './close-button.js';

const picturesContainerElement = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('#picture-cancel');
const picImageElement = bigPictureElement.querySelector('.big-picture__img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const commentsContainerElement = document.querySelector('.social__comments');
const commentItemElement = commentsContainerElement.querySelector('.social__comment');
const commentItemsElements = commentsContainerElement.querySelectorAll('.social__comment');

const onModalEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose)) {
    evtClose.preventDefault();
    closePicture(bigPictureElement, commentsContainerElement);
  }
};

const closeUserModal = () => {
  document.removeEventListener('keydown', onModalEscKeydown);
};

commentsContainerElement.removeChild(commentItemsElements[0]);
commentsContainerElement.removeChild(commentItemsElements[1]);

picturesContainerElement.addEventListener('click', (evtClick) => {
  if (evtClick.target.classList.value.includes('picture__img')) {
    bigPictureElement.classList.remove('hidden');
    document.body.classList.add('modal-open');

    picImageElement.children[0].src = evtClick.target.src;
    likesCountElement.textContent = evtClick.target.closest('.picture').querySelector('.picture__likes').textContent;
    commentsCountElement.textContent = evtClick.target.closest('.picture').querySelector('.picture__comments').textContent;

    bigPictureCloseElement.addEventListener('click', () => {
      closePicture(bigPictureElement, commentsContainerElement);
      closeUserModal();
    });
    document.addEventListener('keydown', onModalEscKeydown);

    for (let i= usersCommentsFragmentElement.children.length-1; i >= 0; i--) {
      if(evtClick.target.closest('.picture').querySelector('.picture__id').textContent === usersCommentsFragmentElement.children[i].querySelector('.id__link').textContent) {
        commentsContainerElement.appendChild(usersCommentsFragmentElement.children[i].cloneNode(true));
      }
    }
  }

});

export {picturesContainerElement, commentItemElement, commentsContainerElement};
