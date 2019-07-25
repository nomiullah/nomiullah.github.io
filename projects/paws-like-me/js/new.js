$(function () {
	
	// box slider (desktop slider contain without if statment)
	// for mobile
	if ($(window).width() < 767) {
	   $(window).load(function() {
		  $('.white-pets').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 205,
			itemMargin: 0,
			minItems: 1,
			maxItems: 1,
			move: 1,
			controlNav: false,
		  });
		});
	}
	// for Tablet
	if ($(window).width() < 1023) {
	   $(window).load(function() {
		  $('.white-pets').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 205,
			itemMargin: 0,
			minItems: 1,
			maxItems: 2,
			move: 1,
			controlNav: false,
		  });
		});
	}
	
	// for 1280 and 1024
	if ($(window).width() < 1500) {
	   $(window).load(function() {
		  $('.white-pets').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 215,
			itemMargin: 0,
			minItems: 1,
			maxItems: 4,
			move: 1,
			controlNav: false,
		  });
		});
	}
	
	// for 1420 and above
	if ($(window).width() < 1600) {
	   $(window).load(function() {
		  $('.white-pets').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 215,
			itemMargin: 0,
			minItems: 1,
			maxItems: 5,
			move: 1,
			controlNav: false,
		  });
		});
	}
	
	// for 1620 and above
	$(window).load(function() {
	  $('.white-pets').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 215,
		itemMargin: 0,
		minItems: 1,
		maxItems: 6,
		move: 1,
		controlNav: false,
	  });
	});
	
	
});