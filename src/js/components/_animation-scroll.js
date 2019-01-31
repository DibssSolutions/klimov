import ScrollReveal from 'scrollreveal';
import { DOC } from '../_constants';

window.sr = ScrollReveal();
DOC.ready(() => { window.scrollTo(window.scrollX, window.scrollY + 3); });
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
