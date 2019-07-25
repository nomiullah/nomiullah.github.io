$(function(){
	
	// close from popup password
	$(".close-password").click (function () {
		$(".set-password-body").hide();
		$(".leaving-body").show();
		return false;
	});
	// skin button 
	$(".skip").click (function () {
		$(".set-password-body").show();
		$(".leaving-body").hide();
	});
		   
});