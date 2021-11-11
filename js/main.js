import './random-number.js';
import './content-length.js';
import './pictures-preview.js';
import './open-modal.js';
import './load-form.js';
import './form-validity.js';
import './comments-count.js';
import './image-scale.js';
import './image-filters.js';
import './api.js';

import { renderPicturesList } from './pictures-preview.js';
import { setImageFormSubmit } from './load-form.js';
import { createData } from './api.js';
import { showAlert } from './util.js';
import { closeUserForm } from './load-form.js';
import { loadFail } from './load-form.js';


createData((pictures) => {
  renderPicturesList(pictures);
},
() => showAlert('Что-то пошло не так. Попробуйте перезагрузить страницу.'),
);

setImageFormSubmit(closeUserForm, loadFail);
