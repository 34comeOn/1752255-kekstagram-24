import { closeForm } from './close-button.js';
import { isEscapeKey } from './util.js';
import { isFocusIn } from './util.js';
import { isFocusOut } from './util.js';
import { hashtagInput } from './form-validity.js';
import { commentInput } from './form-validity.js';

const loadButton = document.querySelector('#upload-file');
const loadForm = document.querySelector('.img-upload__overlay');
const loadCancelButton = document.querySelector('#upload-cancel');
let inputFocusVar = 'unfocused' ;

const onFormEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose) && inputFocusVar === 'unfocused') {
    evtClose.preventDefault();
    closeForm(loadForm);
  }
};

function closeUserForm () {
  document.removeEventListener('keydown', onFormEscKeydown);
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
      closeForm(loadForm);
      closeUserForm();
    });

    document.addEventListener('keydown', onFormEscKeydown);
  });
});
