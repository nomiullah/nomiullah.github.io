$(document).ready(function(){
 	$( ".toggle-sidebar a " ).click(function() {
		 $('.sidebar').toggleClass('siderbarsmall');
		 $('body').toggleClass('compactview');
		 
	});
	 
	$(".landing-right").hover(
	  function () {
		$( ".landing-left").addClass("right-hover");
	  },
	  function () {
		$( ".landing-left").removeClass("right-hover");
	  }
	);
	$('.btn2').click(function() {
    $('.modal').prop('class', 'modal fade').addClass( $(this).data('direction') );
    
	
});

 (function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);

   
});
 $("form input[type='password'").keyup(function () {
       if ($(this).val()) {
          $("form  label.showpassword").show();
		  $(".login-content .login-form form input[type='submit']").addClass('activebtn');
       }
       else {
          $("form  label.showpassword").hide();
		    $(".login-content .login-form form input[type='submit']").removeClass('activebtn');
       }
    });
	
 
 
    $(function () {
        $(".showpassword input[type='checkbox']").bind("click", function () {
            var txtPassword = $("#txtPassword");
            if ($(this).is(":checked")) {
                 $('#txtPassword').attr('type','text');
				  
            } else {
                 $('#txtPassword').attr('type','password');
            }
        });
    });
	
	$( ".logout-action a" ).click(function() {
		 $('.sidebar .user-detail .user-account').slideToggle('fast');
	});
	$( ".main-content .data-entry-detail .data-entry-table table tr td.action > a" ).click(function() { 
		$(this).next('.main-content .data-entry-detail .data-entry-table table tr td .edit-packet').toggle(0, function () {
			$('.main-content .data-entry-detail .data-entry-table table tr td .edit-packet').not(this).hide();
		});
		return false ;
	});
 
	$('.selectpicker').selectpicker({
	  style: 'btn-info',
	  size: 4
	});
	$( ".main-content .top-left-icon a" ).click(function() {
		$(this).toggleClass('summary-visible');
		$('.program-summary-detail').toggleClass('summary-visible');
	});
	$( ".main-content .program-summary-detail .apply-button button.clear" ).click(function() {
  		$('.apply-button').toggleClass('no-data');
 		$('.main-content .top-left-icon span').toggle();
		$('.program-summary-detail').removeClass('summary-visible');
		$('.main-content .top-left-icon').toggleClass('nodata');
 	});
    
	
if ($(window).width() < 1280) {
    $('.sidebar').addClass('siderbarsmall');
	 $('body').addClass('compactview');
} else {
    $('.sidebar').removeClass('siderbarsmall');
	 $('body').removeClass('compactview');
}
$( window ).resize(function() {

	if ($(window).width() < 1280) {
    $('.sidebar').addClass('siderbarsmall');
	 $('body').addClass('compactview');
} else {
    $('.sidebar').removeClass('siderbarsmall');
	 $('body').removeClass('compactview');
}
});