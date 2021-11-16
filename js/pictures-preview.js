import {commentItemElement} from './open-modal.js';
import { picturesContainerElement } from './open-modal.js';
import { showFilters } from './filters-buttons.js';

const usersPreviewsFragmentElement = document.createDocumentFragment();
const randomUserTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const usersCommentsFragmentElement = document.createDocumentFragment();

const renderPicturesList = (arrayOfObjects) => {
  const alreadyRenderedPictures = picturesContainerElement.querySelectorAll('.picture');

  for (let i = alreadyRenderedPictures.length - 1; i >= 0; i--) {
    picturesContainerElement.removeChild(alreadyRenderedPictures[i]);
  }

  arrayOfObjects.forEach(({url, likes, comments, id}) => {
    const previewElement = randomUserTemplateElement.cloneNode(true);

    previewElement.querySelector('.picture__img').src = url;
    previewElement.querySelector('.picture__likes').textContent = likes;
    previewElement.querySelector('.picture__comments').textContent = comments.length;
    previewElement.querySelector('.picture__id').textContent = id;
    usersPreviewsFragmentElement.appendChild(previewElement);

    comments.forEach(({avatar, name, message}) => {
      const newComment = commentItemElement.cloneNode(true);
      newComment.querySelector('.social__picture').src = avatar;
      newComment.querySelector('.social__picture').alt = name;
      newComment.querySelector('.social__text').textContent = message;
      newComment.querySelector('.id__link').textContent = previewElement.querySelector('.picture__id').textContent;
      usersCommentsFragmentElement.appendChild(newComment);
    });
  });

  picturesContainerElement.appendChild(usersPreviewsFragmentElement);

  showFilters();
};

export {renderPicturesList, usersCommentsFragmentElement};
