$(function () {
	$("#menu").click(function () {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$("#nav").stop(true,true).slideUp();
		}
		else{
			$(this).addClass('active');
			$("#nav").stop(true,true).slideDown();
		}
		return false;		   
	});
			
});