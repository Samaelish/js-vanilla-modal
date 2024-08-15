const openModalBtnElement = document.querySelector('#openModal')
const modalElement = document.querySelector('.modal')
const modalContentElement = modalElement.querySelector('.modal__content')
const modalOverlayElement = modalElement.querySelector('.modal__overlay')


openModalBtnElement.addEventListener('click', () => {
  modalElement.classList.add('open')
})

modalOverlayElement.addEventListener('click', () => {
  modalElement.classList.remove('open')
})
