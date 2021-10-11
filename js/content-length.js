import {getLength} from './string-meter.js';

const textDescription = document.querySelector('.text__description');
const textLength = textDescription.textContent.length;
const MAX_LENGTH = 34;

const descriptionLength = getLength(textLength, MAX_LENGTH);

export {descriptionLength};
