import {arrayOfObjects} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const usersPreviewsFragment = document.createDocumentFragment();
const randomUserTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersPreviews = arrayOfObjects;

usersPreviews.forEach((preview) => {
  const previewElement = randomUserTemplate.cloneNode(true);
  previewElement.querySelector('.picture__img').src = preview.url;
  previewElement.querySelector('.picture__likes').textContent = preview.likes;
  previewElement.querySelector('.picture__comments').textContent = preview.comments.length;
  usersPreviewsFragment.appendChild(previewElement);
});

picturesContainer.appendChild(usersPreviewsFragment);
