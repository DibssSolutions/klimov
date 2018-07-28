import SplitIntoRows from '../libs/SplitIntoRows';
import { TimelineMax } from 'gsap';
import Splitter from 'split-html-to-chars';

function init() {
  textIntoRows();
  textIntoChars();

  var titleText = $('.project_link .letter');
  var simpleText = $('.fp-text span');
  var listText = $('.fp-list-text span');
  var adressText = $('.adress span');

  let tlInit = new TimelineMax();
  tlInit.set([titleText, simpleText, listText, adressText], { opacity: 0 });
}

function fpAnimation(selector) {

  var titleRows = $(selector).find('.project_link .text-row');
  let tl = new TimelineMax();
 
  titleRows.each(function(index, textRow) {
    var letters = $(textRow).find('.letter');
    new TimelineMax().call(function() {
      new TimelineMax().staggerFromTo(
        $(letters),
        1,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, ease: Power1.easeInOut },
        0.1
      );
    });
  });
}
// console.log(selector);
// console.log(titleRows);
  
// var titleLettersInRows = $(titleRows).find('.letter');
// var simpleText = $(selector).find('.fp-text letter');
// var listRows = $(selector).find('.fp-list-text .text-row');
// var adressText = $(selector).find('.adress letter');
// var titleLargeLetters = $(selector).find('.titleLarge .letter');
// var titleLargeRows = $(selector).find('.titleLarge .text-row');

// console.log(titleLettersInRows);

  
//   listRows.each(function(index, listRow) {
//     tl.staggerFromTo(
//       $(listRow),
//       1,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, ease: Power1.easeInOut },
//       0.1
//     );
//   });

//   tl.staggerFromTo(
//     titleLettersInRows,
//     1,
//     { x: 30, opacity: 0 },
//     { x: 0, opacity: 1, ease: Power1.easeInOut },
//     1
//   );
// }

function fpReset(selector) {

  let tlReset = new TimelineMax();

  var titleText = $(selector).find('.project_link .letter');
  var simpleText = $(selector).find('.fp-text span');
  var listText = $(selector).find('.fp-list-text span');
  var adressText = $(selector).find('.adress span');
  var titleLargeText = $(selector).find('.titleLarge .letters');

  tlReset.set([titleText, simpleText, listText, adressText], { opacity: 0 });
}

function textIntoRows() {

  let textItems = document.querySelectorAll('.fp-text');
  let featureItems = document.querySelectorAll('.fp-list-text');
  let adressItems = document.querySelectorAll('.adress');
  let titleLargeItems = document.querySelectorAll('.titleLarge');
  let titleItems = document.querySelectorAll('.project_link');

  const split = selector => {
    for (let i = 0; i < selector.length; i++) {
      new SplitIntoRows({ container: selector[i] });
      //   $(textItems[i]).addClass('is-active');
    }
  };

  split(textItems);
  split(featureItems);
  split(adressItems);
  split(titleLargeItems);
  split(titleItems);

}

function textIntoChars() {
  /*
    TEXT INTO CHARS
    */

  let titleLargeLetters = document.querySelector('.titleLarge');  

  let els = document.querySelectorAll('.project_link');
  [].forEach.call(els, function(el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
  });
  
  titleLargeLetters.outerHTML = Splitter(titleLargeLetters.outerHTML, '<span class="letter">$</span>');
}

export { init, fpAnimation, fpReset };

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
