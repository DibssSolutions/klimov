import slick from 'slick-carousel';

$(document).ready(function() {
  var sliderTrigger = document.getElementById('slider');

  if (sliderTrigger !== null) {
    $('.slider').on('init', function(event, slick) {
      $('.slider').css({ opacity: '1', visibility: 'visible' });
    });

    $('.slider').slick({
      slidesToShow: 1,
      // adaptiveHeight: true,
      centerMode: true,
      arrows: false,
      infinite: false,
      speed: 1000,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
  }
});
