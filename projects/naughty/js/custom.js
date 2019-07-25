// Pop_Up JS

$(document).ready(function(){
	$(".shopping-banner__methodology-link").click(function(){
		$(".popup-wrap").show();
		$("body").addClass("body-fixed");
	});

	$(".methodology-steps__close-icon").click(function(){
		$(".popup-wrap").hide();
		$("body").removeClass("body-fixed");
	});
	
});