import { hideFilters } from './filters-buttons.js';

const isEscapeKey = (evt) => (
  evt.key === 'Escape'
);

const isFocusIn = (evtInFocus) => {
  evtInFocus = 'focused';
  return evtInFocus;
};

const isFocusOut = (evtOutFocus) => {
  evtOutFocus = 'unfocused';
  return evtOutFocus;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
  hideFilters();
};

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomPicture (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {isEscapeKey, isFocusIn, isFocusOut, showAlert, createRandomPicture};
