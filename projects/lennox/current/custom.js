/* $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >50) {
        $("header").addClass("darkHeader");
    }
    else{
        $("header").removeClass("darkHeader");
    }
}); */

/* function headerFixed() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		//clearHeader, not clearheader - caps H
		$("header").addClass("darkHeader");
	}
	else{
		$("header").removeClass("darkHeader");
	}
}

$(window).resize(function() { 
	headerFixed();
});

$(window).scroll(function() { 
	headerFixed();
	
}); */

new WOW().init();


// owl carousel init
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });
});