'use strict';

/* Configure the transition of the navigation bar on mobile |
 Configura la transición de la barra de navegación en móviles */
const nav = document.querySelector('.header__nav'),
      closeIcon = nav.querySelector('.nav__icon'),
      barsIcon = document.querySelector('.header__icon');

barsIcon.addEventListener('click', function() {
    nav.classList.add('header__nav--showed');
    
    document.body.style.overflow = 'hidden';
});

closeIcon.addEventListener('click', function() {
    nav.classList.remove('header__nav--showed');
    
    setTimeout(() => document.body.removeAttribute('style'), 485);
});



/* Always set the current year in the card information |
 Siempre establece el año actual en la información de la tarjeta */
document.querySelector('#year-js').innerText = new Date().getFullYear();


/* Randomly sets a profile url to the anchor in the footer |
 Establece al azar una URL de perfil al enlace en el pie de página */
const footerLink = document.querySelector('.footer__info__link'),
    profiles = ['https://github.com/javiervaleriano',
        'https://codepen.io/javiervaleriano',
        'https://twitter.com/javaleriano2',
        'https://devchallenges.io/portfolio/javiervaleriano',
        'https://instagram.com/javiervalerianoz'];

footerLink.href = profiles[Math.floor(Math.random() * profiles.length)];