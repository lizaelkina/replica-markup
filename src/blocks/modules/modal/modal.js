const body = document.querySelector('.root');
const page = document.querySelector('.page');
const modal = page.querySelector('.modal');
const modalImage = page.querySelector('.modal__img');
const buttonOpenModal = page.querySelectorAll('.card__overlay');
const buttonCloseModal = modal.querySelector('.modal__close');

function openModal(event) {
  let img = event.target.querySelector('.card__image');
  modalImage.src = img.getAttribute('data-big-src');
  modalImage.alt = img.alt;

  modal.classList.add('modal_opened');
  body.classList.add('root__popup-open');
  document.addEventListener('keydown', closeModalByEsc);

  const container = document.getElementById('myPanzoom');
  const options = {
    click: 'toggleCover',
  };
  new Panzoom(container, options);
}

function closeModal() {
  modal.classList.remove('modal_opened');
  body.classList.remove('root__popup-open');
  document.removeEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(event) {
  if (event.key === 'Escape') {
    const openedModal = page.querySelector('.modal_opened');
    closeModal(openedModal);
  }
}

buttonOpenModal.forEach(image => {
  image.addEventListener('click', (event) => {
    openModal(event);
  });
});

buttonCloseModal.addEventListener('click', closeModal);

modal.addEventListener('mousedown', event => {
  if (event.target === modal) {
    closeModal();
  }
});
