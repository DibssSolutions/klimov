import './_common';
import DoSlide from 'do-slide';
import { runInNewContext } from 'vm';

new DoSlide('.ds-container', {
//   transitionInClass    : 'slide-in',
  //   transitionOutClass   : 'slide-out',
  translate3d          : false,
  duration: 1, 
  minInterval          : 250
//   onBeforeChange(function(curIndex, tarIndex, cur, tar) {
//     this.classList.add('slide-out-2');
//     setTimeout(runInNewContext, 500);
//   }
});
