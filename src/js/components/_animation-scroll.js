import ScrollReveal from 'scrollreveal';

window.sr = ScrollReveal();

var scrollOptions = {
  scale: 1,
  duration: 1500,
  distance: '10vh',
  easing: 'ease',
  viewFactor: -0.1,
  opacity: 0
};

/*
*Main page
*/
sr.reveal('.sr-up', scrollOptions);
