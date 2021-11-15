import {commentItem} from './open-modal.js';
import { picturesContainer } from './open-modal.js';
import { showFilters } from './filters-buttons.js';

const usersPreviewsFragment = document.createDocumentFragment();
const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersCommentsFragment = document.createDocumentFragment();

const renderPicturesList = (arrayOfObjects) => {
  const alreadyRenderedPictures = picturesContainer.querySelectorAll('.picture');

  for (let i = alreadyRenderedPictures.length - 1; i >= 0; i--) {
    picturesContainer.removeChild(alreadyRenderedPictures[i]);
  }

  arrayOfObjects.forEach(({url, likes, comments, id}) => {
    const previewElement = randomUserTemplate.cloneNode(true);

    previewElement.querySelector('.picture__img').src = url;
    previewElement.querySelector('.picture__likes').textContent = likes;
    previewElement.querySelector('.picture__comments').textContent = comments.length;
    previewElement.querySelector('.picture__id').textContent = id;
    usersPreviewsFragment.appendChild(previewElement);

    comments.forEach(({avatar, name, message}) => {
      const newComment = commentItem.cloneNode(true);
      newComment.querySelector('.social__picture').src = avatar;
      newComment.querySelector('.social__picture').alt = name;
      newComment.querySelector('.social__text').textContent = message;
      newComment.querySelector('.id__link').textContent = previewElement.querySelector('.picture__id').textContent;
      usersCommentsFragment.appendChild(newComment);
    });
  });

  picturesContainer.appendChild(usersPreviewsFragment);

  showFilters();
};

export {renderPicturesList, usersCommentsFragment};
