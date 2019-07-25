

$(document).ready(function(){
    // Owl Carousel JS
      $(".owl-carousel").owlCarousel({
        rewind: true,
        loop: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1000,
        responsive: {
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992: {
                items: 3
            },
            1366: {
                items: 4
            }
        }
    });

    $(".navbar-toggler").click(function(){
        $(".menu-btn").toggleClass("change-btn");
        $(".header").addClass("header-fixed");
    });


});



// headerFixed JS On wind0w scr0ll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 50) {
        $(".header-bottom").addClass("header-fixed");
    }else {
        $(".header-bottom").removeClass("header-fixed");
    }
});