import { galleryItems } from './gallery-items.js';

// отримала силку на ul
const galleryList = document.querySelector('.gallery'); 
// визиваємо функцію створення розмітки
const galleryMarkup = createGalleryMarkup(galleryItems);
// вставляємо розмітку в HTML
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
      .join('');
}

 //library
new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
        captionDelay: 250,
});