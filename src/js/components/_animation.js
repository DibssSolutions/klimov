import SplitIntoRows from '../libs/SplitIntoRows';
import { TimelineMax } from 'gsap';
import Splitter from 'split-html-to-chars';

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

  titleRows.each(function(index, titleRow) {
    var letters = $(titleRow).find('.letter');
    new TimelineMax().call(
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
  });

  textBlocks.each(function(index, textBlock) {
    var rows = $(textBlock).find('.text-row');
    new TimelineMax().call(
      function() {
        new TimelineMax().staggerTo(
          $(rows),
          1,
          {
            y: 0,
            opacity: 1,
            ease: Power3.easeOut
          },
          0.1
        );
      },
      null,
      null,
      1 + index / 4
    );
  });

  $(images).addClass('is-active');
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
