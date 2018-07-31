$('.menu .js-menu-hoverable').hover(
  function(e) {
    $('.menu').addClass('hovered');
    $(this).addClass('light');
  },
  function(e) {
    $('.menu').removeClass('hovered');
    $(this).removeClass('light');
  }
);
