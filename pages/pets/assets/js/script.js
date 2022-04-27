const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.close'),
    html = document.querySelector('html'),
    menuBck = document.querySelector('.menu__background');


function toggle() {
    menu.classList.toggle('menu--active');
    hamburger.classList.toggle('rotate')
    html.style.overflowY === 'scroll' ? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll';
}

hamburger.addEventListener('click', toggle);
menuBck.addEventListener('click', toggle);