// =============== SHOW MENU ===============
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// --- MENU SHOW ---
// Validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// --- MENU HIDDEN ---
// Validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// =============== REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Ketika diklik pada nav__link, show-menu akan hilang
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// =============== SLIDER ===============
var swiper = new Swiper('.home__swiper', {
    effect: 'coverflow', 
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerView: 'auto',
    
    coverflowEffect: { 
        rotate: 0, 
        stretch: 0, 
        depth: 400, 
        modifier: 1, 
        slideShadows : true,
    },
    
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,

    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px     
        320: {       
        slidesPerView: 1.5,
        spaceBetween: 1
    },

    900: {
        slidesPerView: 'auto',
        spaceBetween: 1
    }
}
});

// =============== GSAP ANIMATION ===============
// --- Beranda ---
TweenMax.from('.home__title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__desc', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button', 1, {delay: .7, opacity: 1, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__image', 1, {delay: .9, opacity: 0, y: 300, ease: Expo.easeInOut})
TweenMax.from('.home__soc-med', 1, {delay: .20, opacity: 0, x: 20, ease: Expo.easeInOut})