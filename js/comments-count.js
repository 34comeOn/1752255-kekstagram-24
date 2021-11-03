import { picturesContainer } from './pictures-preview.js';
const COMMENTS_NOT_MORE_THEN = 6;
const MAX_COMMENTS_COLLECTION_INDEX = 4;
const commentsContainer = document.querySelector('.social__comments');
const loadCommentsButton = document.querySelector('.comments-loader');
const commentsShownNumber = document.querySelector('.comments-shown');

const collectAllComments = () => (
  commentsContainer.querySelectorAll('.social__comment')
);

const collectOnlyHiddenComments = () => (
  commentsContainer.querySelectorAll('.hidden')
);

const getShownCommentsNumber = () => {
  commentsShownNumber.textContent = collectAllComments().length - collectOnlyHiddenComments().length;
};

const disableCommentsButton = () => {
  if (collectOnlyHiddenComments().length < 1) {
    loadCommentsButton.setAttribute('disabled', 'disabled');
  } else {
    loadCommentsButton.removeAttribute('disabled');
  }
};

picturesContainer.addEventListener('click', () => {
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

  loadCommentsButton.addEventListener('click', () => {
    collectOnlyHiddenComments();
    if (collectOnlyHiddenComments().length < COMMENTS_NOT_MORE_THEN) {
      for (let y = collectOnlyHiddenComments().length - 1; y >= 0; y --) {
        collectOnlyHiddenComments()[y].classList.remove('hidden');
      }
    } else {
      for (let y = 0; y <= MAX_COMMENTS_COLLECTION_INDEX; y++) {
        collectOnlyHiddenComments()[y].classList.remove('hidden');
      }
    }

    getShownCommentsNumber();
    disableCommentsButton();
  });

  disableCommentsButton();
});
