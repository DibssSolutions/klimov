import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.getElementById('slider');

  if (sliderTrigger !== null) {
    var slider = $('.slider');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      dots: false,
      smartSpeed: 2000,
      // autoWidth: true,
      responsive: {
        0: {
          center: true,
          items: 1,
          margin: 16
        },
        678: {
          center: true,
          items: 2,
          margin: 50
        },
        1024: {
          center: true,
          items: 3,
          margin: 70
        },
        1429: {
          center: true,
          items: 3,
          margin: 130
        }
      }
    });

    function sliderVisible() {
      $('.slider').css({ opacity: '1', visibility: 'visible' });
    }

    slider.on('mousewheel', '.owl-stage', function(e) {
      if (e.originalEvent.deltaY > 0) {
        slider.trigger('next.owl');
      } else {
        slider.trigger('prev.owl');
      }
      e.preventDefault();
    });
  }
});
