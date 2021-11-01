
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;


const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const postButton = document.querySelector('.img-upload__submit');

hashtagInput.addEventListener('input', () => {
  const hashtagRe = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
  const hashtagStartRe = /^#/;
  const symbolsRe = /[A-Za-zA-Яа-яЁё0-9]$/;
  const comparingResults = [];

  const hashtagInputLowerCase = hashtagInput.value.toLowerCase();
  const hashtagInputArray = hashtagInputLowerCase.split(' ');

  if (hashtagInput.value.endsWith(' ')) {
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
      postButton.setAttribute('disabled', 'disabled');
    } else {
      postButton.removeAttribute('disabled');
    }

    if (!hashtagStartRe.test(hashtag)) {
      hashtagInput.setCustomValidity('Хэштег должен начинаться с символа #');
    } else if (valueLength < MIN_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хэштег должен содержать еще миним ${MIN_HASHTAG_LENGTH - valueLength} симв.`);
    } else if (!symbolsRe.test(hashtag)) {
      hashtagInput.setCustomValidity('Хэштег должен содержать только цифры, буквы латиницы и кириллицы');
    } else if (valueLength > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity(`Хэштег не может быть длиннее 20 символов. Удалите ${valueLength - MAX_HASHTAG_LENGTH} симв.`);
    } else if (hashtagInputArray.length > MAX_HASHTAG_AMOUNT) {
      hashtagInput.setCustomValidity(`Количество хэштегов не должно быть больше пяти. Удалите ${hashtagInputArray.length - MAX_HASHTAG_AMOUNT} хэштег(а)`);
    } else if (comparingResults.includes('true')) {
      hashtagInput.setCustomValidity('Такой хэштег уже существует');
    } else {
      hashtagInput.setCustomValidity('');
    }

    hashtagInput.reportValidity();
  });
});

commentInput.addEventListener('input', () => {
  if (commentInput.value.length > MAX_COMMENT_LENGTH) {
    postButton.setAttribute('disabled', 'disabled');
  } else {
    postButton.removeAttribute('disabled');
  }
});

export {hashtagInput};
export {commentInput};
