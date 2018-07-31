import SplitIntoRows from '../libs/SplitIntoRows';
import { TimelineMax } from 'gsap';
import Splitter from 'split-html-to-chars';
import ScrollReveal from 'scrollreveal';

function init() {
  textIntoRows();
  textIntoChars();

  // var titleText = $('.project_link .letter');
  // var listText = $('.js-text span');
  // var adressText = $('.adress span');
  // var label = $('.label');
  // var titleRows = $('.project_link .text-row');
  // var textBlocks = $('.js-text-block');

  // let tlInit = new TimelineMax();
  // tlInit.set([titleText, simpleText, listText, adressText, label], {
  //   opacity: 0
  // });
}

function fpAnimation(selector) {
  var titleRows = $(selector).find('.js-title .text-row');
  var textBlocks = $(selector).find('.js-text-block');
  var images = $(selector).find('[data-image*="parent"]');

  function animateTitles() {
    titleRows.each(function(index, titleRow) {
      var letters = $(titleRow).find('.letter');
      var tl = new TimelineMax().call(
        function() {
          new TimelineMax().staggerTo(
            $(letters),
            0.8,
            { x: 0, opacity: 1, ease: Power3.easeOut },
            0.08
          );
        },
        null,
        null,
        index / 2
      );
      return tl;
    });
  }

  function animateText() {
    textBlocks.each(function(index, textBlock) {
      var rows = $(textBlock).find('.text-row');
      var tl = new TimelineMax().call(
        function() {
          new TimelineMax().staggerTo(
            $(rows),
            1,
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
              // onCompleteAll: allowScroll
            },
            0.1
          );
        },
        null,
        null,
        1 + index / 4
      );
      return tl;
    });
  }

  // $(images).addClass("is-active");

  var masterTimeline = new TimelineMax({ onComplete: allowScroll });
  masterTimeline
    .add(animateTitles)
    .add(animateText, '+=1')
    .to(images, 0, { className: '+=is-active' }, '+=0.3');

  // let tl = new TimelineMax().to('.section', 0.8, {
  //   zIndex: 2,
  //   onComplete: allowScroll
  // });
}

// function prohibitScroll() {
//   $.fn.fullpage.setAllowScrolling(false);
//   $.fn.fullpage.setKeyboardScrolling(false);
// }

function allowScroll() {
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
  console.error(33);
}

function fpReset(selector) {
  let tlReset = new TimelineMax();

  var letters = $(selector).find('.js-title .letter');
  var text = $(selector).find('.text-row');
  var rowWithLetters = $(selector).find('.js-title .text-row');
  var images = $(selector).find('[data-image*="parent"]');

  tlReset
    .set(letters, { opacity: 0, x: 30 })
    .set(text, { opacity: 0, y: 80 })
    .set(rowWithLetters, { opacity: 1, y: 0 })
    .set(images, { className: 'image' });
}

function textIntoRows() {
  let textItems = document.querySelectorAll('.js-text');

  const split = selector => {
    for (let i = 0; i < selector.length; i++) {
      new SplitIntoRows({ container: selector[i] });
      //   $(textItems[i]).addClass('is-active');
    }
  };

  split(textItems);
}

function textIntoChars() {
  let titleLetters = document.querySelectorAll('.js-title');

  [].forEach.call(titleLetters, function(el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
  });
}

export { init, fpAnimation, fpReset };

window.sr = ScrollReveal();

/*
*About page
*/
sr.reveal('.about .sr-up', {
  scale: 1,
  duration: 1200,
  distance: '50px',
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  viewFactor: -0.1
});

/*
*Project page
*/

sr.reveal('.project .sr-up', {
  scale: 1,
  duration: 2000,
  distance: '10vh',
  easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955);',
  viewFactor: -0.1
});
