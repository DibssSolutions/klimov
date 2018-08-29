$('.js-menu-hoverable').hover(
  function(e) {
    $('.menu__main').addClass('hovered');
    $(this).addClass('light');
  },
  function(e) {
    $('.menu__main').removeClass('hovered');
    $(this).removeClass('light');
  }
);
