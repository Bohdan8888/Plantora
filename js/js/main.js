const order = document.querySelector('.span-button-shop-now');
const modal = document.querySelector('.modal-menu');
const closeButton = document.querySelector('.button-close-modal');

order.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

function openModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
}
