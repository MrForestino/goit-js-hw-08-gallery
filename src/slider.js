import { galleryItems } from './galleryItems.js';


const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const lightboxImage = document.querySelector('.lightbox__image');

let imgPos = 0;

export function setImageIndex(index) {
  imgPos = index;
  updateModal();
}

function updateModal(){
	const {original, description} = galleryItems[imgPos];
	lightboxImage.src = original;
	lightboxImage.alt = description;
}

const slider = () => {
	if (imgPos < 0){
		imgPos = galleryItems.length - 1;
	} else if (imgPos > galleryItems.length - 1){
		imgPos = 0
	}
	updateModal();
};

arrowLeft.addEventListener('click', slideActive => {
	slideActive.stopPropagation()
	imgPos--
	slider()
})
arrowRight.addEventListener('click', slideActive => {
	slideActive.stopPropagation()
	imgPos++
	slider()
})
