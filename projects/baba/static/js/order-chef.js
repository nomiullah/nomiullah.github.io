$(function(){
	// custom accordion
	$("#accordion-custom h3 a").click(function () {
										 
		if( $(this).parent().hasClass('exp') ){
			$(this).parent().removeClass('exp');
			$(this).parent().next('.accordion-info').stop(true,true).slideUp();
		}
		else{
			$("#accordion-custom h3").removeClass('exp');
			$('.accordion-info').stop(true,true).slideUp();
			
			$(this).parent().addClass('exp');
			$(this).parent().next('.accordion-info').stop(true,true).slideDown();
		}
		return false;
	});
	
	
	// cancel top information
	$(".cancel-top-info").click(function () {
		$(this).parents('.top-info').slideUp();
		return false;
	});
	
});

