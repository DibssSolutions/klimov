/* eslint-disable */
import IScroll from 'iscroll';
window.IScroll = IScroll;
var fullpage = require('../libs/jquery.fullpage.min.js');
import { init, fpAnimation, fpReset } from './_animation-fullpage';

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
      scrollingSpeed: 1000,
      sectionSelector: '.section',
      scrollOverflow: true,
      responsive: 768,
      resize: false,

      afterRender: () => {
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

        if ($(window).width() < 767) {
          fpAnimation($('.section:nth-child(2)'));
        }
      },

      onLeave: function(origin, destination, direction) {
        var loadedSection = this;

        if ($(window).width() > 767) {
          setTimeout(() => {
            if (direction === 'down') {
              var prevSlide = slides[destination - 2];
              fpReset(prevSlide);
            }
            if (direction === 'up') {
              var nextSlide = slides[destination];
              fpReset(nextSlide);
            }
          }, 500);
        }

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
            pg.text('0' + (destination - 1) + '/');
          } else {
            pg.text((destination - 1) + '/');
          }
        }
      },

      afterLoad: function(index, destination, direction) {
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

        var loadedSection = this;
        fpAnimation(loadedSection);
      }
    });
  }
});
