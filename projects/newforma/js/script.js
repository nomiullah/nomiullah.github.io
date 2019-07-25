$(function () {


// menu
if ($(window).width() < 767) {
	$(".has-dropdown > a").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).next("ul").slideUp();
		}
		else{
			
			$(".has-dropdown > a").removeClass('active');
			$(".has-dropdown > ul").slideUp();
			
			$(this).addClass('active');
			$(this).next("ul").slideDown();
		}
		return false;
	});	
}

// top bar 
if ($(window).width() < 767) {
	$(".menu-left > ul > li > a").click (function () {
		if( $(this).parent().hasClass('active') ){
			$(this).parent().removeClass('active');
			$(this).next("ul").slideUp();
		}
		else{
			
			$(".menu-left li").removeClass('active');
			$(".menu-left li ul").slideUp();
			
			$(this).parent().addClass('active');
			$(this).next("ul").slideDown();
		}
		return false;
	});	
}


// accordion
$(".accordion-section > h3 a").click (function () {
	if( $(this).parent().hasClass('exp') ){
		$(this).parent().removeClass('exp');
		$(this).parent().next(".accordion-content").slideUp();
	}
	else{
		
		$(this).parents('.accordion-section-wrap').find(".accordion-section h3").removeClass('exp');
		$(this).parents('.accordion-section-wrap').find(".accordion-content").slideUp();
		
		$(this).parent().addClass('exp');
		$(this).parent().next(".accordion-content").slideDown();
	}
	return false;
});


// tabs
$(".tabs a").click (function () {
	var newContents = $(this).attr('href').slice(1);
	$('.tabs-content').hide();
	$('#'+newContents).show();
	
	$('.tabs li').removeClass('active');
	$(this).parent().addClass('active');
	return false;
});


// tabs default
$(".tabs-default a").click (function () {
	var tabsVal = $(this).attr('href').slice(1);
	$('.tabs-default-content').hide();
	$('#'+tabsVal).show();
	
	$('.tabs-default li').removeClass('active');
	$(this).parent().addClass('active');
	return false;
});

	
});