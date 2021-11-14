import { closeForm } from './close-button.js';
import { isEscapeKey } from './util.js';
import { isFocusIn } from './util.js';
import { isFocusOut } from './util.js';
import { hashtagInput } from './form-validity.js';
import { commentInput } from './form-validity.js';
import { sendData } from './api.js';
import { hideSlider } from './image-effects.js';
import { renderSuccessMessage } from './load-messages.js';
import { renderErrorMessage } from './load-messages.js';

const imageForm = document.querySelector('.img-upload__form');
const loadButton = imageForm.querySelector('#upload-file');
const loadForm = imageForm.querySelector('.img-upload__overlay');
const loadCancelButton = imageForm.querySelector('#upload-cancel');
const uploadInputImage = imageForm.querySelector('.img-upload__label');
let inputFocusVar = 'unfocused' ;

const onFormEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose) && inputFocusVar === 'unfocused') {
    evtClose.preventDefault();
    closeForm(loadForm);
  }
};

function closeUserForm () {
  document.removeEventListener('keydown', onFormEscKeydown);
  closeForm(loadForm);
  hideSlider();
  document.querySelector('.img-upload__form').reset();
}

function loadFail () {
  document.removeEventListener('keydown', onFormEscKeydown);
  closeForm(loadForm);
}

loadButton.addEventListener('click', () => {
  loadButton.addEventListener('change', () => {
    loadForm.classList.remove('hidden');
    document.body.classList.add('modal-open');

    hashtagInput.addEventListener('focusin', () => {
      inputFocusVar = isFocusIn();
    });

    commentInput.addEventListener('focusin', () => {
      inputFocusVar = isFocusIn();
    });

    hashtagInput.addEventListener('focusout', () => {
      inputFocusVar = isFocusOut();
    });

    commentInput.addEventListener('focusout', () => {
      inputFocusVar = isFocusOut();
    });

    loadCancelButton.addEventListener('click', () =>{
      closeUserForm();
    });

    document.addEventListener('keydown', onFormEscKeydown);
  });
});

const setImageFormSubmit = (onSuccess, onFail) => {
  imageForm.addEventListener('submit', (evtSubmit) => {
    evtSubmit.preventDefault();
    uploadInputImage.style.backgroundImage = 'none';
    sendData(
      () => onSuccess(renderSuccessMessage()),
      () => onFail(renderErrorMessage()),
      new FormData(evtSubmit.target),
    );

  });
};

export {setImageFormSubmit, closeUserForm, loadFail};
