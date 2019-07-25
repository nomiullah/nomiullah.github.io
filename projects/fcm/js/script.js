$(function () {
			

	$('[data-toggle="tooltip"]').tooltip();
	
	// table click
	var rows = $('.table-click .table-head .selectable');  
		rows.click(function() {
		$(".table-click tr").children().removeClass('highlight');  
		var index = $(this).prevAll().length; 
		$(".table-click tr").find(':nth-child(' + (index + 1) + ')').addClass('highlight');
	});
		
	// chozen jquery add
	$(".chosen").data("placeholder","Select Team").chosen();
	
	// scrollbar jquery add
	$('.scrollbar1').tinyscrollbar();
			
	
	
	$(".sidebar-section > ul > li > a").click (function () {
		if( $(this).parent().hasClass('active') ){
			$(this).parent().removeClass('active');
		}
		else{
			$(".sidebar-section li").removeClass('active');
			$(".dropdown-sidebar").removeClass('exp');
			$(".dropdown-sidebar > ul").slideUp();
			
			$(this).parent().addClass('active');
		}
		return false;
	});
	
	// dropdown
	$(".dropdown-sidebar > a").click (function () {
		if( $(this).parent().hasClass('exp') ){
			$(this).parent().removeClass('exp');
			$(this).next("ul").slideUp();
		}
		else{
			$(this).parent().addClass('exp');
			$(this).next("ul").slideDown();
		}
	});
	
	// sub dropdown
	$(".dropdown-second-menu > a").click (function () {
		if( $(this).parent().hasClass('active-second') ){
			$(this).parent().removeClass('active-second');
			$(this).next("ul").slideUp();
		}
		else{
			$(".dropdown-second-menu").removeClass('active-second');
			$(".dropdown-third-level").slideUp();
			
			$(this).parent().addClass('active-second');
			$(this).next("ul").slideDown();
		}
		return false;
	});
	
	// third level only click
	$(".dropdown-third-level a").click (function () {
		if( $(this).parent().hasClass('active-third') ){
			$(this).parent().removeClass('active-third');
		}
		else{
			$(".dropdown-third-level li").removeClass('active-third');
			$(this).parent().addClass('active-third');
		}
		return false;
	});
	
	
	// tabs
	$('.tabs-section a').click(function(){
		var newContents = $(this).attr('href').slice(1);
		
		$(this).parents(".tabs-wrap").find('.tabs-content').hide();
		$('#'+newContents).show();
		$(this).parents(".tabs-wrap").find('.tabs-section li').removeClass('active');
		$(this).parent().addClass('active');
		
		$('.scrollbar1').tinyscrollbar();
		return false;
	});
	
	
	// common link
	$('.common-link').click(function(){
		var newVal = $(this).attr('href').slice(1);
		$('#'+newVal).show();
		return false;
	});
	$('.common-close').click(function(){
		var newVal2 = $(this).attr('href').slice(1);
		$('#'+newVal2).hide();
		return false;
	});
	
	// edit from popup (send quote)
	$('.edit-popup').click(function(){
		$(this).parents('.edit-content').hide();
		$(this).parents('.edit-content').next().show();
		return false;
	});
	$('.edit-close').click(function(){
		$(this).parents('.info-edit').hide();
		$(this).parents('.info-edit').prev().show();
		return false;
	});
	
	
	
	
	//$( "#content-coming" ).load( "ajax/popup-edit.html #content-wrap" );
	

// add/edit popup section
	// edit popup
	$(".edit").click (function () {
		$(".blur-overlay").show();
		$("#container-fluid").addClass("blur-text");
		
		$("#fiber-jumper-popup").hide();
		$("#add-edit-popup").show(function () {
			$('.scrollbar1').tinyscrollbar();
		});
		//$("#content-coming").load( "ajax/popup-edit.html #content-wrap" );
		
		// for cancel special in configurator
		$(".cancel-ed-cogn").hide();
		$(".cancel-direct").show();
	    $("#content-coming").load("ajax/popup-edit.html #content-wrap", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
            	$(".chosen").data("placeholder","Select Team").chosen();
				$('select.styled').chosen();/*its comes from custom-form-elements*/
          		$('.scrollbar1').tinyscrollbar_update();
            	 
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
	});
	
	// edit from configurator popup
	$(".edit-popup").click (function () {
		$(".cancel-direct").hide();
		$(".cancel-ed-cogn").show();
	});
	
	$(".cancel-ed-cogn").click (function () {
		$("#add-edit-popup").hide();	
		$("#fiber-jumper-popup").show(); 
	});



// cancel ajax popup 
	$(".cancel").click (function () {
		$(".blur-overlay").hide();
		$("#container-fluid").removeClass("blur-text");
		$("#header-wrap, #main .sidebar, .fiber-section-wrap, .fiber-title").removeClass("blur-text");
								  
		$(".sidebar-section li").removeClass('active');
		$(this).parents(".popup-section").hide();
		
		
		$("body").removeClass('table-level');
		$("body").removeClass('table-level-closest');
		$("body").removeClass('table-level-standard');
		
		
		$(".closest-hide").hide();
		$(".sidebar-fiber").removeClass('fiber-lg');
		$(".closest-match").removeClass('active');
		$(".closest-match").children('span').html('SHOW CLOSEST MATCH');
		$(".closest-match").parents(".popup-content").removeClass('popup-closest-active');
		
		return false;
	});
	
	
	$(".close-popup").click (function () {
		$(".blur-overlay").hide();
		$(this).parents('.popup-section').hide();
		$("#container-fluid").removeClass("blur-text");
		return false;
	});
	
	
	// stretch table when its pupup
	$(".stretch-link").click (function () {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(".selection-wrap").removeClass("stretch-active");
			$(".selection-table-wrap").removeClass("stretch-active");
		}else{
			$(this).addClass('active');
			$(".selection-wrap").addClass("stretch-active");
			$(".selection-table-wrap").addClass("stretch-active");
		}
		return false;
	});
	


// Ajax popups common elements that use in all buttons
	$(".common-element").click (function () {
		var newPopup = $(this).attr("href");
		$(newPopup).show();
		$("#add-edit-popup").hide();	
		$('.scrollbar1').tinyscrollbar();
		
		$("#header-wrap, #main .sidebar, .fiber-section-wrap, .fiber-title").addClass("blur-text");		
		$(".blur-overlay").hide();
		$("#container-fluid").removeClass("blur-text");
		$("body").addClass('table-level');
		
		$(".stretch-link").show();
	});
	

// filter/jumper popup section
$(".filter-popup").click (function () {
	
	$(".stretch-link").show();
	
	$("#fiber-jumper-popup").load("ajax/configurator.html #fiber-jumper-ajax", function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success")
		
		$(".cancel").click (function () {
			$(".blur-overlay").hide();
			$("#container-fluid").removeClass("blur-text");
			$("#header-wrap, #main .sidebar, .fiber-section-wrap, .fiber-title").removeClass("blur-text");
									  
			$(".sidebar-section li").removeClass('active');
			$(this).parents(".popup-section").hide();
			
			
			$("body").removeClass('table-level');
			$("body").removeClass('table-level-closest');
			$("body").removeClass('table-level-standard');
			
			
			$(".closest-hide").hide();
			$(".sidebar-fiber").removeClass('fiber-lg');
			$(".closest-match").removeClass('active');
			$(".closest-match").children('span').html('SHOW CLOSEST MATCH');
			$(".closest-match").parents(".popup-content").removeClass('popup-closest-active');
			
			$(".stretch-link").hide();
			$(".stretch-link").removeClass('active');
			$(".selection-wrap").removeClass("stretch-active");
			$(".selection-table-wrap").removeClass("stretch-active");
			
			return false;
		});
		
		
		$('.select-view select').change(function(){
			if ($(this).val() == 'standard-view'){
				$(this).parents('.popup-section').addClass('standard-popup');
				$("body").addClass('table-level-standard');
			} else {
				$(this).parents('.popup-section').removeClass('standard-popup');
				$("body").removeClass('table-level-standard');
			}
		});
		
		$(".select-view select").val("2");	
		
	
		$(".chosen").data("placeholder","Select Team").chosen();
		$('select.styled').chosen();/*its comes from custom-form-elements*/
		//calc;
		$('.minus, .plus').click(function (e) {
			e.preventDefault();    
			var $input = $(this).siblings('.value');
			var val = parseInt($input.val(), 10);
			if($(this).hasClass('minus')){
				$input.val(val - 1);
			}else{
				$input.val(val + 1);
			}
		});
		$(".question-link").click (function () {
			if( $(this).hasClass('active') ){
				$(this).removeClass('active');
				$(this).next('.popup-mini').hide();
			}
			else{
				$(".popup-mini").hide();
				$(".question-link").removeClass('active');
				
				$(this).addClass('active');
				$(this).next('.popup-mini').show();
				$('.scrollbar1').tinyscrollbar();
			}
			return false;
		});
		// Closest Match
		$(".closest-match").click (function () {
			if( $(this).hasClass('active') ){
				$(this).removeClass('active');
				$(".closest-hide").hide();
				$(".sidebar-fiber").removeClass('fiber-lg');
				$(this).children('span').html('SHOW CLOSEST MATCH');
				$(this).parents(".popup-content").removeClass('popup-closest-active');
				$("body").removeClass('table-level-closest');
			}
			else{
				$(this).addClass('active');
				$(".closest-hide").show();
				$(".sidebar-fiber").addClass('fiber-lg');
				$(this).children('span').html('HIDE CLOSEST MATCH');
				$(this).parents(".popup-content").addClass('popup-closest-active');
				$("body").addClass('table-level-closest');
			}
			return false;
		});
		// edit title
		$(".edit-title").click (function () {
			$(this).parents(".edit-content").hide();
			$(this).parents(".edit-content").next(".edit-done-wrap").show();
			return false;
		});
		$(".edit-done").click (function () {
			$(this).parents(".edit-done-wrap").prev(".edit-content").show();
			$(this).parents(".edit-done-wrap").hide();
			return false;
		});
		// part from bottom
		$(".load").click (function () {
			$(this).parents(".table-strip-top").addClass('table-strip-active');
		});
		$(".part-number-edit .edit-done").click (function () {
			$(this).parents(".table-strip-top").removeClass('table-strip-active');
		});
		
		
		
		$(".menu-configrator").click (function () {
			if( $(this).hasClass('exp') ){
				$(this).removeClass('exp');
				$(this).parents(".popup-section").removeClass("configrator-active");
			}
			else{
				$(this).addClass('exp');
				$(this).parents(".popup-section").addClass("configrator-active");
			}
			return false;
		});
		
		$(".sidebar-section > ul > li > a").click (function () {
			if( $(this).parent().hasClass('active') ){
				$(this).parent().removeClass('active');
			}
			else{
				$(".sidebar-section li").removeClass('active');
				$(".dropdown-sidebar").removeClass('exp');
				$(".dropdown-sidebar > ul").slideUp();
				
				$(this).parent().addClass('active');
			}
			return false;
		});
		
		// dropdown
		$(".dropdown-sidebar > a").click (function () {
			if( $(this).parent().hasClass('exp') ){
				$(this).parent().removeClass('exp');
				$(this).next("ul").slideUp();
			}
			else{
				$(this).parent().addClass('exp');
				$(this).next("ul").slideDown();
			}
		});
		
		// sub dropdown
		$(".dropdown-second-menu > a").click (function () {
			if( $(this).parent().hasClass('active-second') ){
				$(this).parent().removeClass('active-second');
				$(this).next("ul").slideUp();
			}
			else{
				$(".dropdown-second-menu").removeClass('active-second');
				$(".dropdown-third-level").slideUp();
				
				$(this).parent().addClass('active-second');
				$(this).next("ul").slideDown();
			}
			return false;
		});
		
		// third level only click
		$(".dropdown-third-level a").click (function () {
			if( $(this).parent().hasClass('active-third') ){
				$(this).parent().removeClass('active-third');
			}
			else{
				$(".dropdown-third-level li").removeClass('active-third');
				$(this).parent().addClass('active-third');
			}
			return false;
		});
		
			
		if(statusTxt == "error")
			alert("Error: " + xhr.status + ": " + xhr.statusText);
	});
	return false;
});
	
	
	

// filter/jumper popup section
$(".link-mtp").click (function () {
	
	
	$("#mtp-popup").load("ajax/mtp.html #mtp-popup-ajax", function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success")
			
			// cancel popup recall
			$(".cancel").click (function () {
				$(".blur-overlay").hide();
				$("#container-fluid").removeClass("blur-text");
				$("#header-wrap, #main .sidebar, .fiber-section-wrap, .fiber-title").removeClass("blur-text");
										  
				$(".sidebar-section li").removeClass('active');
				$(this).parents(".popup-section").hide();
				
				
				$("body").removeClass('table-level');
				$("body").removeClass('table-level-closest');
				$("body").removeClass('table-level-standard');
				
				
				$(".closest-hide").hide();
				$(".sidebar-fiber").removeClass('fiber-lg');
				$(".closest-match").removeClass('active');
				$(".closest-match").children('span').html('SHOW CLOSEST MATCH');
				$(".closest-match").parents(".popup-content").removeClass('popup-closest-active');
				
				$(".stretch-link").hide();
				$(".stretch-link").removeClass('active');
				$(".selection-wrap").removeClass("stretch-active");
				$(".selection-table-wrap").removeClass("stretch-active");
				return false;
			});
			
			
			$('.select-view select').change(function(){
				if ($(this).val() == 'standard-view'){
					$(this).parents('.popup-section').addClass('standard-popup');
					$("body").addClass('table-level-standard');
				} else {
					$(this).parents('.popup-section').removeClass('standard-popup');
					$("body").removeClass('table-level-standard');
				}
			});
			
			$(".select-view select").val("2");	
			
		
			$(".chosen").data("placeholder","Select Team").chosen();
			$('select.styled').chosen();/*its comes from custom-form-elements*/
			//calc;
			$('.minus, .plus').click(function (e) {
				e.preventDefault();    
				var $input = $(this).siblings('.value');
				var val = parseInt($input.val(), 10);
				if($(this).hasClass('minus')){
					$input.val(val - 1);
				}else{
					$input.val(val + 1);
				}
			});
			$(".question-link").click (function () {
				if( $(this).hasClass('active') ){
					$(this).removeClass('active');
					$(this).next('.popup-mini').hide();
				}
				else{
					$(".popup-mini").hide();
					$(".question-link").removeClass('active');
					
					$(this).addClass('active');
					$(this).next('.popup-mini').show();
					$('.scrollbar1').tinyscrollbar();
				}
				return false;
			});
			// Closest Match
			$(".closest-match").click (function () {
				if( $(this).hasClass('active') ){
					$(this).removeClass('active');
					$(".closest-hide").hide();
					$(".sidebar-fiber").removeClass('fiber-lg');
					$(this).children('span').html('SHOW CLOSEST MATCH');
					$(this).parents(".popup-content").removeClass('popup-closest-active');
					$("body").removeClass('table-level-closest');
				}
				else{
					$(this).addClass('active');
					$(".closest-hide").show();
					$(".sidebar-fiber").addClass('fiber-lg');
					$(this).children('span').html('HIDE CLOSEST MATCH');
					$(this).parents(".popup-content").addClass('popup-closest-active');
					$("body").addClass('table-level-closest');
				}
				return false;
			});
			// edit title
			$(".edit-title").click (function () {
				$(this).parents(".edit-content").hide();
				$(this).parents(".edit-content").next(".edit-done-wrap").show();
				return false;
			});
			$(".edit-done").click (function () {
				$(this).parents(".edit-done-wrap").prev(".edit-content").show();
				$(this).parents(".edit-done-wrap").hide();
				return false;
			});
			// part from bottom
			$(".load").click (function () {
				$(this).parents(".table-strip-top").addClass('table-strip-active');
			});
			$(".part-number-edit .edit-done").click (function () {
				$(this).parents(".table-strip-top").removeClass('table-strip-active');
			});
			
			$(".menu-configrator").click (function () {
				if( $(this).hasClass('exp') ){
					$(this).removeClass('exp');
					$(this).parents(".popup-section").removeClass("configrator-active");
				}
				else{
					$(this).addClass('exp');
					$(this).parents(".popup-section").addClass("configrator-active");
				}
				return false;
			});
			
			$(".sidebar-section > ul > li > a").click (function () {
			if( $(this).parent().hasClass('active') ){
				$(this).parent().removeClass('active');
			}
			else{
				$(".sidebar-section li").removeClass('active');
				$(".dropdown-sidebar").removeClass('exp');
				$(".dropdown-sidebar > ul").slideUp();
				
				$(this).parent().addClass('active');
			}
			return false;
		});
		
		// dropdown
		$(".dropdown-sidebar > a").click (function () {
			if( $(this).parent().hasClass('exp') ){
				$(this).parent().removeClass('exp');
				$(this).next("ul").slideUp();
			}
			else{
				$(this).parent().addClass('exp');
				$(this).next("ul").slideDown();
			}
		});
		
		// sub dropdown
		$(".dropdown-second-menu > a").click (function () {
			if( $(this).parent().hasClass('active-second') ){
				$(this).parent().removeClass('active-second');
				$(this).next("ul").slideUp();
			}
			else{
				$(".dropdown-second-menu").removeClass('active-second');
				$(".dropdown-third-level").slideUp();
				
				$(this).parent().addClass('active-second');
				$(this).next("ul").slideDown();
			}
			return false;
		});
		
		// third level only click
		$(".dropdown-third-level a").click (function () {
			if( $(this).parent().hasClass('active-third') ){
				$(this).parent().removeClass('active-third');
			}
			else{
				$(".dropdown-third-level li").removeClass('active-third');
				$(this).parent().addClass('active-third');
			}
			return false;
		});
			
			 
		if(statusTxt == "error")
			alert("Error: " + xhr.status + ": " + xhr.statusText);
	});
	return false;
});



	
	
	
	// popup menu
	$("#menu-edit").click (function () {
		if( $(this).hasClass('exp') ){
			$(this).removeClass('exp');
			$(this).parents(".popup-section").removeClass("popup-compressed");
		}
		else{
			$(this).addClass('exp');
			$(this).parents(".popup-section").addClass("popup-compressed");
		}
		return false;
	});
	
	// button for configraturo popup
	$(".menu-configrator").click (function () {
		if( $(this).hasClass('exp') ){
			$(this).removeClass('exp');
			$(this).parents(".popup-section").removeClass("configrator-active");
		}
		else{
			$(this).addClass('exp');
			$(this).parents(".popup-section").addClass("configrator-active");
		}
		return false;
	});
	
	
	$(".send-button").click (function () {
		$("html, body").animate({ scrollTop: "0" },0); 
		
		var newPopup2 = $(this).attr("href");
		$(".popup-section").hide();
		$(newPopup2).show();
		$("#container-fluid").addClass("blur-text");		
		return false;
		
	});
	

