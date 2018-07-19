var open = false;

$('.menu-trigger').click(function() {
  if (open) {
    $('.menu-trigger').removeClass('menu-is-open');
    $('.menu').fadeOut(500);
    open = false;
  } else {
    $('.menu-trigger').addClass('menu-is-open');
    $('.menu')
      .removeClass('is-closed')
      .fadeIn(500);
    open = true;
  }
});
