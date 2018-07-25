import IScroll from 'iscroll';
window.IScroll = IScroll;
var fullpage = require('../libs/jquery.fullpage.min.js');

var fp = document.getElementById('fullpage');

$(document).ready(function() {
  if (fp !== null) {
    // ===== PAGINATI0N =====
    var pg = $('.pagination');
    pg.text('Scroll');

    new IScroll('.section');
    $('#fullpage').fullpage({
      responsiveWidth: 10,
      responsiveHeight: 10,
      scrollingSpeed: 1000,
      sectionSelector: '.section',
      scrollOverflow: true,
      responsive: 768,
      resize: false,

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
      },

      // afterResize: function(width, height) {
      //   width = window.innerWidth;
      //   if (width < 768) {
      //     fullpage_api.destroy('all');
      //   }
      // }

    });
  }
});
