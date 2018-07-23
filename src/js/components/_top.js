import {SCROLL_TO} from '../_utils';
var up = document.getElementById('up');

if (up !== null) {
  $('#up').click(function() {
    SCROLL_TO(0);
  });
}
