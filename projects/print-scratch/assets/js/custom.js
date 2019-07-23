$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows:false
  });
          

  $(document).ready(function(){
	$('#mobile-menu').click(function(){
		$(this).toggleClass('open');
		$('header .menu').toggleClass('active');
    });  
    $('.thumbnail a').magnificPopup({ 
        type: 'image',
	    closeOnContentClick: false,
        image: {
            verticalFit: false
        },
        mainClass: 'mfp-with-zoom',
        removalDelay: 300
      });
});