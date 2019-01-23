import { OPEN, HIDDEN, BODY } from '../_constants';

var open = false;

$('.menu-trigger').click(function() {
  if (open) {
    $('.menu-trigger').removeClass('menu-is-open');
    $(BODY).removeClass('mobile-fixed');
    $('.menu')
      .fadeOut(500)
      .removeClass(OPEN);
    $('.menu-top .col-31').removeClass(HIDDEN);
    $('.menu-top .col-45').removeClass(HIDDEN);
    $('.logo').removeClass('logo-grey');
    $('.header').removeClass('fixed');
    open = false;
  } else {
    $('.menu-trigger').addClass('menu-is-open');
    $(BODY).addClass('mobile-fixed');
    $('.menu')
      .addClass(OPEN)
      .fadeIn(500);
    $('.menu-top .col-31').addClass(HIDDEN);
    $('.menu-top .col-45').addClass(HIDDEN);
    $('.logo').toggleClass('logo-grey');
    $('.header').addClass('fixed');
    open = true;
  }
});
