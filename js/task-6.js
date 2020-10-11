// const inputValue = document.querySelector('#validation-input');

// inputValue.addEventListener('blur', validation);

// const lengthOfInput = Number(inputValue.dataset.length);

// function validation() {
//   if (inputValue.value.length === lengthOfInput) {
//     inputValue.classList.add('valid');
//     inputValue.classList.remove('invalid');
//   } else if (inputValue.value.length === 0) {
//     inputValue.classList.remove('invalid');
//     inputValue.classList.remove('valid');
//   } else {
//     inputValue.classList.add('invalid');
//     inputValue.classList.remove('valid');
//   }
// }
// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', validation);

// const validLength = Number(inputEl.dataset.length);

const input = document.getElementById('validation-input');

const dataLenght = Number(input.getAttribute('data-length'));

const validation = function () {
  if (input.value.length === dataLenght) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
};
input.addEventListener('blur', validation);
