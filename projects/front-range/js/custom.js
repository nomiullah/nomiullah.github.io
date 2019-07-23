$(document).ready(function() {
    $('.gallery').owlCarousel({
        loop: false,
        margin: 38,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                stagePadding: 28,
                margin: 14
            },
            600: {
                items: 1,
                nav: true,
                stagePadding: 170
            },
            1025: {
                items: 3,
                nav: true,
            }
        }
    });
});


function switchOwl(slider) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 767 && slider.data('owlCarousel') == undefined) {
        slider.owlCarousel({
            loop: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    stagePadding: 28,
                    margin: 14,
                    autoplay: true,
                    nav: false
                }
            }
        });
    } else if (width < 767 && slider.data('owlCarousel') != undefined) {
        slider.data('owlCarousel').destroy();
    }
}

$("document").ready(function() {
    var owl = $("#carousel");
    switchOwl(owl);
    $(window).on('resize', function() {
        switchOwl(owl);
    });
	$(window).on('resize', function() {
		switchOwl(owl);
	});
});




/*Smooth Scroll to section*/
function ScrollToPos(target, act) {
    if (target == "#") {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    } else {
        $('html,body').animate({ scrollTop: $(target).offset().top }, 1000);
    }

}




$(document).ready(function () {

    /*Mobile Menu*/
    $(".menu-hamburger").click(function() {
        $("nav").toggleClass("open");
    });
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });

    /*Service Menu Active on click*/
    $('.service-content .service-left .services-nav ul li a').click(function(e) {

        $('.service-content .service-left .services-nav ul li a.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    
    /*Service Accordian*/
    $('.service-content .service-right .Service-detail h3').click(function(e) {
        $(this).parent().siblings().children('.text-outer').removeClass('active');
        $(this).siblings('.text-outer').toggleClass('active');
    });

    
});

