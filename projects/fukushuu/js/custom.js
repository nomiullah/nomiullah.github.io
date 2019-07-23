// home video height
function videoHeight() {
    // home video height
    var windowHeight = $(window).height();
    var headerHeight = $(".main_header").height();
    var newHeight = windowHeight - headerHeight;
    $(".video_outer").css("height", newHeight + 120)

    // header
    //$( ".main_header" ).css( "height", windowHeight )

}

var scrollFunc;
var isAnimating = false;
// scrolltop nav
function ScrollToPos(target, act) {
    var top = $(target).offset().top
    isAnimating = true;
    function animateFalse() { isAnimating = false;}
    if (target == "#header") {
        $('html,body').animate({ scrollTop: 0 }, 1000, animateFalse);
    } else {
        $('html,body').animate({ scrollTop: top - 80 }, 1000, animateFalse);
    }
}

// closing nav on outsidenav click
$(document).mouseup(function (e) {
     var popup = $(".sub_nav");
     if (!$('.sub_nav img.nav_crossbtn').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
        if ($(window).width() < 640) {
            $( "body" ).css( "overflow", "scroll");
        }
         popup.removeClass( "show_nav" );
     }
 });


$(document).ready(function() {

    // our vision gallery click function
    $( ".ourvision_gallery li" ).each(function() {
        $( this ).on("click", function(){
         
            $( ".ourvision_gallery li div" ).fadeIn("overlay");
            $( this ).children("div").fadeOut( "overlay" );

            // show gallery content
            var databox = $(this).attr('data-id');
            $('.visiongallery_content').fadeOut();
            $('#'+ databox).fadeIn();

            // close content box
            $( ".vision_crossbtn" ).click(function(){
                $( ".visiongallery_content" ).fadeOut();
            });
        
        });
    });

    
    // resturant nav height
    var heroimgHeight = $( ".resturant_heroimg, .restaurant_location_banner" ).height();
    $( ".sub_nav" ).css( "height",heroimgHeight + 30 );

    // resturant nav function
    $( ".resturant_heroimg .sub_navbtn, .restaurant_location_banner .sub_navbtn" ).click(function(){
        $( ".sub_nav" ).addClass( "show_nav" );

        if ($(window).width() < 640) {
            $( "body" ).css( "overflow", "hidden");
        }

    });
    $( ".sub_nav img.nav_crossbtn" ).click(function(){
        $( ".sub_nav" ).removeClass( "show_nav" );
        if ($(window).width() < 640) {
            $( "body" ).css( "overflow", "scroll");
        }
    });
    $(".sub_nav").on('blur',function(){
        $(this).fadeOut(300);
        if ($(window).width() < 640) {
            $( "body" ).css( "overflow", "scroll");
        }
    });

    // food menu scroll
    $(".photos_list").click(function() {
        $('html,body').animate({
            scrollTop: $(".restaurant_gallery").offset().top},
            1000);
    });

    $(".menus_list").click(function() {
        $('html,body').animate({
            scrollTop: $(".main_food_menu").offset().top},
            1000);
    });

    function ScrollToPos(target,act){
        if(target == "#"){
           $('html,body').animate({ scrollTop: 0 }, 1000);
          }else{
           $('html,body').animate({ scrollTop: $(target).offset().top }, 1000);
        }   
    }

   
    var countoffset = $(".announcement_outer").offset().top;
    // calling home video height function
    videoHeight();

    $(window).resize(function() {
        videoHeight();
    });

    $(window).scroll(windowScroll);

});

$("#scrolldown").click(function() {
    $(this).removeClass('addscroll');
});
$(".navbar-brand").click(function() {
    $("#scrolldown").addClass('addscroll');
    $("#scrolldown").removeClass('downContent');
    $(window).unbind('scroll');
    $(window).scroll(windowScroll);


});

function windowScroll(e) {
    // console.log(e);
    if ($(window).scrollTop() > 300) {
        $(".main_header").addClass("fixed");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".main_header").removeClass("fixed");
    }

    if (isAnimating) return;
    var countoffset = $(".announcement_outer").offset().top;
    var scrollDown = $("#scrolldown");
    var top = $(window).scrollTop();
    if (top >= 100 && scrollDown.hasClass('addscroll')) {
        $(window).scrollTop(100);
    } else if (!scrollDown.hasClass('addscroll') && !scrollDown.hasClass('downContent')) {
        scrollDown.addClass('downContent');
    } else if (top <= countoffset - 80 && scrollDown.hasClass('downContent')) {
        $(window).scrollTop(countoffset - 80);
    }
}
