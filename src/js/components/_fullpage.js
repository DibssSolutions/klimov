import IScroll from 'iscroll';
window.IScroll = IScroll;
var fullpage = require('../libs/jquery.fullpage.min.js');
import { init, fpAnimation, fpReset } from './_animation';

var fp = document.getElementById('fullpage');

$(document).ready(function() {
  if (fp !== null) {
    // ===== PAGINATI0N =====
    var pg = $('.pagination');
    pg.text('Scroll');

    var slides = $('.section');
    /* 
    * Init splitting text
    */
    init();

    new IScroll('.section');
    $('#fullpage').fullpage({
      responsiveWidth: 10,
      responsiveHeight: 10,
      scrollingSpeed: 100,
      sectionSelector: '.section',
      scrollOverflow: true,
      responsive: 768,
      resize: false,
    
      afterRender: () => {
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
      },

      onLeave: function(origin, destination, direction) {
        var loadedSection = this;

        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

        setTimeout(() => {
          if (direction === 'down') {
            var prevSlide = slides[destination - 2];
            console.log(prevSlide);
            fpReset(prevSlide);
          }
          if (direction === 'up') {
            var nextSlide = slides[destination];
            console.log(nextSlide);
            fpReset(nextSlide);
          }
        }, 0);

        /*
        * Changing pagination text and email/Russia in footer
        */
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
      },

      afterLoad: function(index, destination, direction) {
        var loadedSection = this;
        fpAnimation(loadedSection);
        console.warn(11111);
        // setTimeout(allowScroll, 3000);
        // alert(1);
      }
    });
  }
});

// function prohibitScroll() {
//   $.fn.fullpage.setAllowScrolling(false);
//   $.fn.fullpage.setKeyboardScrolling(false);
// }

// function allowScroll() {
//   $.fn.fullpage.setAllowScrolling(true);
//   $.fn.fullpage.setKeyboardScrolling(true);
// }
