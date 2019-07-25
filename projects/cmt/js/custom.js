$(document).ready(function() {
	
    // AOS Animation Init
    AOS.init();


    // Menu Toggle JS
    $(".menu-btn").click(function(){
		$("body").toggleClass("show");
		$(this).toggleClass("show");
	});


   // Owl Carousel JS
  $(".owl-carousel").owlCarousel({
    rewind: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: {
        0:{
            items: 1
        },
        576:{
            items: 2
        },
        768:{
            items: 3
        },
        992:{
            items:4
        },
        1199: {
        	items:5
        }
    }
  });


    // Submit f0rm, Invalid Email JS,
    $('#submit_btn').click(function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var regEx =  /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!regEx.test(email)) {
          $('#email').before('<span class="error">•Please enter valid input</span>');
          $('#email').parent().addClass("fixError");
          $("#email").css("border-left", "4px solid #E3001B")
        }

        var inputs = $('.form-control');
        inputs.filter('.form-control').each(function(){
            var inputValue = $(this).val();
            if(!inputValue.length){
                $(this).css("border-left", "4px solid #E3001B")
            } else {
                $(this).css("border-left", "0")
            }
        });
        
    });

   $('.form-control').blur(function(){
   var value = $(this).val();
        if(value == '') {
           $(this).css("border-left", "4px solid #E3001B")
        } 
   });
   $('.form-control').focus(function(){
   var value = $(this).val();
        if(value == '') {
            $(this).css("border-bottom", "none")
        }
   });
});


// headerFixed JS On wind0w scr0ll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 100) {
        $(".header").addClass("header-fixed");
    }else {
        $(".header").removeClass("header-fixed");
    }
});