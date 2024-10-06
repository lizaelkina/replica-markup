const page = document.querySelector('.page');
const tabs = page.querySelectorAll('.catalog__tab');
const catalogs = page.querySelectorAll('.catalog__cards');

tabs.forEach(tab => {
  tab.addEventListener('click', (event) => {
    tabs.forEach(t => {
      t.classList.remove('button_tab_active');
    });
    event.target.classList.add('button_tab_active');
    catalogs.forEach(catalog => {
      catalog.classList.remove('catalog__cards_active');
    });
    const tab = event.target.getAttribute('data-tab');
    page.querySelector('.catalog__' + tab).classList.add('catalog__cards_active');
  });
});
