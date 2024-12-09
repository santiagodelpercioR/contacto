const button = document.getElementById('aboutmeButton');
const content = document.getElementById('aboutmeContent');

button.addEventListener('click', () => {
  content.classList.toggle('hidden'); // Oculta/muestra usando toggle
});