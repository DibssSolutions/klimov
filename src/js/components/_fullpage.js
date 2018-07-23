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
var fullpage = require('../libs/jquery.fullpage.min.js');

var fp = document.getElementById('fullpage');

$(document).ready(function() {
  if (fp !== null) {

    // ===== PAGINATI0N =====
    var pg = $('.pagination');
    pg.text('Scroll');
    $('.footer').addClass('fixed');
    new IScroll('.section');
    $('#fullpage').fullpage({
      responsiveWidth: 10,
      responsiveHeight: 10,
      scrollingSpeed: 1000,
      sectionSelector: '.section',
	  scrollOverflow: true, 

      onLeave: function(origin, destination, direction) {
        var loadedSection = this;
        console.log(origin);
        console.log(destination);
        console.log(direction);
		
        if (destination === 1) {
          pg.text('Scroll');
          $('.js-footer-hidden').addClass('is-hidden');
          $('.js-footer-visible').removeClass('is-hidden');
        } else if (destination === $('.section').length) {
          $('.js-footer-hidden').removeClass('is-hidden');
          $('.js-footer-visible').addClass('is-hidden');
         
          pg.text('Up ↑');
        } else {
          $('.js-footer-hidden').addClass('is-hidden');
          $('.js-footer-visible').removeClass('is-hidden');
          if (destination < 9) {
            pg.text('0' + destination + '/');
          } else {
            pg.text(destination + '/');
          }
        }

        
      }
    });
  }
});
