const filtersBlockElement = document.querySelector('.img-filters');

const showFilters = () => {
  filtersBlockElement.classList.remove('img-filters--inactive');
};

const hideFilters = () => {
  filtersBlockElement.classList.add('img-filters--inactive');
};

export {showFilters, hideFilters};
