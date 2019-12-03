/**
 * File custom.js.
 *
 * Theme Custom script enhancements for a better user experience.
 *
 * Contains handlers to make Theme Custom preview reload changes asynchronously.
 */

var $ = jQuery;

// atf height on desktop view
function hpATFHeight(){
  var winHeight = jQuery( window ).height();
  $( ".hp-atf-bg" ).height( winHeight );
}


// Aside Menu Fuction start 
function asideMenuFunc(){
  $('.ip-asidebar li.parent > a').click(function(e){
    e.preventDefault();
    if($(this).parent().hasClass('parent-open')){
      $(this).parent().removeClass('parent-open');
      $(this).parent().removeClass('current-menu-item');
    }else{
      $(this).parent().addClass('parent-open');
      $(this).parent().addClass('current-menu-item');
    }
  });
}
// Aside Menu Fuction end 

// gForm function
function gform(){
  $('.gform_wrapper .medium').each(function(){
    if($(this).val() == ''){
      console.log('if in');
      $(this).parent().parent().removeClass('infocus');
    }else{
      $(this).parent().parent().addClass('infocus');
      console.log('else in');
    }
  });
  $('.gform_wrapper .gform_button').addClass('serv-cta');
  $('.gform_wrapper .gform_button').addClass('active');
  $('.gform_wrapper .medium').focus(function() {
    $(this).parent().parent().addClass('infocus');
  });
  $('.gform_wrapper .medium').blur( function() {
    if($(this).val() == ''){
      $(this).parent().parent().removeClass('infocus');
    }
  });
  $('.form-cta').click(function(r){
    r.preventDefault();
    $('body').addClass('popup-open');
  });
  $('.form-cross-btn').click(function(v){
    v.preventDefault();
    $('body').removeClass('popup-open');
  })
}gform();

function readyFunuction(){

  // header scroll function
  $(window).scroll(function(){    
      var scroll = $(window).scrollTop();
      if ($(window).width() > 992) {  
        if (scroll >= 50) {
          $(".header").addClass("fix-header"); 
          $(".nav-button").addClass("active");
          $("body").addClass("scroll");
        }else{
          $(".header").removeClass("fix-header");
          $(".nav-button").removeClass("active");    
          $("body").removeClass("scroll");      
        }
      }
  });

  // nav functions starts here
  $( '.nav ul li' ).each(function(){
      var hasNestedItems = $(this).find('li').length;
      if(hasNestedItems > 0){
          $(this).addClass('parent');
      }
  });

  $(".nav ul li.parent").click(function (e) {
    if($(window).width() < 991){
      //e.stopPropagation();
      $(this).toggleClass("item-active");  
      //return false;
    }
  });

  $( ".header .nav ul li" ).hover(function(){
    if($(window).width() > 991){
      $(this).toggleClass( "hovered" );
    }
  });

  // closing previous open li on current li click
  if($(window).width() < 991){
    var subMenuLI = $( ".nav ul > li.parent" );
    $(subMenuLI).each(function (){
      // Set up onclick handler...
      $(this).click(function (){
        // Cache reference to clicked item.
        var clicked = this;
        // Iterate through list of sub-menu items...
        for(i=0,c=subMenuLI.length;i<c;i++){

          // If current item is not the clicked item...
          if (subMenuLI[i] !== clicked){
            // Get reference to parent <li>, then remove the mm-opened class.
            var parent = $(subMenuLI[i]).closest('li');
            $(parent).removeClass('item-active');
            $(parent).removeClass('hovered');
          }
        }
      });
    });
  }

  // Menu function
  $('.menu-btn').click(function(e){
    e.preventDefault();
    if($('body').hasClass('menu-open')){
      $('body').removeClass('menu-open');  
    }else{
      $('body').addClass('menu-open');
    }
  });

  // show-submenu from nav
  $( ".header .nav ul li.parent .sub-menu li.parent > a" ).click(function(){
    $( this ).parent().toggleClass( "show-item" );
  });

  $( ".nav-button" ).click(function(){
    $( this ).toggleClass( "change-navicon" );
    $( "body" ).toggleClass( "body-fixed" );
    $( "header" ).toggleClass( "fix-header" );
    $( ".header .nav ul li.parent" ).removeClass( "item-active" );
    $( ".header .nav ul li.parent" ).removeClass( "hovered" );
    $( ".header .nav ul li.parent .sub-menu li.parent" ).removeClass( "show-item" );
    $( ".nav" ).toggleClass( "toggle-nav" );
  });

}

// calling Ready functions
$( document ).ready(function(){
	readyFunuction();
	hpATFHeight();
  asideMenuFunc()
});
// calling Resize functions
$( window ).resize(function() {
	hpATFHeight();
});

// calling Load functions
$(window).bind('load', function(){    

});