const lightboxImg = document.querySelector('.lightbox__image');
const lightbox = document.querySelector('.js-lightbox');
const cleanSrc = document.querySelector('.lightbox__image');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

export function openModal(evt) { 
   evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
    }

  window.addEventListener('keydown', onEscKeyPress);
  lightbox.classList.add('is-open');
  lightboxImg.src = evt.target.dataset.source;
  lightboxImg.alt = evt.target.alt;
};

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
   closeModal();
  }
}

export function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  lightbox.classList.remove('is-open');
  cleanSrc.removeAttribute('src');
}

 lightboxOverlay.addEventListener('click', closeModalOnOverlay);

function closeModalOnOverlay() {
  closeModal();
}