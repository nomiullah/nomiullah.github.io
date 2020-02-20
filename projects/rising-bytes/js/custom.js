// AOS initialization
AOS.init();

// One Page Scroll
(function($){
	$(window).on("load",function(){
		
		/* Page Scroll to id fn call */
		$("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"#navigation-menu a"
		});
		
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	});

})(jQuery);

// Back to top
$(document).ready(function(){
	$winHeight = $(window).height();
      $('body').append('<div id="toTop" class="pulsating-circle"><div class="icon-arrow"></div></div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() >= $winHeight) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


// Header Fixed 
function scrollHeader(){
	if($(window).scrollTop() > 0){
		$('body').addClass('header-fixed');
	}else{
		$('body').removeClass('header-fixed');
	}
}
$(window).on("scroll",function(){
	scrollHeader();
});
$(document).ready(function(){
	scrollHeader();
});


// Mobile Menu
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = '';

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

// slowmo.addEventListener('click', function(e){
// 	this.classList.toggle('is-slowmo');
// });

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('ready', function(e) {
	// slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});


// ATF Animation
$(window).bind('load', function(){
	$('.atf').addClass('show').delay(1000).queue(function(){
    	$('.showme1').addClass('show').delay(500).queue(function(){
    		$('.showme2').addClass('show').delay(500).queue(function(){
    			$('.showme3').addClass('show').delay(500).queue(function(){
    				$('.showme4').addClass('show');	
    			});
    		});
    	});
	});
});