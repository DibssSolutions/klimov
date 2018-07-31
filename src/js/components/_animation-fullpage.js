import SplitIntoRows from '../libs/SplitIntoRows';
import { TimelineMax } from 'gsap';
import 'letteringjs';

function init() {
  textIntoRows();
  textIntoChars();
}

function tlTemplate(props) {
  var tl = new TimelineMax({ delay: props.mainDelay || 0 });
  props.parentSelector.each(function(index, el) {
    var elements = $(el).find(props.childSelector);
    tl.add(
      new TimelineMax().staggerTo(
        $(elements),
        props.duration || 0.8,
        { x: 0, y: 0, opacity: 1, ease: Power3.easeOut },
        props.staggerDelay || 0.08
      ),
      index / props.delay || 0
    );
  });
  props.arr.push(tl);
}

function fpAnimation(selector) {
  var titleRows = $(selector).find('.js-title .text-row');
  var titleRowsSecondary = $(selector).find('.js-title-secondary .text-row');
  var textBlocks = $(selector).find('.js-text-block');
  var images = $(selector).find('[data-image*="parent"]');

  var arr = [];
  var arr2 = [];

  var tl = new TimelineMax();
  var tl2 = new TimelineMax();

  tlTemplate({
    parentSelector: titleRows,
    childSelector: 'span',
    duration: 0.8,
    arr: arr,
    tl: tl,
    staggerDelay: 0.05
    // delay: 2
  });

  tlTemplate({
    parentSelector: titleRowsSecondary,
    childSelector: 'span',
    duration: 0.4,
    arr: arr,
    tl: tl,
    mainDelay: -0.4,
    minus: 0.5
  });

  var tlImg = new TimelineMax().to(images, 0, {
    className: '+=is-active'
  });
  arr2.push(tlImg);

  tlTemplate({
    parentSelector: textBlocks,
    childSelector: '.text-row',
    arr: arr2,
    delay: 6,
    tl: tl2,
    mainDelay: 0.5
    // staggerDelay: 0.03
  });

  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr.length - 1);

  for (var i = 0; i <= arr.length - 1; i++) {
    tl.add(arr[i]).eventCallback('onComplete', allowScroll);
  }
}

// function fpAnimation(selector) {
//   var titleRows = $(selector).find('.js-title .text-row');
//   var textBlocks = $(selector).find('.js-text-block');
//   var images = $(selector).find('[data-image*="parent"]');

//   function animateTitles() {
//     titleRows.each(function(index, titleRow) {
//       var letters = $(titleRow).find('.letter');
//       var tl = new TimelineMax().call(
//         function() {
//           new TimelineMax().staggerTo(
//             $(letters),
//             0.8,
//             { x: 0, opacity: 1, ease: Power3.easeOut },
//             0.08
//           );
//         },
//         null,
//         null,
//         index / 2
//       );
//       return tl;
//     });
//   }

//   function animateText() {
//     textBlocks.each(function(index, textBlock) {
//       var rows = $(textBlock).find('.text-row');
//       var tl = new TimelineMax().call(
//         function() {
//           new TimelineMax().staggerTo(
//             $(rows),
//             1,
//             {
//               y: 0,
//               opacity: 1,
//               ease: Power3.easeOut
//               // onCompleteAll: allowScroll
//             },
//             0.1
//           );
//         },
//         null,
//         null,
//         1 + index / 4
//       );
//       return tl;
//     });
//   }

//   function animateImage() {
//     var tl = new TimelineMax().to(
//       images,
//       0,
//       { className: '+=is-active' },
//       '+=0.3'
//     );
//     return tl;
//   }

//   function delayAnimation() {
//     var tl = new TimelineMax().to($('.section'), 3, {
//       className: '+=is-active'
//     });
//     return tl;
//   }

//   // $(images).addClass("is-active");

//   var masterTimeline = new TimelineMax({
//     onComplete: allowScroll
//   });

//   masterTimeline
//     .add(delayAnimation())
//     .add(animateTitles, '-=3')
//     .add(animateText, '-=1')
//     .add(animateImage, '+=0.2');

// masterTimeline.eventCallback('onComplete', allowScroll);

// let tl = new TimelineMax().to('.section', 0.8, {
//   zIndex: 2,
//   onComplete: allowScroll
// });
// }

function prohibitScroll() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
}

function allowScroll() {
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
  console.warn('completed');
}

function fpReset(selector) {
  let tlReset = new TimelineMax();

  var letters1 = $(selector).find('.js-title span');
  var letters2 = $(selector).find('.js-title-secondary span');
  var text = $(selector).find('.text-row');
  var rowWithLetters1 = $(selector).find('.js-title .text-row');
  var rowWithLetters2 = $(selector).find('.js-title-secondary .text-row');
  var images = $(selector).find('[data-image*="parent"]');

  tlReset
    .set(letters1, { opacity: 0, x: 30 })
    .set(letters2, { opacity: 0, x: 30 })
    .set(text, { opacity: 0, y: 80 })
    .set(rowWithLetters1, { opacity: 1, y: 0, x: 0 })
    .set(rowWithLetters2, { opacity: 1, y: 0, x: 0 })
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

  $('.js-title .text-row')
    .lettering('words')
    .children('span')
    .lettering();

  $('.js-title-secondary .text-row')
    .lettering('words')
    .children('span')
    .lettering();

}

export { init, fpAnimation, fpReset };


