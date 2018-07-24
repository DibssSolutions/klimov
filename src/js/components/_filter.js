/* eslint-disable */
var Isotope = require("isotope-layout");

var filter = document.getElementById("filter");

if (filter !== null) {
  var iso = new Isotope(".filter__layout", {
    itemSelector: ".filter__item",
    layoutMode: "fitRows",
    // hiddenStyle: {
    //   opacity: 0
    // },
    // visibleStyle: {
    //   opacity: 1
    // },
    // transformsEnabled: false,
    transitionDuration: "0"
  });

  $(".filter__btn").click(function() {
    var filterValue = $(this).attr("data-filter");
    iso.arrange({ filter: filterValue });
  });
}
// iso.on("arrangeComplete", function(filteredItems) {
//   var filteredArr = Array.from(filteredItems);
//   console.log(filteredArr);
//   filteredArr.forEach(item => {
//     console.log(item.element);
//     // item.element.classList.add("visible");
//     $(item.element).fadeOut(500);
//   });
//   console.log(filteredItems);
// });
