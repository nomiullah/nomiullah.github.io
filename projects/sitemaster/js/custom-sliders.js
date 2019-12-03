var $ = jQuery;
jQuery( document ).ready(function(){

  // btfrow1 review slider
  jQuery( '.btf1-reviewslider' ).slick({
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
  });

  // hp settlement slider
  jQuery( '.serv-slider' ).slick({
    arrows: true,
    centerPadding: '0px',
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
  });

  jQuery( '.practicearea-slider' ).slick({
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
  });

  // hp atf case results carousel
  jQuery('#carouselExampleFade').carousel({
    interval: 8000
  });

  // hp atf testimonials
  (function() {
    var quotes = $(".atf-testimonial");
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote(); 
  })();

  // ipatf testimonial slides
  (function() {
    var quotes = $(".ip-atf-slider");
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote(); 
  })();

  // bio slides
  (function() {
    var quotes = $(".bio-slides");
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote(); 
  })();

  // bio slides mobile
  (function() {
    var quotes = $(".bio-slides-mobile");
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote(); 
  })();

  // bootstrap4 swipe on mobile
  !function(t){t.fn.bcSwipe=function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}($);
   
  // Swipe functions for Bootstrap Carousel
  $('.carousel').bcSwipe({ threshold: 50 });

});

// swiper slider hp page
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});