import slick from 'slick-carousel';

$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    // infinite: true,
    // arrows: false,
    adaptiveHeight: true
  });

  $('.slider').on('wheel', function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  });

  $('.slider').on('keydown', function(e) {
    e.preventDefault();

    if (e.keyCode === '39') {
      $(this).slick('slickNext');
    }
    if (e.keyCode === '37') {
      $(this).slick('slickPrev');
    }
  });
});
