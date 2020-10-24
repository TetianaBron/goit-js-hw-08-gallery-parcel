import htmlGallery from './js/create-html';
import {
  openModal,
  closeModal
} from './js/open-close-modal'


const gallery = document.querySelector('.js-gallery');
const container = document.querySelector('.js-gallery');
const lightboxButton = document.querySelector('button[data-action="close-lightbox"]');



gallery.insertAdjacentHTML('afterbegin', htmlGallery());

container.addEventListener('click', openModal);

lightboxButton.addEventListener('click', closeModal);



