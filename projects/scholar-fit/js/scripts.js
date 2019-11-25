var $ = jQuery;

AOS.init();

$(document).on('scroll', function() {
    $(".floatit").css("bottom", Math.max(1 + 0.3*window.scrollY, 0) + "px");
})


var divs = $('#divs').find('.icon'),//fetch all the divs
    len = divs.length,//number of divs on page
    randomDiv,//random number that will be generated
    speed = 1000;//interval in miliseconds for the new div to appear

function anim(){
	var interval = setInterval(
	function() { 
	        randomDiv = Math.floor(Math.random()*len);
	        // divs.removeClass('show-anim');
	        divs.eq(randomDiv).toggleClass('show-anim');
	        // divs.eq(randomDiv).fadeTo("slow", 0.15);
	} , speed);
} 
anim();
anim();
anim();
anim();
anim();


 // Initialize Swiper
var swiper = new Swiper('.team .swiper-container', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: '3',
  spaceBetween: -100,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.team .swiper-button-next',
    prevEl: '.team .swiper-button-prev',
  },
  loop: true,
  breakpoints: {
        1300: {
          spaceBetween: -80,
        },
        1100: {
          spaceBetween: -80,
        },
        991: {
          spaceBetween: -60,
        },
        640: {
          spaceBetween: -50,
        },
        420: {
          spaceBetween: -40,
        }
  }
});