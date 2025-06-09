const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const cancel = document.querySelector('.x-svg');

hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.add('open');
})
cancel.addEventListener('click', () => {
  sidebar.classList.remove('open');
})