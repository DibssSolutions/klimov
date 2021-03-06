/* eslint-disable */
var Isotope = require("isotope-layout");

var filter = document.getElementById("filter");

if (filter !== null) {
  /*
  CALLING POPUP
   */
  $(".filter__buttons--main").click(() => {
    $(".filter__filter").addClass("is-active");
  });

  /*
  INITIALIZING FILTER
   */
  var iso = new Isotope(".filter__layout", {
    itemSelector: "body .filter__item",
    layoutMode: "fitRows",
    transitionDuration: "0"
  });

  $("[data-filter]").click(function() {
    /*
    FILTERING
    */
    var filterValue = $(this).attr("data-filter");
    iso.arrange({ filter: filterValue });

    /*
    CHANGING FILTER BUTTON CLASS
    */
    $(".filter__buttons")
      .find(".is-active")
      .removeClass("is-active");
    $(this).addClass("is-active");

    /*
    CHANGING TEXT IN FILTER BUTTON ON MAIN PAGE 
    */
    $(".js-filter-category-selected").text($(this).text());

    /* 
    FADING POPUP 
    */
    $(".filter__filter").removeClass("is-active");
    $(window).trigger('resize');
  });
  $(".filter__filter").on("click", function() {
    $(this).removeClass("is-active");
  });
}

function load_more(offset) {
  const data = "offset=" + offset + "&action=more_post_ajax";
  const admin_ajax = $("#filter").data("ajax-url");
  $.ajax({
    type: "POST",
    dataType: "html",
    url: admin_ajax,
    data,
    success: function(data) {
      if (data) {
        var $data = $(data);
        if ($data.length) {
          $(".filter__layout").append($data);
          $(".loader").hide();
          $("body")
            .find("[data-filter]")
            .hasClass("is-active")
            ? $("body")
                .find("[data-filter].is-active")
                .trigger("click")
            : $("body")
                .find('[data-filter="*"]')
                .trigger("click");

          $("body")
            .find(".filter__item")
            .removeClass("is-animate");
        }
      } else {
        $(".loader").addClass("stop");
      }
    },
    error: function(e) {
      console.log("error " + e);
    }
  });
  return false;
}

$(window).on('scroll', function(){
  if(parseInt($(window).scrollTop()) + parseInt($(window).height()) == parseInt($(document).height())) {
    let imageLength = $('body').find('#filter img').length - 1 ;
    if(!$(".loader").hasClass('stop')) {
      $(".loader").show();
      load_more(imageLength)
    }
  }
});
