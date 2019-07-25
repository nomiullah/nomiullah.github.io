$(function () {
	$(".menu-icon").click (function () {
		if( $(this).hasClass('active')){
			$(this).removeClass('active');
			$(".top-bar-section ul").stop(true,true).slideUp();
		}
		else{
			$(this).addClass('active');
			$(".top-bar-section ul").stop(true,true).slideDown();
		}
		return false;
	});
	
	
	
	// Filter sidebar
	$("#filter").click (function () {
		if( $(this).hasClass('active')){
			$(this).removeClass('active');
			$("#filter-content").stop(true,true).animate({'left':'-100%'});
		}
		else{
			$(this).addClass('active');
			$("#filter-content").show().stop(true,true).animate({'left':'0'});
		}
		return false;
	});
	
});