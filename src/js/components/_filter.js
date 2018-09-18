/* eslint-disable */
var Isotope = require('isotope-layout');

var filter = document.getElementById('filter');

if (filter) {

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
  $('.js-filter-category-selected').on('click', function(){
    $(this).addClass('is-change')
  })

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

function load_more(offset){
  const data = 'offset=' + offset + '&action=more_post_ajax';
  const admin_ajax = $('#filter').data('ajax-url');
  $.ajax({
    type: "POST",
    dataType: "html",
    url: admin_ajax,
    data,
    success: function(data){
      var $data = $(data);
      if($data.length){
        $(".filter__layout").append($data);
        $(".loader").hide();
        ($('[data-filter]').hasClass('is-active')) 
          ? $('[data-filter].is-active').trigger('click')
          : $('[data-filter="*"]').trigger('click');
      }
    }
  });
  return false;
}
$(window).on('scroll', function(){
  if (!$('#filter').length) return;
  let offsetTop = $(window).scrollTop();
  let filterOffset = $('.filter__inner').offset().top;
  let docHeigth = $('.filter__inner').outerHeight();
  let winHeight = $(window).outerHeight();
  let imageLength = $('#filter img').length - 1 ;

  if (offsetTop + winHeight >= filterOffset + docHeigth) {
    $(".loader").show();
    load_more(imageLength)
  }
  
})
