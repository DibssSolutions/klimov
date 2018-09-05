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
sr.reveal('.main .sr-up', scrollOptions);

/*
*About page
*/
sr.reveal('.about .sr-up', scrollOptions);

/*
*Project page
*/

sr.reveal('.project .sr-up', {
  scale: 1,
  duration: 1500,
  distance: '10vh',
  easing: 'ease',
  viewFactor: -0.1,
  opacity: 0
});

/*
*Filter page
*/
sr.reveal('.filter__item', {
  scale: 1,
  duration: 1500,
  distance: '10vh',
  easing: 'ease',
  viewFactor: -0.1,
  opacity: 0
});

