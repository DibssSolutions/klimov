var open = false;

$('.menu-trigger').click(function() {
  if (open) {
    $('.menu-trigger').removeClass('menu-is-open');
    $('.menu').fadeOut(500);
    $('.menu-top .col-31').fadeIn();
    $('.menu-top .col-45').fadeIn();
    $('.logo').removeClass('logo-grey');
    $('.header').removeClass('fixed');
    open = false;
  } else {
    $('.menu-trigger').addClass('menu-is-open');
    $('.menu')
      .removeClass('is-closed')
      .fadeIn(500);
    $('.menu-top .col-31').fadeOut();
    $('.menu-top .col-45').fadeOut();
    $('.logo').toggleClass('logo-grey');
    $('.header').addClass('fixed');
    open = true;
  }
});


