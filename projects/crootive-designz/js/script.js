//  nav scrolling
$('#nav').onePageNav();


//  custom nav active
$("#nav a").click (function () {
	$("#nav li").removeClass('active');
	$(this).parent().addClass('active');			 
});

// nav hover section
$('#home-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.home').addClass('active');
});
$('#about-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.about').addClass('active');
});
$('#process-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.process').addClass('active');
});
$('#services-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.services').addClass('active');
});
$('#testimonial-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.testimonial').addClass('active');
});
$('#portfolio-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.portfolio-link').addClass('active');
});
$('#contact-section-wrap').hover(function () {
	$('#nav li').removeClass('active');
	$('.contact').addClass('active');
});


// flex slider
$('.flexslider').flexslider({
	animation: "slide",
	directionNav: false,
	start: function(slider){
	$('body').removeClass('loading');
	}
});

//Portfolio
var $container = $('.portfolio');
$container.isotope({
	filter: '*',
	animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false,
	}
});

$('nav.primary ul a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});
  return false;
});

var $optionSets = $('nav.primary ul'),
	   $optionLinks = $optionSets.find('a');
 
	   $optionLinks.click(function(){
		  var $this = $(this);
	  // don't proceed if already selected
	  if ( $this.hasClass('selected') ) {
		  return false;
	  }
   var $optionSet = $this.parents('nav.primary ul');
   $optionSet.find('.selected').removeClass('selected');
   $this.addClass('selected'); 
});


