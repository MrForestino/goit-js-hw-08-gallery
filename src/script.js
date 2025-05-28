import { galleryItems } from './galleryItems.js';
const imageContainer = document.querySelector('.gallery');
function createImageCardsMarkup(array){
	imageContainer.innerHTML = galleryItems.map( array =>{
		return `
		<li class="gallery__item">
        <div class="gallery__link">
          <img
            class="gallery__image"
            src="${array.preview}"
            data-source="${array.original}"
            alt="${array.description}"/>
        </div>
      </li>
		`;
	}).join('');
};
createImageCardsMarkup(galleryItems);
// console.log("imageContainer:", imageContainer)