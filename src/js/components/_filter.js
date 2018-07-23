/* eslint-disable */
var Isotope = require("isotope-layout");

var iso = new Isotope(".filter__layout", {
  itemSelector: ".filter__item",
  layoutMode: "fitRows"
});

$(".filter__btn").click(function() {
  var filterValue = $(this).attr("data-filter");
  iso.arrange({ filter: filterValue });
});