//
	// dropdown custom
	$(".custom-select > a").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).next().hide();
		}
		else{
			$(this).addClass('active');
			$(this).next().show();
		}
		return false;
	});
	$(".select-options a").click (function () {
		var newSelVal = $(this).html();
		$(this).parents('.custom-select').find('.select-custom span').html(newSelVal);
		
		$(this).parents('.select-options').prev().removeClass('active');
		$(this).parents('.select-options').hide();
		return false;
	});
	$("body").click (function () {
		$(".custom-select > a").removeClass('active');
		$(".select-options").hide();
	});
	
	
	
	// fiber star
	$(".star-fiber").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).parents(".fiber-section").removeClass('fiber-favorite');
		}
		else{
			$(this).addClass('active');
			$(this).parents(".fiber-section").addClass('fiber-favorite');
		}
		return false;
	});
	$(".fiber-show").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).parents(".fiber-section").removeClass('fiber-active');
		}
		else{
			$(this).addClass('active');
			$(this).parents(".fiber-section").addClass('fiber-active');
		}
		$('.scrollbar1').tinyscrollbar();
		return false;
	});
// fiber show, hide all	
	$(".icon-expand").click (function () {
		$(this).addClass('active');
		$(".fiber-section").addClass('fiber-active');
		$(".fiber-show").addClass('active');
		$('.scrollbar1').tinyscrollbar();
		
		$(this).hide();
		$('.icon-collapse').show();
		return false;
	});
	$(".icon-collapse").click (function () {
		$(this).addClass('active');
		$(".fiber-section").removeClass('fiber-active');
		$(".fiber-show").removeClass('active');
		$('.scrollbar1').tinyscrollbar();
		
		$(this).hide();
		$('.icon-expand').show();
		return false;
	});
	
	
	
	
	// reset button from table
	$(".reset-table").click (function () {
		$(".table-section th").removeClass('headerSortDown');
		$(".table-section th").removeClass('headerSortUp');
		
		$(".table-section th").removeClass('highlight');
		$(".table-section td").removeClass('highlight');
	});
	


