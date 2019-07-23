new WOW().init();

$('.owl-carousel').owlCarousel({
    loop:false,
    responsiveClass:true,
    touchDrag  : true,
     mouseDrag  : false,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
})