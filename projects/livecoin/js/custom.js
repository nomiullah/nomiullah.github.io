$( document ).ready(function() {
    $(function(){
    	$('.bootstrap-select.btn-group .dropdown-menu.inner').slimScroll({
        	height: '250px'
   	 	});
	});
	$( ".toggle-btn" ).click(function() {
		$('.menu-inner').toggleClass('active');
	});
});