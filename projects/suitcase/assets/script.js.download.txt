// COLLAPSE HEADER
$(window).scroll(function(){

	var offset = $(window).scrollTop();

	if ( offset > 1 ) {
		$(".header").addClass("scrolled");
	} else {
		$(".header").removeClass("scrolled");
	}

});

// SET MIN HEIGHT FOR KEY POINTS
function prepareKeyPoints() {

	if ( $(window).width() > 500 ) {
		$(".keyPoints .grid > .row").each(function(){
			var height = $(this).find(".text").height();
			$(this).css("min-height", height + "px");
		});
	} else {
		$(".keyPoints .grid > .row").css("min-height", "");
	}

}

$(window).load(function(){ prepareKeyPoints(); })
$(window).resize(function(){ prepareKeyPoints(); })

// CASE STUDIES CAROUSEL
$('.caseStudies').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    prevArrow: "<button type=\"button\" class=\"slick-prev\"><svg viewBox=\"0 0 13 17\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 10.6736 17 C 11.0497 17 11.424 16.843 11.686 16.5372 C 12.1589 15.9863 12.0901 15.1609 11.5305 14.6942 L 4.1066 8.4969 L 11.5305 2.306 C 12.0892 1.8397 12.1589 1.0143 11.6865 0.463 C 11.2136 -0.0886 10.3771 -0.1567 9.8175 0.3093 L 0 8.4952 L 9.8175 16.6904 C 10.066 16.8978 10.3707 17 10.6736 17 Z\"/></svg></button>",
    nextArrow: "<button type=\"button\" class=\"slick-next\"><svg viewBox=\"0 0 12 17\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 1.3264 17 C 0.9503 17 0.576 16.8428 0.314 16.5371 C -0.1589 15.9863 -0.0901 15.1611 0.4695 14.6943 L 7.8934 8.4971 L 0.4695 2.3062 C -0.0892 1.8398 -0.1589 1.0142 0.3135 0.4629 C 0.7864 -0.0889 1.6229 -0.1567 2.1825 0.3096 L 12 8.4951 L 2.1825 16.6904 C 1.934 16.8979 1.6293 17 1.3264 17 Z\"/></svg></button>",
});

// INTERACTIONS
$(window).load(function() {

    $(".landingArea, .caseStudies, .cta, .subscribe").viewportChecker({
        classToAdd: "visible",
        classToAddForFullView: "",
        offset: 150,
        invertBottomOffset: 0,
        repeat: false
    });

    $(".introduction, .keyPoints > .grid > .row").viewportChecker({
        classToAdd: "visible",
        classToAddForFullView: "",
        offset: 175,
        invertBottomOffset: 0,
        repeat: false
    });

});

$("a.enquire").click(function(){
	var scrollPos = $(document).scrollTop();
	if ( scrollPos > 0 ) {
		$("html, body").animate({ scrollTop: 0 }, 750).delay(0).queue(function(next){
			$("body > *:not(#enterprise)").fadeOut();
			$("#enterprise").show().addClass("visible");
			next();
		});
	} else {
		$("body > *:not(#enterprise)").fadeOut();
		$("#enterprise").show().addClass("visible");
	}
});

$("a.back").click(function(){
	var scrollPos = $(document).scrollTop();
	if ( scrollPos > 0 ) {
		$("html, body").animate({ scrollTop: 0 }, 750).delay(0).queue(function(next){
			$("body > *").fadeIn();
			$("#enterprise").removeClass("visible");
			next();
		});
	} else {
		$("body > *").fadeIn();
			$("#enterprise").removeClass("visible");
	}
		
});

$("select").change(function () {
	if($(this).val() == "") $(this).addClass("empty");
	else $(this).removeClass("empty")
});

$("select").change();

// JSON FORM SUBMIT
$(window).load(function(){

	$(".errorBox").hide();
	$(".thanks").hide();

	$(".form button").click(function(){

		$(".errorBox").hide();
		$(".errorBox ul").html("");

		// VALIDATE FIELDS
		var errorMessage = "";
		if ( $("input[name='name']").val() == "" ) 	{ errorMessage = errorMessage + "<li>We need your name</li>"; }
		if ( $("input[name='email']").val() == "" ) { errorMessage = errorMessage + "<li>You must provide a valid email address</li>"; }
		if ( $("input[name='token']").val() == "" ) { errorMessage = errorMessage + "<li>An error occurred</li>"; }
		if ( $("select[name='budget']").val() == "" ) { errorMessage = errorMessage + "<li>What is your budget?</li>"; }
		if ( $("textarea[name='notes']").val() == "" ) { errorMessage = errorMessage + "<li>Can you tell us a little about your campaign?</li>"; }

		// IF VALIDATION FAILS
		if ( errorMessage !== "" ) {
			$(".errorBox ul").html(errorMessage);
			$(".errorBox").fadeIn();
			$('html, body').animate({ scrollTop: $(".errorBox").offset().top - 40 }, 1000);
		}
		
		// IF VALIDATION PASSES
		if ( errorMessage == "" ) {

			var token = $("input[name='token']").val();
			var name = $("input[name='name']").val();
			var email = $("input[name='email']").val();
			var company = $("input[name='company']").val();
			var budget = $("select[name='budget']").val();
			var notes = $("textarea[name='notes']").val();

			// PREPARE JSON
			var data = {"name": name, "email": email, "company": company, "token": token, "budget": budget, "notes": notes};
				data = $(this).serialize() + "&" + $.param(data);
			
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: data,
				success: function(data) {
					$(".thanks").fadeIn();
					$("input[name='token']").val("");
					$("input[name='name']").val("");
					$("input[name='email']").val("");
					$("input[name='company']").val("");
					$("select[name='budget']").val("");
					$("textarea[name='notes']").val("");
				},
				error: function(xhr, textStatus, errorThrown) {
					alert(errorThrown);
				}
			});
		}

	});

});

// SCROLL DOWN ON CLICK
$(window).load(function(){

	$(".landingArea a").click(function(){
	   $('body,html').animate({scrollTop: $(".introduction").offset().top - 68},1000);
	})

});