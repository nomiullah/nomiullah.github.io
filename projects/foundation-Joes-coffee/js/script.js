$(document).ready(function(){
      $(".title-bar").click(function(){
          $(".header .menu-outer").slideToggle();
      });
  });

  function addMObileStyles(){}
  function carouselFunc(){
    $('.main-carousel').flickity({
      // options
      autoPlay: true,
      cellAlign: 'left',
      contain: true
    });
  }
  $(window).resize(function(){
    addMObileStyles();
    carouselFunc();
  });
  $(document).ready(function(){
    addMObileStyles();
    carouselFunc();
  });