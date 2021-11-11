import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const removeSuccessMessage = () => {
  document.body.removeChild(document.body.querySelector('.success'));
};

const removeErrorMessage = () => {
  document.body.removeChild(document.body.querySelector('.error'));
};

const onSuccessMessageEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose)) {
    evtClose.preventDefault();
    removeSuccessMessage();
  }
};

const onErrorMessageEscKeydown = (evtClose) => {
  if (isEscapeKey(evtClose)) {
    evtClose.preventDefault();
    removeErrorMessage();
  }
};

function closeSuccessMessage () {
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  removeSuccessMessage();
}

function closeErrorMessage () {
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  removeErrorMessage();
}


const renderSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  const successMessageAroundArea = document.querySelector('.success');

  document.body.appendChild(successMessage);

  successMessageAroundArea.addEventListener('click', () => {
    closeSuccessMessage();
  });

  document.addEventListener('keydown', onSuccessMessageEscKeydown);

};


const renderErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  const errorMessageAroundArea = document.querySelector('.error');

  document.body.appendChild(errorMessage);

  errorMessageAroundArea.addEventListener('click', () => {
    closeErrorMessage();
  });

  document.addEventListener('keydown', onErrorMessageEscKeydown);
};


export {renderSuccessMessage, renderErrorMessage};
