const menuBtn = document.querySelector('.js_menu-btn');
const menu = document.querySelector('.js_menu');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('open-menu');
  document.body.classList.toggle('open-menu');
})