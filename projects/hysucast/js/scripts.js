

new WOW().init();
// ------------------------//
// Flex_Slider Js
// ------------------------//
$(window).load(function() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 208,
    itemHeight: 214,
    itemMargin: 23,
    asNavFor: '#slider',
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});