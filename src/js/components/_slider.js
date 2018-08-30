import owlCarousel from 'owl.carousel';
import { HTMLBODY } from '../_constants';

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
          autoWidth: true,
          margin: 16,
          smartSpeed: 500
        },
        678: {
          center: false,
          items: 2,
          // autoWidth: true,
          margin: 16
        },
        840: {
          // autoWidth: true,
          center: true,
          items: 3,
          margin: 40
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
    let timeout;
    let timeoutFlug = true;
    const sliderTrigger = (e) => {
      if (!timeoutFlug) return;
      if (e.originalEvent.deltaY > 0) {
        slider.trigger('next.owl');
      } else {
        slider.trigger('prev.owl');
      }
    };
    HTMLBODY.on('mousewheel', function(e) {
      if (!sliderTrigger) return;
      sliderTrigger(e);
      timeoutFlug = false;
      clearTimeout(timeout);
      timeout = setTimeout(() => { timeoutFlug = true; }, 100);
      e.preventDefault();
    });
  }
});
