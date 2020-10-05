window.addEventListener('load', start);

var globalNames = ['um', 'dois', 'três', 'quatro'];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
  }
  function handleTyping(event) {
    if (event.key === 'Enter') {
      // console.log(event.target.value);-> pega o que foi escrito antes de apertar o 'enter'
      insertName(event.target.value);
    }
  }
  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();
}
