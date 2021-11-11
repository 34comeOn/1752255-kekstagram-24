import {commentItem} from './open-modal.js';
import { picturesContainer } from './open-modal.js';

const usersPreviewsFragment = document.createDocumentFragment();
const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersCommentsFragment = document.createDocumentFragment();

const renderPicturesList = (arrayOfObjects) => {

  arrayOfObjects.forEach(({url, likes, comments, id}) => {
    const previewElement = randomUserTemplate.cloneNode(true);

    previewElement.querySelector('.picture__img').src = url;
    previewElement.querySelector('.picture__likes').textContent = likes;
    previewElement.querySelector('.picture__comments').textContent = comments.length;
    previewElement.querySelector('.picture__id').textContent = id;
    usersPreviewsFragment.appendChild(previewElement);
    picturesContainer.appendChild(usersPreviewsFragment);

    comments.forEach(({avatar, name, message}) => {
      const newComment = commentItem.cloneNode(true);
      newComment.querySelector('.social__picture').src = avatar;
      newComment.querySelector('.social__picture').alt = name;
      newComment.querySelector('.social__text').textContent = message;
      newComment.querySelector('.id__link').textContent = previewElement.querySelector('.picture__id').textContent;
      usersCommentsFragment.appendChild(newComment);
    });

  });
};

export {renderPicturesList, usersCommentsFragment};
