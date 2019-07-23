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

$(document).on('click', '.toggle-button', function() {
    $(this).toggleClass('toggle-button-selected'); 
    $('.remember-me span').text(function(i, text){
	    return text === "Off" ? "On" : "Off";
	})
});

$(document).on('click', 'header .menu-icon a', function() {
    $('.leftmenu-bar').toggleClass('active'); 
});
$(".leftmenu-bar" ).click(function(e) {
	e.stopPropagation(); 
});
$("body" ).click(function() {
    $('.leftmenu-bar').removeClass('active');
});
$("body").on('click touchstart', function () {
	$('.leftmenu-bar').removeClass('active');
}); 
