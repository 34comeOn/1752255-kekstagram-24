import './pictures-preview.js';
import './open-modal.js';
import './load-form.js';
import './form-validity.js';
import './comments-count.js';
import './image-scale.js';
import './image-effects.js';
import './api.js';
import './filters-buttons.js';
import './filtering.js';
import './utils/debounce.js';

import { filterRenderedPictures } from './filtering.js';
import { setImageFormSubmit } from './load-form.js';
import { createData } from './api.js';
import { showAlert } from './util.js';
import { closeUserForm } from './load-form.js';
import { loadFail } from './load-form.js';

createData((pictures) => {
  filterRenderedPictures(pictures);
},
() => showAlert('Что-то пошло не так. Попробуйте перезагрузить страницу.'),
);

setImageFormSubmit(closeUserForm, loadFail);
