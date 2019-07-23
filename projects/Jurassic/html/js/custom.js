 
		$(document).ready(function(){
			
			if ($(window).width() < 960) {
				$('.content-box').addClass('hidden');
			}
			else {
			   $('.content-box').removeClass('hidden');
			}
			
			$( ".show-content" ).click(function(event ) {
				event.stopPropagation();
				$(this).parent().siblings().children().removeClass('active');
				$(this).addClass('active');				
				$('.content-box').removeClass('hidden');
				$('.content-box').addClass('show');
				$('.browse-catalog').addClass('hidden');
			});
			$( ".product" ).click(function(event ) {
				event.stopPropagation();
				$(this).parent().siblings().children().removeClass('active');
				$(this).addClass('active');		
				$('.browse-catalog').removeClass('hidden');
				$('.browse-catalog').addClass('show');
				$('.content-box').removeClass('show');
				$('.content-box').addClass('hidden');
				 
			});
			 
		 $('.owl-carousel').owlCarousel({
			loop:false,
			navigation:false,
			autoplay:true,
			margin:10,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:true
				},
				600:{
					items:4,
					nav:false
				},
				1000:{
					items:5,
					nav:true,
					loop:false
				}
			}
		})
		 $('.owl-carousel-2').owlCarousel({
			loop:false,
			navigation:false,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:true
				},
				600:{
					items:4,
					nav:false
				},
				1000:{
					items:5,
					nav:true,
					loop:false
				}
			}
		})
		});
		function ScrollToPos(target,act){
			if(target == "#"){
			   $('html,body').animate({ scrollTop: 0 }, 1000);
			  }else{
			   $('html,body').animate({ scrollTop: $(target).offset().top }, 1000);
			}	
		}
		jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
new WOW().init();
});
$('.selectpicker,.selectpicker2').selectpicker({
  style: 'btn-info',
  size: 4
});

		$( ".header-menu" ).click(function() {
			$('.menu').slideToggle('slow');
		});
		
		function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
