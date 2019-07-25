
$(document).ready(function(){
	$(".navbar-toggler").click(function(){
		$(".menu-btn").toggleClass("change-btn");
		$(".navbar-collapse").toggleClass("show");
	});
});


// headerFixed JS On wind0w scr0ll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 50) {
        $(".header").addClass("header-fixed");
    }else {
        $(".header").removeClass("header-fixed");
    }
});