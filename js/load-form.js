import { closeForm } from './close-button.js';
import { isEscapeKey } from './util.js';
import { isFocusIn } from './util.js';
import { isFocusOut } from './util.js';
import { hashtagInputElement } from './form-validity.js';
import { commentInputElement } from './form-validity.js';
import { sendData } from './api.js';
import { hideSlider } from './image-effects.js';
import { renderSuccessMessage } from './load-messages.js';
import { renderErrorMessage } from './load-messages.js';

const imageFormElement = document.querySelector('.img-upload__form');
const loadButtonElement = imageFormElement.querySelector('#upload-file');
const loadFormElement = imageFormElement.querySelector('.img-upload__overlay');
const loadCancelButtonElement = imageFormElement.querySelector('#upload-cancel');
const uploadInputImageElement = imageFormElement.querySelector('.img-upload__label');
let inputFocusVar = 'unfocused' ;

const onFormEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose) && inputFocusVar === 'unfocused') {
    evtClose.preventDefault();
    closeForm(loadFormElement);
  }
};

const closeUserForm = () => {
  document.removeEventListener('keydown', onFormEscKeydown);
  closeForm(loadFormElement);
  hideSlider();
  document.querySelector('.img-upload__form').reset();
};

const loadFail = () => {
  document.removeEventListener('keydown', onFormEscKeydown);
  closeForm(loadFormElement);
};

loadButtonElement.addEventListener('click', () => {
  loadButtonElement.addEventListener('change', () => {
    loadFormElement.classList.remove('hidden');
    document.body.classList.add('modal-open');

    hashtagInputElement.addEventListener('focusin', () => {
      inputFocusVar = isFocusIn();
    });

    commentInputElement.addEventListener('focusin', () => {
      inputFocusVar = isFocusIn();
    });

    hashtagInputElement.addEventListener('focusout', () => {
      inputFocusVar = isFocusOut();
    });

    commentInputElement.addEventListener('focusout', () => {
      inputFocusVar = isFocusOut();
    });

    loadCancelButtonElement.addEventListener('click', () =>{
      closeUserForm();
    });

    document.addEventListener('keydown', onFormEscKeydown);
  });
});

const setImageFormSubmit = (onSuccess, onFail) => {
  imageFormElement.addEventListener('submit', (evtSubmit) => {
    evtSubmit.preventDefault();
    uploadInputImageElement.style.backgroundImage = 'none';
    sendData(
      () => onSuccess(renderSuccessMessage()),
      () => onFail(renderErrorMessage()),
      new FormData(evtSubmit.target),
    );

  });
};

export {setImageFormSubmit, closeUserForm, loadFail};
