$(document).foundation()
 
$(".togglearrow" ).click(function(e) {
	e.stopPropagation();
	 $(".navbar").removeClass('active');
    $(".right-bar").toggleClass('active');
	
});

$(".humbarger-icon" ).click(function(e) {
	e.stopPropagation();
	 $(".right-bar").removeClass('active');
    $(".navbar").toggleClass('active');
});

$("body" ).click(function() {
    $(".navbar").removeClass('active');
	$(".right-bar").removeClass('active');
});
 
$(".navbar , .right-bar" ).click(function(e) {
	e.stopPropagation(); 
});

$(".navbar , .right-bar" ).on('click touchstart', function () {
	e.stopPropagation();  
});

$("body").on('click touchstart', function () {
	 $(".navbar").removeClass('active');
	$(".right-bar").removeClass('active');
});	


$(".bnews-toggle" ).click(function(e) {
	e.preventDefault();
	$(this).parent().toggleClass('hiddencontent')
	$(this).parent().siblings().toggleClass('hiddencontent');
});

$(window).on("scroll", function() {
 	if($(window).scrollTop() > 50) {
		$(".back-to-top").addClass("vsible-btn");
 	} else {
 		$(".back-to-top").removeClass("vsible-btn");
	}
 });

$(".back-to-top" ).click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});
 