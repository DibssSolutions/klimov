import IScroll from 'iscroll';
window.IScroll = IScroll;
var fullpage = require('../libs/jquery.fullpage.min.js');
import SplitIntoRows from '../libs/SplitIntoRows';
import { TimelineMax } from 'gsap';
import Splitter from 'split-html-to-chars';

var fp = document.getElementById('fullpage');

$(document).ready(function() {
  if (fp !== null) {
    // ===== PAGINATI0N =====
    var pg = $('.pagination');
    pg.text('Scroll');

    /*
   TEXT INTO ROWS
   */
    let items = document.querySelectorAll('.fp-text');

    for (let i = 0; i < items.length; i++) {
      new SplitIntoRows({ container: items[i] });
      $(items[i]).addClass('is-init');
    }

    /*
    TEXT INTO CHARS
    */
    let els = document.querySelectorAll('.project_link');
    [].forEach.call(els, function(el) {
      el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    });

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

      afterLoad: () => {
        console.log(3);
      }

      // afterResize: function(width, height) {
      //   width = window.innerWidth;
      //   if (width < 768) {
      //     fullpage_api.destroy('all');
      //   }
      // }
    });
  }
});

// import sayHello from './lib/sayHello.js';

// sayHello();

// document.querySelector('.lang-changer').addEventListener('mouseover', (e) => {
//   document.querySelector('.lang-changer').classList.toggle('lang-changer--open');
// });

// const video = document.getElementById('video');
// let playing = false;

// document.querySelector('.tv__play').addEventListener('click', e => {
//   if (playing) {
//     video.pause();
//   } else {
//     video.play();
//   }
//   playing = !playing;
// });

// import { TimelineMax } from 'gsap';
// import Splitter from 'split-html-to-chars';
// import exec from 'script-loader!./lib/onepagescroll.min.js';
// const onePageScroll = require('./lib/onepagescroll.min.js');
// // import onePageScroll from './lib/onepagescroll.min.js';
// // require('./lib/fullPage.min.js');
// // import $ from 'jquery';
// // ===== SPLITTING LETTERS =====`
// let els = document.querySelectorAll('.js-splitme');
// [].forEach.call(els, function(el) {
//   el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
// });

// var text = $('.stagger-text');
// var letters1 = $('.stagger-text:first-child').find('.letter');
// var letters2 = $('.stagger-text:last-child').find('.letter');
// var bottomText1 = $('.js-text-bottom-1');
// var bottomText2 = $('.js-text-bottom-2');
// var bottomTextEl1 = bottomText1.find('p');
// var bottomTextEl2 = bottomText2.find('p');

// let tl = new TimelineMax();
// // tl.set('section', {autoAlpha: 0});

// var init = function(index) {
//   var section = $('body').find('section[data-index=' + index + ']');
//   tl.add('begin')
//     .set(section, { autoAlpha: 1 })
//     .from('.image', 1.8, { x: 1200, opacity: 0 }, 'begin+=0.2')
//     .staggerFromTo(
//       letters1,
//       1,
//       { x: 30, opacity: 0 },
//       { x: 0, opacity: 1, ease: Power1.easeInOut },
//       0.05,
//       'begin'
//     )
//     .staggerFromTo(
//       letters2,
//       1,
//       { x: 30, opacity: 0 },
//       { x: 0, opacity: 1, ease: Power1.easeInOut },
//       0.05,
//       'begin'
//     )
//     .from(text, 1, { x: 40, ease: Power0.easeNone }, 'begin')
//     .from(bottomText1, 1.5, { y: 100, ease: Power0.easeNone }, 'begin+=1.5')
//     .from(bottomText2, 1.5, { y: 100, ease: Power0.easeNone }, 'begin+=1.7')
//     .staggerFromTo(
//       bottomTextEl1,
//       1,
//       { y: 50, opacity: 0, delay: 0.2 },
//       { y: 0, opacity: 1, ease: Power0.easeNone },
//       0.5,
//       'begin+=1.5'
//     )
//     .staggerFromTo(
//       bottomTextEl2,
//       1,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, ease: Power1.easeInOut },
//       0.5,
//       'begin+=1.7'
//     );
// };

// init(1);

// onePageScroll('.main', {
//   sectionContainer: 'section',
//   easing: 'ease-in-out',
//   animationTime: 1500,
//   pagination: true,
//   updateURL: false,
//   //   afterMove: function(index) {
//   //     tl.staggerFromTo('section .stagger-text .letter', 1, {y: 20,opacity: 0}, {y:0,opacity: 1,ease: Power1.easeOut},0.1);
//   //   },
//   //   beforeMove: function(index) {
//   //     let tlReset = new TimelineMax();
//   //     var section = $('body').find('section[data-index=' + index + 1 + ']');
//   //     console.log(section);
//   //     tlReset.to(section, { autoAlpha: 0 }, 0.5);
//   //   },
//   //   afterMove: (index) => {
//   //     let tlReset = new TimelineMax();
//   //     var section = $('body').find(`section[data-index=${index+1}]`);
//   //     tlReset.to(section, { autoAlpha: 0 }, -0.5);
//   //     first();
//   //   },
//   afterMove: index => init(index),
//   beforeMove: index => {
//     var section = $('body').find('section[data-index=' + index + ']');
//     tl.add('begin')
//       .to(letters1, 0.5, { x: 30, opacity: 0 }, 'begin')
//       .to(letters2, 0.5, { x: 30, opacity: 0 }, 'begin')
//       .to(bottomText1, 0.5, { y: 70, ease: Power1.easeOut }, 'begin')
//       .to(bottomText2, 0.5, { y: 70, ease: Power1.easeOut }, 'begin');
//   },
//   loop: false,
//   keyboard: true,
//   responsiveFallback: false
// });

// var page = new fullPage('.main');
