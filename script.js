// script.js

// ✅ Этот код подождёт, пока страница полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('myButton');

  // ✅ Проверяем, что кнопка действительно есть на странице
  if (btn) {
    btn.addEventListener('click', () => {
      btn.textContent = 'Збс!';
      btn.style.background = '#112b38ff';
      alert('Кнопка нажата — это уже заебись! 💪');
    });
  }
});