import { setImageIndex } from './slider.js';
import { galleryItems } from './galleryItems.js';

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const btnClose = document.querySelector('.lightbox__button')
const overlay = document.querySelector('.lightbox__overlay');
galleryContainer.addEventListener('click', galleryClicked);
function galleryClicked(array){
	const target = array.target;

	const fullSizeImg = target.dataset.source;
	const nameImg = target.alt;

	openModalWindow(fullSizeImg, nameImg)
}
function openModalWindow(src, alt){
	lightbox.classList.add('is-open');
	lightboxImage.src = src;
	lightboxImage.alt = alt;
	
  	const clickedImg = target.dataset.source;
  	const index = galleryItems.findIndex(item => item.original === clickedImg);
	setImageIndex(index);
}
	
}
function closeModalWindow(){
	lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
}
btnClose.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);
window.onkeydown = function(e){
	if(e.keyCode === 27){
	lightbox.classList.remove('is-open');
	lightboxImage.src = '';
  lightboxImage.alt = '';
	}
}
