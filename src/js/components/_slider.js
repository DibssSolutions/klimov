import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  var sliderTrigger = document.getElementById('slider');

  if (sliderTrigger !== null) {
    var slider = $('.slider');

    slider.owlCarousel({
      onInitialized: sliderVisible,
      loop: true,
      dots: false,
      smartSpeed: 1000,
      responsive: {
        0: {
          center: false,
          items: 1,
          margin: 16
        },
        1000: {
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
        console.log(2);
        slider.trigger('next.owl');
      } else {
        console.log(1);
        slider.trigger('prev.owl');
      }
      e.preventDefault();
    });
  }
});
