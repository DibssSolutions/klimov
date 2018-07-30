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
      scrollingSpeed: 2000,
      sectionSelector: '.section',
      scrollOverflow: true,
      responsive: 768,
      resize: false,
      fitToSection: true,
      fitToSectionDelay: 1000,

      onLeave: function(origin, destination, direction) {
        var loadedSection = this;

        // $.fn.fullpage.setAllowScrolling(true);
        // $.fn.fullpage.setKeyboardScrolling(true);

        setTimeout(() => {
          if (direction === 'down') {
            var prevSlide = slides[destination - 2];
            console.log(prevSlide);
            fpReset(prevSlide);
          }
          if (direction === 'up') {
            var nextSlide = slides[destination];
            console.log(nextSlide);
            fpReset(prevSlide);
          }
        }, 1000);

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

        prohibitScroll();
        

        fpAnimation(loadedSection);
        // alert(1);
      }
    });
    // $.fn.fullpage.setAllowScrolling(false);
    // $.fn.fullpage.setKeyboardScrolling(false);
    // fullpage_api.setKeyboardScrolling(false);
    // $.fn.fullpage.setAllowScrolling(false);
  }
});

function prohibitScroll() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
}

function allowScroll() {
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
}
