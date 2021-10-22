import { isEscapeKey } from './util.js';
import { picturesContainer } from './pictures-preview.js';
import { bigPicture } from './pictures-preview.js';
import { arrayOfObjects } from './data.js';
import { closePicture } from './close-picture.js';

const bigPictureCloseElement = document.querySelector('#picture-cancel');
const picImage = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');
const commentItem = commentsContainer.querySelector('.social__comment');
const usersCommentsFragment = document.createDocumentFragment();
const commentsInfo = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onModalEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose) ) {
    evtClose.preventDefault();
    closePicture(bigPicture, commentsContainer);
  }
};

function closeUserModal () {
  document.removeEventListener('keydown', onModalEscKeydown);
}

picturesContainer.addEventListener('click', (evtClick) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsInfo.classList.add('hidden');
  commentsLoader.classList.add('hidden');


  picImage.children[0].src = evtClick.target.src;
  likesCount.textContent = evtClick.target.closest('.picture').querySelector('.picture__likes').textContent;
  commentsCount.textContent = evtClick.target.closest('.picture').querySelector('.picture__comments').textContent;

  arrayOfObjects.forEach((dataObject) => {
    if (evtClick.target.src.includes(dataObject.url)) {
      const currentCommentsArray = dataObject.comments;
      currentCommentsArray.forEach(({avatar, name, message}) => {
        const newComment = commentItem.cloneNode(true);
        newComment.querySelector('.social__picture').src = avatar;
        newComment.querySelector('.social__picture').alt = name;
        newComment.querySelector('.social__text').textContent = message;
        usersCommentsFragment.appendChild(newComment);
        commentsContainer.appendChild(usersCommentsFragment);
      });

      return commentsContainer;
    }

    return 'Вы можете быть первым, кто оставит коментарий этой фотографии!';
  });

  bigPictureCloseElement.addEventListener('click', () => {
    closePicture(bigPicture, commentsContainer);
    closeUserModal();
  });

  document.addEventListener('keydown', onModalEscKeydown);
});

export {bigPicture};
