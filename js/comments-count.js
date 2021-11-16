import { picturesContainerElement } from './open-modal.js';
import {commentsContainerElement} from './open-modal.js';

const COMMENTS_NOT_MORE_THEN = 6;
const MAX_COMMENTS_COLLECTION_INDEX = 4;

const loadCommentsButtonElementElement = document.querySelector('.comments-loader');
const commentsShownNumberElementElement = document.querySelector('.comments-shown');

const collectAllComments = () => (
  commentsContainerElement.querySelectorAll('.social__comment')
);

const collectOnlyHiddenComments = () => (
  commentsContainerElement.querySelectorAll('.hidden')
);

const getShownCommentsNumber = () => {
  commentsShownNumberElementElement.textContent = collectAllComments().length - collectOnlyHiddenComments().length;
};

const disableCommentsButton = () => {
  if (collectOnlyHiddenComments().length < 1) {
    loadCommentsButtonElementElement.setAttribute('disabled', 'disabled');
  } else {
    loadCommentsButtonElementElement.removeAttribute('disabled');
  }
};

const getMoreFiveComments = () => {

  collectOnlyHiddenComments();
  if (collectOnlyHiddenComments().length < COMMENTS_NOT_MORE_THEN) {
    for (let y = collectOnlyHiddenComments().length - 1; y >= 0; y --) {
      collectOnlyHiddenComments()[y].classList.remove('hidden');
    }
  } else {
    const currentLength = collectOnlyHiddenComments().length - 5;
    for (let y = collectOnlyHiddenComments().length - 1; y >= currentLength; y --) {
      collectOnlyHiddenComments()[y].classList.remove('hidden');
    }
  }
  getShownCommentsNumber();
  disableCommentsButton();
};

picturesContainerElement.addEventListener('click', () => {
  collectAllComments().forEach((comment) => {
    comment.classList.add('hidden');
  });

  if (collectAllComments().length < COMMENTS_NOT_MORE_THEN) {
    for (let i = 0; i <= collectAllComments().length - 1; i ++) {
      collectAllComments()[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i <= MAX_COMMENTS_COLLECTION_INDEX; i ++) {
      collectAllComments()[i].classList.remove('hidden');
    }
  }

  getShownCommentsNumber();

  loadCommentsButtonElementElement.addEventListener('click', getMoreFiveComments);

  disableCommentsButton();
});
