
// wow init
new WOW().init();


$(document).ready(function(){

	// steps scripts with animate classes
	$(".btn").click(function(){
	   var index = $(this).parents(".main-section").index();
	   if(index == 6){
			$(this).parents(".main-section").children(".modal-1").addClass("show fadeInDown fadeInDown-imp");
			$(".btn").click(function(){
				var child_index = $(this).parents(".modal").index();
				if(child_index < 4){
					$(this).parents(".modal").prevAll().removeClass("show");
					$(this).parents(".modal").removeClass("show");
					$(this).parents(".modal").next().addClass("show fadeInDown fadeInDown-imp");
				} else {
					$(this).parents(".main-section").removeClass("show");
					$(this).parents(".main-section").next().addClass("show");
					$(this).parents(".main-section").next().find(".result-box").addClass("flipInY flipInY-imp");
					$(this).parents(".main-section").next().find(".result-footer").addClass("fadeInUp fadeInUp-imp");
					$(".trigger").click(function(){
						$(this).parents("section").removeClass("show");
						$(this).parents("section").next().addClass("show");
						$(this).parents("section").next().find(".result-box").addClass("flipInY flipInY-imp");
						$(this).parents("section").next().find(".result-footer").addClass("fadeInUp fadeInUp-imp");
						return false;
					});
				}
				return false;
			});
	   } else {
			$(this).parents(".main-section").removeClass("show");
			$(this).parents(".main-section").next().addClass("show");
			$(this).parents(".main-section").next().find(".contents .sub-heading").addClass("fadeInLeft fadeInLeft-imp");
			$(this).parents(".main-section").next().find(".contents .btn-list").addClass("fadeInRight fadeInRight-imp");
	   }
	   return false;
	});

	// scripts for modal close
	$(".close").click(function(){
		$(this).parents(".modal").removeClass("show");
	}); 

	//append sub-heading in the header
	$(".home-section .btn").click(function(){
		$(this).parents(".main-container").find('.header-content').append('<h2 class="sub-heading color-white">Questions to Assess Health Rating</h2>');
	});
})
