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


$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$('header .main-menu').toggleClass('open');
		$('body').toggleClass('overlay');
	});
});


$(document).ready(function() {
    $('#example').DataTable( {
    	 "responsive": {
		        breakpoints: [
		            { name: 'desktop', width: Infinity },
		            { name: 'tablet',  width: 1024 },
		            { name: 'fablet',  width: 768 },
		            { name: 'phone',   width: 480 }
		        ],
		    }, 
	        columnDefs: [ {
	            className: 'control',
	            orderable: false, 
	        } ],
    	 "paging": false,
    	 "searching": false,
    	  "ordering": false,

	} );
} );

