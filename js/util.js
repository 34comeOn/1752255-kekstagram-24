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
  const alertContainerElement = document.createElement('div');
  alertContainerElement.style.zIndex = '100';
  alertContainerElement.style.position = 'absolute';
  alertContainerElement.style.left = '0';
  alertContainerElement.style.top = '0';
  alertContainerElement.style.right = '0';
  alertContainerElement.style.padding = '10px 3px';
  alertContainerElement.style.fontSize = '30px';
  alertContainerElement.style.textAlign = 'center';
  alertContainerElement.style.backgroundColor = 'red';

  alertContainerElement.textContent = message;

  document.body.append(alertContainerElement);
  hideFilters();
};

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomPicture = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {isEscapeKey, isFocusIn, isFocusOut, showAlert, createRandomPicture};
