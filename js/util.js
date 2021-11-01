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

export {isEscapeKey};
export {isFocusIn};
export {isFocusOut};
