const filtersBlock = document.querySelector('.img-filters');

const showFilters = () => {
  filtersBlock.classList.remove('img-filters--inactive');
};

const hideFilters = () => {
  filtersBlock.classList.add('img-filters--inactive');
};

export {showFilters, hideFilters};
