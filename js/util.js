const isEscapeKey = (evt) => (
  evt.key === 'Escape'
);

const isFocusIn = (evtInFocus) => {
  evtInFocus = 'focused';
  return evtInFocus;
};

const isFocusOut = (evtOutFocus) => {
  evtOutFocus = 'unfocused';
  return evtOutFocus;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

export {isEscapeKey, isFocusIn, isFocusOut, showAlert};
