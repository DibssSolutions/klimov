/* eslint-disable */
var Isotope = require('isotope-layout');

var filter = document.getElementById('filter');

if (filter !== null) {
  $('.filter__label').click(() => {
    $('.filter__filter').addClass('is-active');
  });

  var iso = new Isotope('.filter__layout', {
    itemSelector: '.filter__item',
    layoutMode: 'fitRows',
    transitionDuration: '0'
  });

  $('.filter__btn').click(function() {
    var filterValue = $(this).attr('data-filter');
    iso.arrange({ filter: filterValue });
    $('.js-filter-category-selected').text($(this).text());
    $('.filter__filter').removeClass('is-active');
  });
}
