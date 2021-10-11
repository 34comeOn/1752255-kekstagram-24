const getRandomNumber = function (lowNumber, highNumber) {
  if (lowNumber < 0 || highNumber < 0) {
    return 'Значения диапазона могут быть только положительными';
  }
  if (lowNumber > highNumber) {
    return 'Указаны не верные значения аргумента(ов)';
  }

  const rangeArray = [];
  const range = highNumber - lowNumber;
  for (let index = 0; index <= range; index++) {
    rangeArray[index] = index;
  }
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
  const additionalNumber = rangeArray[arrayRandomNumber];
  const randomNumber = lowNumber + additionalNumber;
  return randomNumber;
};

export {getRandomNumber};
