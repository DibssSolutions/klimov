/* eslint-disable */
var Isotope = require("isotope-layout");

var filter = document.getElementById("filter");

if (filter !== null) {
  var iso = new Isotope(".filter__layout", {
    itemSelector: ".filter__item",
    layoutMode: "fitRows",
    transitionDuration: "0"
  });

  $(".filter__btn").click(function() {
    var filterValue = $(this).attr("data-filter");
    iso.arrange({ filter: filterValue });
  });
}
