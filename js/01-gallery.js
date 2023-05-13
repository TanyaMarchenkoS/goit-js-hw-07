import { galleryItems } from './gallery-items.js';
// отримала силку на ul
const galleryList = document.querySelector('.gallery'); 
// визиваємо функцію створення розмітки
const galleryMarkup = createGalleryMarkup(galleryItems);
// вставляємо розмітку в HTML
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
// добавляємо слухача клік на галерею
galleryList.addEventListener('click', onGalleryListClick);

// функція створення розмітки галереї <li><a><img>></a></li>
function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
      .join('');
}
// функція клік на галереї
function onGalleryListClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const selectedImg = evt.target.dataset.source;

     //library
  const instance = basicLightbox.create(
    `<img src="${selectedImg}" width="800" height="600"/>`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeByEsc);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeByEsc);
      },
    }
  );

  instance.show();
// функція закриття модалки кнопкою Escape
  function closeByEsc({ code }) {
    if (code === 'Escape') {
      instance.close();
    }
  }
}
 



