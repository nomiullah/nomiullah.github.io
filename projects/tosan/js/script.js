$(function () {

// accordion
$(".accordion-section > h3 a").click (function () {
	if( $(this).hasClass('active') ){
		$(this).removeClass('active');
		$(this).parent().next(".accordion-content").slideUp(700);
	}
	else{
		
		$(".accordion-section > h3 a").removeClass('active');
		$(".accordion-content").slideUp(700);
		
		$(this).addClass('active');
		$(this).parent().next(".accordion-content").slideDown(700);
	}
	return false;
});


// tabs
$(".tabs-link a").click (function () {
	var newContents = $(this).attr('href').slice(1);
	$('.tabs-desc-wrap').hide();
	$('#'+newContents).show();
	
	$('.tabs-link li').removeClass('active');
	$(this).parent().addClass('active');
	return false;
});

	
});