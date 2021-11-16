import { previewImageContainerElement } from './image-scale.js';
import '../nouislider/nouislider.js';

const filtersContainerElement = document.querySelector('.effects__list');
const sliderElementElement = document.querySelector('.effect-level__slider');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const effectInputDataElement = document.querySelector('.effect-level__data');
const uploadImage = previewImageContainerElement.children[0];
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

const hideSlider = () => {
  sliderElementElement.classList.add('visually-hidden');
};

uploadImage.classList.add('effects__preview--none');
sliderElementElement.classList.add('visually-hidden');

noUiSlider.create(sliderElementElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
});

filtersContainerElement.addEventListener('change', (evtChooseFilter) => {
  uploadImage.classList.remove(uploadImage.classList);
  uploadImage.classList.add(`effects__preview--${evtChooseFilter.target.id.split('-')[1]}`);

  if (uploadImage.classList[0].includes('none')) {
    sliderElementElement.classList.add('visually-hidden');
  } else {
    sliderElementElement.classList.remove('visually-hidden');
  }

  if (evtChooseFilter.target.id.includes('chrome')) {
    sliderElementElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    });
    sliderElementElement.noUiSlider.set(1);
  }
  else if (evtChooseFilter.target.id.includes('sepia')) {
    sliderElementElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElementElement.noUiSlider.set(1);

  } else if (evtChooseFilter.target.id.includes('marvin')) {
    sliderElementElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElementElement.noUiSlider.set(100);

  } else if (evtChooseFilter.target.id.includes('phobos')) {
    sliderElementElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElementElement.noUiSlider.set(3);

  } else if (evtChooseFilter.target.id.includes('heat')) {
    sliderElementElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElementElement.noUiSlider.set(3);

  } else {
    sliderElementElement.noUiSlider.set(0);
  }
});

sliderElementElement.noUiSlider.on('update', (_, handle, unencoded) => {
  if (uploadImage.classList[0].includes('phobos')) {
    uploadImage.style.filter = `${getStyleName()}(${unencoded[handle]}px)`;
  } else if (uploadImage.classList[0].includes('marvin')) {
    uploadImage.style.filter = `${getStyleName()}(${unencoded[handle]}%)`;
  } else if (uploadImage.classList[0].includes('none')) {
    uploadImage.style.removeProperty('filter');
  } else {
    uploadImage.style.filter = `${getStyleName()}(${unencoded[handle]})`;
  }
  effectLevelValueElement.value = uploadImage.style.filter;
  effectInputDataElement.value = uploadImage.style.filter;
});

export {hideSlider};
