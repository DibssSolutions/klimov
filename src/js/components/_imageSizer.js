$(document).ready(() => {
  $('img:not(.filter__image img)').each((i,el) => {
	  const img = $(el);
	  const width = img.width()/2;
	  img.css({'width': width, 'display': 'block'});
  });
});