// popup
	// custom dropdown in popup
	$(".select-pricing").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".select-pricing-option").hide();
		}
		else{
			$(this).addClass('active');
			$(".select-pricing-option").show();
			$('.scrollbar1').tinyscrollbar();
		}
		return false;
	});
	
	// common link
	$(".show-link").click (function () {
		var newShow = $(this).attr('href').slice(1);
		$('#'+newShow).show();
		return false;
	});
	
	
	$(".save-update").click (function () {
		$(".alert-save").show();
		return false;
	});
	
	
	$(".question-link").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).next('.popup-mini').hide();
		}
		else{
			$(".popup-mini").hide();
			$(".question-link").removeClass('active');
			
			$(this).addClass('active');
			$(this).next('.popup-mini').show();
			$('.scrollbar1').tinyscrollbar();
		}
		return false;
	});
	
	$("body").click (function () {
		$(".popup-mini").hide();
		$(".question-link").removeClass('active');
	});
	
	
	// Closest Match
	$(".closest-match").click (function () {
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(".closest-hide").hide();
			$(".sidebar-fiber").removeClass('fiber-lg');
			$(this).children('span').html('SHOW CLOSEST MATCH');
			$(this).parents(".popup-content").removeClass('popup-closest-active');
			$("body").removeClass('table-level-closest');
		}
		else{
			$(this).addClass('active');
			$(".closest-hide").show();
			$(".sidebar-fiber").addClass('fiber-lg');
			$(this).children('span').html('HIDE CLOSEST MATCH');
			$(this).parents(".popup-content").addClass('popup-closest-active');
			$("body").addClass('table-level-closest');
		}
		return false;
	});
	
	// edit title
	$(".edit-title").click (function () {
		$(this).parents(".edit-content").hide();
		$(this).parents(".edit-content").next(".edit-done-wrap").show();
		return false;
	});
	$(".edit-done").click (function () {
		$(this).parents(".edit-done-wrap").prev(".edit-content").show();
		$(this).parents(".edit-done-wrap").hide();
		return false;
	});
	// part from bottom
	$(".load").click (function () {
		$(this).parents(".table-strip-top").addClass('table-strip-active');
	});
	$(".part-number-edit .edit-done").click (function () {
		$(this).parents(".table-strip-top").removeClass('table-strip-active');
	});
	
	
	$(".return-false").click (function () {
		return false;
	});
	
	
});


$(document).ready(function() {  
	$('.select-view select').change(function(){
		if ($(this).val() == 'standard-view'){
			$(this).parents('.popup-section').addClass('standard-popup');
			$("body").addClass('table-level-standard');
		} else {
			$(this).parents('.popup-section').removeClass('standard-popup');
			$("body").removeClass('table-level-standard');
		}
	});
	
	$(".select-view select").val("2");	
});



//
$(document).ready(function() {  
	function calc (argument) {
		$('.minus, .plus').click(function (e) {
			e.preventDefault();    
			var $input = $(this).siblings('.value');
			var val = parseInt($input.val(), 10);
			$input.val(val + ($(this).hasClass('minus') ? -1 : 1));
		});
	}
	calc();
});







