const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.close'),
    logo = document.querySelector('.header-logo__link'),
    html = document.querySelector('html'),
    menuBck = document.querySelector('.menu__background');


function toggle() {
    menu.classList.toggle('menu--active');
    logo.classList.toggle('move');
    hamburger.classList.toggle('rotate')
    html.style.overflowY === 'scroll' ? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll';
}

hamburger.addEventListener('click', toggle);
menuBck.addEventListener('click', toggle);


// SLIDER

let currentPage = 1;
let carouselTranslate = 0;
const btn_left = document.querySelector('#button-left');
const btn_right = document.querySelector('#button-right');
const carousel = document.querySelector('#carousel');
const item_left = document.querySelector('#item-left');
const item_right = document.querySelector('#item-right');

const sizeBlock = () => {
    if (document.documentElement.clientWidth >= 1280) {
        carouselTranslate = 360;
    } else if (document.documentElement.clientWidth <= 767) {
        carouselTranslate = 290;
    } else {
        carouselTranslate = 310;
    }
}

const resizeBlock = () => {
    sizeBlock();
    carousel.style.transform = `translateX(-${currentPage * carouselTranslate - carouselTranslate}px)`;
}


const moveRight = () => {
    if (currentPage === 6) currentPage = 0;
    carousel.style.transform = `translateX(-${currentPage * carouselTranslate}px)`;
    currentPage += 1;

    console.log(currentPage);

}
const moveLeft = () => {
    if (currentPage === 1) currentPage = 7;
    currentPage -= 1;
    carousel.style.transform = `translateX(-${currentPage * carouselTranslate - carouselTranslate}px)`;

    console.log(currentPage);
}

sizeBlock();
btn_left.addEventListener('click', moveLeft);
btn_right.addEventListener('click', moveRight);
window.addEventListener('resize', resizeBlock)