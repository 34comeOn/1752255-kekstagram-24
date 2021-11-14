const filterForm = document.querySelector('.img-filters__form');
const COUNT_OF_RANDOM_PICTURES = 10;

const getCommentsAmount = (picture) => {
  console.log(picture.comments.length);
  return picture.comments.length;
}

const compareComments = (countA, countB) => {
  const commentCountA = getCommentsAmount(countA);
  const commentCountB = getCommentsAmount(countB);
  return commentCountB - commentCountA;
}

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
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}



const sortRenderedPictures = (array) => {
  filterForm.addEventListener('click', (evtClick) => {
    if (evtClick.target.id.includes('filter-discussed')) {
      array
        .slice()
        // .sort(compareComments)
        .slice(0, COUNT_OF_RANDOM_PICTURES)

      return array;
    }
      else if (evtClick.target.id.includes('filter-random')) {
        const generatePhotoId = createRandomIdFromRangeGenerator(0, array.length - 1);

        // array
        //   .slice()

        // for(let i =0; i <= 10; i++) {

        // }



      return array;
      }

  })

  return array;
};

export {sortRenderedPictures};
