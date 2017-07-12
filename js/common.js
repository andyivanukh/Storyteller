$(document).ready(function(){

	$('.fa-bars').click(function(){
		$(this).next().slideToggle();
	});
	$('.bxslider').bxSlider({
        minSlides: 1,
 		   maxSlides: 3,
  		slideWidth: 370,
  		slideMargin: 30,
  		controls: true,
  		infiniteLoop: false,
  		hideControlOnEnd: true,
  		pager:false,
  		moveSlides:1
	});
  $('.clients-slider').bxSlider({
      minSlides: 2,
      maxSlides: 6,
      slideWidth: 105,
      slideMargin: 50,
      infiniteLoop: false,
      hideControlOnEnd: true,
      pager:false,
      moveSlides:1
  });
  $('.portfolio-slider').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 430,
      infiniteLoop: false,
      moveSlides:1,
      controls:false,
      ticker:true,
      speed:35000

  });
  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
   $('.blog-slider').bxSlider({
        minSlides: 1,
       maxSlides: 3,
      slideWidth: 370,
      slideMargin: 0,
      controls: true,
      infiniteLoop: false,
      hideControlOnEnd: true,
      pager:false,
      moveSlides:1

  });
});