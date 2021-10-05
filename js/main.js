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

getRandomNumber(0, 1);

const textDescription = document.querySelector('.text__description');
const textLength = textDescription.textContent.length;
const MAX_LENGTH = 34;

const getLength = function (stringLength, maximumLength) {
  return stringLength <= maximumLength;
};

getLength(textLength, MAX_LENGTH);

const OBJECTS_AMOUNT = 25;
const descriptionsId = [];
const DESCRIPTIONS = ['Как вам?', 'Моя гордость!', 'Хочу поделиться', 'Вот', 'Завидуйте!', 'Почему бы и нет?', 'Мне так нравится', 'А если вам не нравится, вы просто мне завидуете!', 'Учись, студент!', 'Мне не важно, что вы думаете!', 'Кто сможет лучше?', 'Опа!', 'Ничего лучше я не придумал('];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Вова', 'Пётр', 'Женя', 'Зина', 'Катя', 'Айгюль'];
const arrayOfObjects = [];

for (let index1 = 0; index1 <= OBJECTS_AMOUNT - 1; index1 ++) {
  descriptionsId[index1] = index1 + 1;
}

for (let index2 = 0; index2 <= OBJECTS_AMOUNT - 1; index2++) {
  const createComments = () =>
    ({
      id: _.random(2, 8) * _.random(3, 9) * _.random(11, 22) * _.random(41, 58) * _.random(2, 8),
      avatar: `img/avatar-${_.random(1, 6)}.svg`,
      message: MESSAGES[_.random(0, MESSAGES.length - 1)],
      name: NAMES[_.random(0, NAMES.length - 1)],
    });

  const commentsArray = Array.from({ length: _.random(1, 10) }, createComments);
  const generateObjects = () =>
    ({
      id: descriptionsId[index2],
      url: `photos/${descriptionsId[index2]}.jpg`,
      description: DESCRIPTIONS[_.random(0, DESCRIPTIONS.length - 1)],
      likes: _.random(15, 200),
      comments: commentsArray,
    });

  arrayOfObjects[index2] = generateObjects();
}
