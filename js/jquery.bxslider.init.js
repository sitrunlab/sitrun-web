jQuery(document).ready(function($) {

	$('.bxslider').bxSlider({
	  minSlides: 1,
	  maxSlides: 4,
	  pager: false,
	  adaptiveHeight: true,
  	  slideWidth: 210,
  	  slideMargin: 20,
  	  nextText: '',
  	  prevText: ''
	});
	$('.gallery').bxSlider({
	  minSlides: 1,
	  maxSlides: 5,
	  pager: false,
	  adaptiveHeight: true,
  	  slideWidth: 210,
  	  slideMargin: 20,
  	  nextText: '',
  	  prevText: ''
	});

});