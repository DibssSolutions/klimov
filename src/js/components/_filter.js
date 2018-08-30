/* eslint-disable */
var Isotope = require('isotope-layout');

var filter = document.getElementById('filter');

if (filter !== null) {

  /*
  CALLING POPUP
   */
  $('.filter__buttons--main').click(() => {
    $('.filter__filter').addClass('is-active');
  });

  /*
  INITIALIZING FILTER
   */
  var iso = new Isotope('.filter__layout', {
    itemSelector: '.filter__item',
    layoutMode: 'fitRows',
    transitionDuration: '0'
  });

  $('[data-filter]').click(function() {

    /*
    FILTERING
    */
    var filterValue = $(this).attr('data-filter');
    iso.arrange({ filter: filterValue });
    
    /*
    CHANGING FILTER BUTTON CLASS
    */
    $('.filter__buttons').find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');

    /*
    CHANGING TEXT IN FILTER BUTTON ON MAIN PAGE 
    */
    $('.js-filter-category-selected').text($(this).text());

    /* 
    FADING POPUP 
    */
    $('.filter__filter').removeClass('is-active');

  });
  $('.filter__filter').on('click', function(){
    $(this).removeClass('is-active');
  })
}
