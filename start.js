const start = document.getElementById('start');
const quit = document.getElementById('quit');

start.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });

quit.addEventListener('click', () => {
    window.close();
});