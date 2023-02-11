(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalBackdrop: document.querySelector('[data-modal]'),
    submitButton: document.querySelector('.button-modal-form'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modalBackdrop.addEventListener('click', onEscPress);
  refs.submitButton.addEventListener('click', onButtonSubmit);

  function toggleModal() {
    refs.modalBackdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
    window.addEventListener('keydown', onEscPress);
  }

  function onEscPress(event) {
    if (event.code === 'Escape') {
      refs.modalBackdrop.classList.toggle('is-hidden');
      window.removeEventListener('keydown', onEscPress);
      document.body.classList.toggle('no-scroll');
    }

    if (event.target === event.currentTarget) {
      refs.modalBackdrop.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  }

  function onButtonSubmit(event) {
    event.preventDefault();
    refs.modalBackdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();