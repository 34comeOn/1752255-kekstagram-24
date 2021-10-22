import {arrayOfObjects} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const usersPreviewsFragment = document.createDocumentFragment();
const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');

arrayOfObjects.forEach(({url, likes, comments}) => {
  const previewElement = randomUserTemplate.cloneNode(true);

  previewElement.querySelector('.picture__img').src = url;
  previewElement.querySelector('.picture__likes').textContent = likes;
  previewElement.querySelector('.picture__comments').textContent = comments.length;
  usersPreviewsFragment.appendChild(previewElement);
  picturesContainer.appendChild(usersPreviewsFragment);
});

export {picturesContainer};
export {bigPicture};
