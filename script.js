// script.js
const btn = document.getElementById('myButton');

btn.addEventListener('click', () => {
  btn.textContent = 'Збс!';
  btn.style.background = '#529abeff';
  alert('Кнопка нажата — это уже заебись!');
});
