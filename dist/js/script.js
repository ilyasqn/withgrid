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

const percent = document.querySelectorAll('.percent__block__percent'),
    lines = document.querySelectorAll('.percent__block__line span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// var tempScrollTop = 0;
// const pageUp = document.querySelector('.pageup');
//     $(window).scroll(function() {
//         var currentScrollTop = $(this).scrollTop();
//         if ($(this).scrollTop() > 1600) {
//             $ (pageUp.classList.add('active'));
//         } else {
//             $(pageUp.classList.remove('active'));
//         }
//         tempScrollTop = currentScrollTop;
//     });
// $("a[href^='#']").click(function(){
//     const _href = $(this).attr("href");
//     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//     return false;
// });