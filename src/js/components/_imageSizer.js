$(document).ready(() => {
  $('img:not(.filter__image img)').each((i,el) => {
	  const img = $(el);
	  const width = img[0].naturalWidth/2;
	  img.css({'width': width, 'display': 'block', 'max-width': '100%'});
  });
});
