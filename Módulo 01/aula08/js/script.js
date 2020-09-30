window.addEventListener('load', start);

function start() {
  console.log('Aula 09');
  console.log('Página totalmente carregada!');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);
}

function countName(event) {
  var count = event.target.value;
  var span = document.querySelector('#nameLenght');
  span.textContent = count.length;
}
