window.addEventListener('load', start);

var globalNames = ['um', 'dois', 'três', 'quatro'];

function start() {
  preventFormSubmit();
}

function preventFormSubmit() {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit() {}
