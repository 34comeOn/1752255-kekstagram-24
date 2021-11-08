import { previewImageContainer } from './image-scale.js';
import '../nouislider/nouislider.js';

const filtersContainer = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectInputData = document.querySelector('.effect-level__data');
const uploadImage = previewImageContainer.children[0];
let prefix;

const getStyleName = () => {
  if (uploadImage.classList[0].includes('chrome')) {
    prefix = 'grayscale';
  } else if (uploadImage.classList[0].includes('sepia')) {
    prefix = 'sepia';
  } else if (uploadImage.classList[0].includes('marvin')) {
    prefix = 'invert';
  } else if (uploadImage.classList[0].includes('phobos')) {
    prefix = 'blur';
  } else if (uploadImage.classList[0].includes('heat')) {
    prefix = 'brightness';
  } else {
    prefix = 'none';
  }

  return prefix;
};

uploadImage.classList.add('effects__preview--none');
sliderElement.classList.add('visually-hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
});

filtersContainer.addEventListener('change', (evtChooseFilter) => {
  uploadImage.classList.remove(uploadImage.classList);
  uploadImage.classList.add(`effects__preview--${evtChooseFilter.target.id.split('-')[1]}`);

  if (uploadImage.classList[0].includes('none')) {
    sliderElement.classList.add('visually-hidden');
  } else {
    sliderElement.classList.remove('visually-hidden');
  }

  if (evtChooseFilter.target.id.includes('chrome')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    });
    sliderElement.noUiSlider.set(1);
  }
  else if (evtChooseFilter.target.id.includes('sepia')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.set(1);

  } else if (evtChooseFilter.target.id.includes('marvin')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElement.noUiSlider.set(100);

  } else if (evtChooseFilter.target.id.includes('phobos')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.set(3);

  } else if (evtChooseFilter.target.id.includes('heat')) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.set(3);

  } else {
    sliderElement.noUiSlider.set(0);
  }
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  if (uploadImage.classList[0].includes('phobos')) {
    uploadImage.style.filter = `${getStyleName()}(${unencoded[handle]}px)`;
  } else if (uploadImage.classList[0].includes('marvin')) {
    uploadImage.style.filter = `${getStyleName()}(${unencoded[handle]}%)`;
  } else if (uploadImage.classList[0].includes('none')) {
    uploadImage.style.removeProperty('filter');
  } else {
    uploadImage.style.filter = `${getStyleName()}(${unencoded[handle]})`;
  }
  effectLevelValue.value = uploadImage.style.filter;
  effectInputData.value = uploadImage.style.filter;
});
