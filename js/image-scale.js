const scaleButtonSmallerElement = document.querySelector('.scale__control--smaller');
const scaleButtonBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewImageContainerElement = document.querySelector('.img-upload__preview');
const scaleInputDataElement = document.querySelector('.scale__control--hidden');
const SCALE_STEP = 25;
const SCALE_COEFFICIENT = 100;

const changeImageScale = () => {
  scaleInputDataElement.value = previewImageContainerElement.children[0].style.transform = `scale(${scaleValueElement.value/SCALE_COEFFICIENT})`;
};

scaleButtonBiggerElement.addEventListener('click', () => {
  scaleValueElement.value += SCALE_STEP;
  changeImageScale();
});

scaleButtonSmallerElement.addEventListener('click', () => {
  scaleValueElement.value -= SCALE_STEP;
  changeImageScale();
});

scaleValueElement.addEventListener('input', () => {
  changeImageScale();
});

export {previewImageContainerElement};
