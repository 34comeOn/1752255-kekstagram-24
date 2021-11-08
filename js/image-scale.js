
const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImageContainer = document.querySelector('.img-upload__preview');
const scaleInputData = document.querySelector('.scale__control--hidden');

const changeImageScale = () => {
  scaleInputData.value = previewImageContainer.children[0].style.transform = `scale(${scaleValue.value/100})`;
};

scaleButtonBigger.addEventListener('click', () => {
  scaleValue.value += 25;
  changeImageScale();
});

scaleButtonSmaller.addEventListener('click', () => {
  scaleValue.value -= 25;
  changeImageScale();
});

scaleValue.addEventListener('input', () => {
  changeImageScale();
});

export {previewImageContainer};
