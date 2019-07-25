$(function () {
			
	$("#quiz").click(function () {
		$(".pet-search-form").hide();
		$(".quiz-expand").show();
		$(".slider-overlay").addClass('slider-overlay-auto');
		return false;
	});
	$(".collapse").click(function () {
		$(".pet-search-form").show();
		$(".quiz-expand").hide();
		$(".slider-overlay").removeClass('slider-overlay-auto');
		return false;
	});
	
	
	// sliders on different resolutions		
	$(document).ready(function(){
		// slider
		$('.flexslider').flexslider({
			animation: "fade",
			controlNav: false,
			start: function(slider){
			  $('body').removeClass('loading');
			}
		});
	})
	
	// box slider (desktop slider contain without if statment)
	// for mobile
	if ($(window).width() < 767) {
	   $(window).load(function() {
		  $('.box-slider').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 190,
			itemMargin: 0,
			minItems: 1,
			maxItems: 1,
			move: 1,
			controlNav: false
		  });
		});
	}
	// for Tablet
	if ($(window).width() < 1023) {
	   $(window).load(function() {
		  $('.box-slider').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 190,
			itemMargin: 0,
			minItems: 1,
			maxItems: 3,
			move: 1
		  });
		});
	}
	
	// for 1280 and 1024
	if ($(window).width() < 1400) {
	   $(window).load(function() {
		  $('.box-slider').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 190,
			itemMargin: 0,
			minItems: 1,
			maxItems: 4,
			move: 1
		  });
		});
	}
	
	// for 1420 and above
	if ($(window).width() < 1550) {
	   $(window).load(function() {
		  $('.box-slider').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 190,
			itemMargin: 0,
			minItems: 1,
			maxItems: 5,
			move: 1
		  });
		});
	}
	
	// for 1620 and above
	$(window).load(function() {
	  $('.box-slider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 215,
		itemMargin: 0,
		minItems: 1,
		maxItems: 7,
		move: 1
	  });
	});
	
	
});