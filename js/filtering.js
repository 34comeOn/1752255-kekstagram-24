import { renderPicturesList } from './pictures-preview.js';
import { createRandomPicture } from './util.js';
import { debounce } from './utils/debounce.js';

const filterFormElement = document.querySelector('.img-filters__form');
const COUNT_OF_RANDOM_PICTURES = 10;
const RERENDER_DELAY = 500;
const picturesWithRandomId = [];

const getCommentsAmount = (picture) => (
  picture.comments.length
);

const compareComments = (countA, countB) => {
  const commentCountA = getCommentsAmount(countA);
  const commentCountB = getCommentsAmount(countB);
  return commentCountB - commentCountA;
};

const getRandomPicturesIndexes = (picturesDataArray) => {
  if (COUNT_OF_RANDOM_PICTURES > picturesDataArray.length-1) {
    return null;
  }

  const getPictureRandomIndex = createRandomPicture (0, picturesDataArray.length-1);
  for (let i = 0; i<= COUNT_OF_RANDOM_PICTURES - 1; i++) {
    picturesWithRandomId[i] = getPictureRandomIndex();
  }
  return picturesWithRandomId;
};

const filterRenderedPictures = (arrayOfObjects) => {
  const filteredPictures = arrayOfObjects.slice();

  filterFormElement.addEventListener('click', debounce((evtClick) => {
    filterFormElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evtClick.target.classList.add('img-filters__button--active');

    if (evtClick.target.id.includes('filter-discussed')) {
      const discussedPictures = filteredPictures.sort(compareComments);

      return renderPicturesList(discussedPictures);
    } else if (evtClick.target.id.includes('filter-random')) {
      getRandomPicturesIndexes(filteredPictures);
      const randomPictures = filteredPictures.filter((picture) => picturesWithRandomId.includes(picture.id));

      return  renderPicturesList(randomPictures);
    } else {
      return renderPicturesList(arrayOfObjects);
    }

  },RERENDER_DELAY));
  renderPicturesList(arrayOfObjects);
};

export {filterRenderedPictures};
