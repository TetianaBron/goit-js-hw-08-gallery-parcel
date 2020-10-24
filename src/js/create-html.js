import items from './gallery-items';

export default function htmlGallery() {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class='gallery__item'><a class="gallery__link" href="${original}"><img class='gallery__image' src="${preview}" data-source="${original}" alt="${description}"></li>`,
    )
    .join('');
};