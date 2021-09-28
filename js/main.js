// ПЕРВАЯ ФУНКЦИЯ

const getRandomNumber = function (lowNumber, highNumber) {
  // if (lowNumber < 0 || highNumber < 0) {
  //   return console.log('Значения диапазона могут быть только положительными');
  // }
  // if (lowNumber > highNumber) {
  //   return console.log('Указаны не верные значения аргумента(ов)');
  // }

  const rangeArray = [];
  const range = highNumber - lowNumber;
  for (let index = 0; index <= range; index++) {
    rangeArray[index] = index;
  }
  // console.log(rangeArray);
  let summary = highNumber + lowNumber;
  if (summary % 2) {
    summary = summary + 1;
  }
  let arrayRandomNumber = summary / 2;
  if (arrayRandomNumber > rangeArray.length - 1) {
    while (arrayRandomNumber > rangeArray.length - 1) {
      arrayRandomNumber--;
    }
  }
  // console.log(arrayRandomNumber);
  // console.log(rangeArray[arrayRandomNumber]);
  // const additionalNumber = rangeArray[arrayRandomNumber];
  // const randomNumber = lowNumber + additionalNumber;
  // console.log(randomNumber);
};

getRandomNumber(0, 1);

// ВТОРАЯ ФУНКЦИЯ

const textDescription = document.querySelector('.text__description');
const textLength = textDescription.textContent.length;
const MAX_LENGTH = 34;

const getLength = function (stringLength, maximumLength) {
  if (stringLength <= maximumLength) {
    return true;
  }

  return false;
};

getLength(textLength, MAX_LENGTH);
