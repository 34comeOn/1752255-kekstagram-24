import { isEscapeKey } from './util.js';

const successMessageTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplateElement = document.querySelector('#error').content.querySelector('.error');

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

const closeSuccessMessage = () => {
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  removeSuccessMessage();
};

const closeErrorMessage = () => {
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  removeErrorMessage();
};

const renderSuccessMessage = () => {
  const successMessage = successMessageTemplateElement.cloneNode(true);
  document.body.appendChild(successMessage);
  const successMessageAroundAreaElement = document.querySelector('.success');

  successMessageAroundAreaElement.addEventListener('click', () => {
    closeSuccessMessage();
  });

  document.addEventListener('keydown', onSuccessMessageEscKeydown);

};

const renderErrorMessage = () => {
  const errorMessage = errorMessageTemplateElement.cloneNode(true);
  document.body.appendChild(errorMessage);
  const errorMessageAroundAreaElement = document.querySelector('.error');

  errorMessageAroundAreaElement.addEventListener('click', () => {
    closeErrorMessage();
  });

  document.addEventListener('keydown', onErrorMessageEscKeydown);
};

export {renderSuccessMessage, renderErrorMessage};
