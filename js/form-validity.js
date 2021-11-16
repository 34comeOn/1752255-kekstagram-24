const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;

const hashtagInputElement = document.querySelector('.text__hashtags');
const commentInputElement = document.querySelector('.text__description');
const postButtonElement = document.querySelector('.img-upload__submit');

hashtagInputElement.addEventListener('input', () => {
  const hashtagRe = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
  const hashtagStartRe = /^#/;
  const symbolsRe = /[A-Za-zA-Яа-яЁё0-9]$/;
  const comparingResults = [];

  const hashtagInputLowerCase = hashtagInputElement.value.toLowerCase();
  const hashtagInputArray = hashtagInputLowerCase.split(' ');

  if (hashtagInputElement.value.endsWith(' ')) {
    hashtagInputArray.pop();
  }

  if (hashtagInputArray.length > 1) {
    const copyHashtagInputArray = hashtagInputArray.slice();

    for (;;) {
      const comparingHashtag = copyHashtagInputArray.shift();

      if (! comparingHashtag) {
        break;
      }

      if (copyHashtagInputArray.find((userHashtag) => userHashtag === comparingHashtag)) {
        comparingResults.push('true');
      }
    }
  }

  const booleanHashtagInputArray = hashtagInputArray.map((hashtagValidity) => {
    hashtagRe.test(hashtagValidity);
  });

  hashtagInputArray.forEach((hashtag) => {
    const valueLength = hashtag.length;

    if (!hashtagRe.test(hashtag) || hashtagInputArray.length > MAX_HASHTAG_AMOUNT || booleanHashtagInputArray.includes(false) || comparingResults.includes('true')) {
      postButtonElement.setAttribute('disabled', 'disabled');
    } else {
      postButtonElement.removeAttribute('disabled');
    }

    if (!hashtagStartRe.test(hashtag)) {
      hashtagInputElement.setCustomValidity('Хэштег должен начинаться с символа #');
    } else if (valueLength < MIN_HASHTAG_LENGTH) {
      hashtagInputElement.setCustomValidity(`Хэштег должен содержать еще миним ${MIN_HASHTAG_LENGTH - valueLength} симв.`);
    } else if (!symbolsRe.test(hashtag)) {
      hashtagInputElement.setCustomValidity('Хэштег должен содержать только цифры, буквы латиницы и кириллицы');
    } else if (valueLength > MAX_HASHTAG_LENGTH) {
      hashtagInputElement.setCustomValidity(`Хэштег не может быть длиннее 20 символов. Удалите ${valueLength - MAX_HASHTAG_LENGTH} симв.`);
    } else if (hashtagInputArray.length > MAX_HASHTAG_AMOUNT) {
      hashtagInputElement.setCustomValidity(`Количество хэштегов не должно быть больше пяти. Удалите ${hashtagInputArray.length - MAX_HASHTAG_AMOUNT} хэштег(а)`);
    } else if (comparingResults.includes('true')) {
      hashtagInputElement.setCustomValidity('Такой хэштег уже существует');
    } else {
      hashtagInputElement.setCustomValidity('');
    }

    hashtagInputElement.reportValidity();
  });
});

commentInputElement.addEventListener('input', () => {
  if (commentInputElement.value.length > MAX_COMMENT_LENGTH) {
    postButtonElement.setAttribute('disabled', 'disabled');
  } else {
    postButtonElement.removeAttribute('disabled');
  }
});

export {hashtagInputElement, commentInputElement};
