import images from './gallery-items.js';


function createGallery(images) {
  return images.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    
      <img
        class="gallery__image"
        // src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    }).join('');
    }
  
    
  const mainGallery = document.querySelector('.js-gallery');
  const imageMarkup =   createGallery(images);
  mainGallery.insertAdjacentHTML('beforeend', imageMarkup);

  const openModal = document.querySelector('.js-lightbox')

  
  mainGallery.addEventListener('click', onImageClick)

  function onImageClick (event) {
    const galleryTarget = event.target.classList.contains('gallery__item')
    if (!galleryTarget){
 
 openModal.classList.add('is-open');

  }};

  const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

closeModalBtn.addEventListener('click', onCloseModalBtn)
function onCloseModalBtn () {
  openModal.classList.remove('is-open');
}

// const changeScrImage = document.querySelector('.lightbox__image')
// console.log(changeScrImage)

//   function changeScrImageFn (images) {
// images.map.forEach(image => {
//   changeScrImage.scr = "${images.original}";
// });
//   }






