$(document).ready(function () {
    $('header .header-menu ul li a').click(function(e) {
        $('header .header-menu ul li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
	$('.content table th a').click(function(e) {
        $(this).toggleClass('sortable');
        e.preventDefault();
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
	$('.modal .temp-password a.get-temp-pass').click(function(e) {
        $('.new-msp-modal').addClass(' temporary-pass'); 
    });
	$('.closebtn').click(function(e) {
        $('.new-msp-modal').removeClass('temporary-pass'); 
        e.preventDefault();
    });
	 $('#myswitch').switchable();
	 $('#myswitch1').switchable();
	 $('#myswitch2').switchable();
	 $('#myswitch3').switchable();
	 $(function(){
   
	});
});
$(window).load(function(){
	$('.modal').modal('show');
});
 
