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

// $(function() {
//   $('#fullpage').fullpage({
//     sectionSelector: '.section',
//     scrollOverflow: true
//   });
// });

// IScroll = require('../libs/isScroll');
// import IScroll from '../libs/isScroll';
import 'jquery';
import '../libs/slimscroll';
import '../libs/fullpage';

// // import IScroll from '../libs/isScroll';
// // require ('../libs/isScroll');

// import fullpage from '../libs/fullpage';

// // var scr = new IScroll('.section');

// $(document).ready(function() {
//   $('#fullpage').fullpage({scrollOverflow:true});
//   var myScroll = new IScroll('.section');
//   $('.wrapper').slimScroll({
//     height: '550px'
//     //   });
//   });
// });

$(function() {
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    scrollOverflow: true
  });
});
