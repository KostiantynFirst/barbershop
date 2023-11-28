(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal-backdrop]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.forEach(modal => {
    modal.addEventListener("click", toggleModal);
  })

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");

  }
})();