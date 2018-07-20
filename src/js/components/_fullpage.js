// import DoSlide from 'do-slide';

// var ds = new DoSlide('.ds-container', {
//   //   transitionInClass    : 'slide-in',
//   //   transitionOutClass   : 'slide-out',
//   translate3d: false,
//   duration: 1,
//   minInterval: 250
// });

// ds.onChanged(function(curIndex, lastIndex, cur, last) {
//   // ==== CHANGE FOOTER LINK ====
//   if (curIndex === $('.content').length - 1) {
//     $('.js-footer-hidden').removeClass('is-hidden');
//     $('.js-footer-visible').addClass('is-hidden');
//   } else {
//     $('.js-footer-hidden').addClass('is-hidden');
//     $('.js-footer-visible').removeClass('is-hidden');
//   }

//   // ===== PAGINATION =====
//   var pg = $('.pagination');
  
//   if (curIndex === 0) {
//     pg.text('Scroll');
//   } else if (curIndex === $('.content').length - 1) {
//     pg.text('Up ↑');
//   } else {
//     if (curIndex < 9) {
//       pg.text('0' + curIndex + '/');
//     } else {
//       pg.text(curIndex + '/');
//     }
//   }
// });

import IScroll from 'iscroll';
window.IScroll = IScroll;
var fullpage = require ('../libs/jquery.fullpage.min.js');

new IScroll('.section');
$(document).ready(function() {
  $('#fullpage').fullpage({
  	responsiveWidth: 0,
  	responsiveHeight: 0,
  	sectionSelector: '.section',
  	scrollOverflow: true
  });

});

