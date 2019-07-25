
$(document).ready(function(){
	$(".menu-btn").click(function(){
		$(this).toggleClass("show")
		$(".profile-dropdown").slideToggle("show");	
	});



	$(".btn-toggle.side").click(function(){
		$(this).toggleClass("show")
		$(".sidebar").toggleClass("show");	
	});

	$(".btn-toggle.team").click(function(){
		$(this).toggleClass("show")
		$(".team-bar").toggleClass("show");	
	});

	$(".week-sec .week-no").click(function(){
		$(".week-content").slideToggle("slow");	
	});

	// $(".week-info").click(function(){
	// 	$(".check-list").slideToggle("slow");	
	// });

	$(".profile-form .form-control").focus(function() { 
        $(this).siblings("label").css({"top": -10, "font-size": "0.85rem"}); 
    });

	// TeamBar JS
    $("#team-link").click(function(e){
    	e.preventDefault();
    	var team = $(this).text();
    	$(this).parents(".team-bar").find(".text-show").text(team);
    	$(this).parents(".team-bar").children("#cohort-list").removeClass("show");
    	$(this).parents(".team-bar").children("#team-list").addClass("show");
    });
    $("#cohort-link").click(function(e){
    	e.preventDefault();
    	var cohort = $(this).text();
    	$(this).parents(".team-bar").find(".text-show").text(cohort);
    	$(this).parents(".team-bar").children("#team-list").removeClass("show");
    	$(this).parents(".team-bar").children("#cohort-list").addClass("show");
    });

    // ChatBox JS Start
    $('.team-member').on('click', function(e) {
		e.preventDefault();
		$('#live-chat').fadeIn(500);
	});


	$('.chat-close').click(function(e) {
		e.preventDefault();
		$('#live-chat').fadeOut(300);
	});

	$('#live-chat .chat-header').click(function() {
		$('.chat').slideToggle(500, 'swing');
		$('.chat-message-counter').fadeToggle(500, 'swing');
	});


	var count = document.querySelectorAll(".chat-message");
	var l = count.length;
	$(".chat-message-counter").text(l);
	// ChatBox JS End


	
});


