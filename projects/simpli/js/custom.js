$(window).scroll(function() {
	if ( $(window).scrollTop() >0){
		$('header').addClass('fixed');
		$('.overlay').addClass('fixed');
		}
	else{
		$('header').removeClass('fixed');
		$('.overlay').removeClass('fixed');
		}
	});
	new WOW().init();
	$('#slides').superslides({
	play:10000,
	pagintaion:false
});
$('#slidesinner').superslides({
	play:false,
	pagintaion:false
});
		
		
 jQuery(document).ready(function($) {
	 $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
		if (!event.namespace) return;
		var carousel = event.relatedTarget,
			element = event.target,
			current = carousel.current();
		$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
		$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
	})
	$('#myCarousel').carousel({
			interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	//Handles the carousel thumbnails
   $('[id^=carousel-selector-]').click( function(){
		var id = this.id.substr(this.id.lastIndexOf("-") + 1);
		var id = parseInt(id);
		$('#myCarousel').carousel(id);
	});


	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid.bs.carousel', function (e) {
			 var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
	});
});

$('.content .products-detail ul li').click(function() {
    $('.content .products-detail ul li').removeClass();
    $(this).addClass('active');
});
$('#myCarousel').carousel({
    pause: true,
    interval: false
});
 
 
 $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        769:{
            items:4,
            nav:true,
            loop:false
        },
		992:{
            items:7,
            nav:false,
            loop:false
        }
    },onInitialized: function(event) {
    	$('.owl-prev').addClass('disabled');
		},
	
	
	  
})
$( "#trigger" ).click(function() {
  $( ".overlay.overlay-hugeinc,body" ).toggleClass('open');
});
 
$('#trigger').click(function(){
		$("#nav-icon1").toggleClass('open');
		
	});


jQuery(document).ready(function($) {
	function winheight(){
		var product_page_height =$(window).height() - $('.products-detail-inner').height()-46;
		$('.product-detail-page').css('height',product_page_height);
		
	};
		winheight();
		
		});
		$( window ).resize(function() {
  winheight();
});