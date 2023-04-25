// new WOW().init();

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElement = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
    hamburger.classList.add('active');
});
closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
});