const body = document.querySelector('.root');
const page = document.querySelector('.page');
const modal = page.querySelector('.modal');
const buttonOpenModal = page.querySelectorAll('.card');

function openModal() {
  modal.classList.add('modal_opened');
  body.classList.add('root__popup-open');
  document.addEventListener('keydown', closeModalByEsc);

  const container = document.getElementById('myPanzoom');
  const options = {
    click: 'toggleCover' ,
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
  image.addEventListener('click', () => {
    openModal();
  });
});


