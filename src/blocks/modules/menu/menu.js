const body = document.querySelector('.root');
const page = document.querySelector('.page');
const clickForHeader = page.querySelector('.header__container');
const menu = page.querySelector('.menu');
const buttonOpenMenu = page.querySelector('.button__open-menu');
const buttonCloseMenu = menu.querySelector('.button__close-menu');
const anchorMenu = menu.querySelectorAll('.menu__link');

function openMenu() {
  menu.classList.add('menu_opened');
  body.classList.add('root__menu-open');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  body.classList.remove('root__menu-open');
  document.removeEventListener('keydown', closeMenuByEsc);
}

function closeMenuByEsc(event) {
  if (event.key === 'Escape') {
    menu.querySelector('.menu_opened');
    closeMenu();
  }
}

buttonOpenMenu.addEventListener('click', openMenu);

buttonCloseMenu.addEventListener('click', closeMenu);

anchorMenu.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

clickForHeader.addEventListener('click', closeMenu);
