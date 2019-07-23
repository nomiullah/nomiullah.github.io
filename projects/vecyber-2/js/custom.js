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

$( ".left-sidebar .top-logo span" ).click(function() {
	 $('.left-sidebar').addClass('siderbarsmall');
	 $('body').addClass('compactview');
	 
});
$( ".left-sidebar .toggle-menu span" ).click(function() {
	 $('.left-sidebar').removeClass('siderbarsmall');
	 $('body').removeClass('compactview');
	 
});
$('.content table th a').click(function(e) {
	$(this).toggleClass('sortable');
	e.preventDefault();
});

$(window).load(function(){
	$('.modal').modal('show');
});
 $(function() {

  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });
  });
  
});
$( ".content .content-header .login-detail > a" ).click(function() {
	$( ".content .content-header .login-detail ul" ).slideToggle();
});
$( ".content table tr" ).click(function() {
	$( ".associate-main" ).addClass('associate-outer');
});
$( ".content .content-header .bredcrumb ul li a.dropdown" ).click(function() {
	$(this).parent().children('ul').toggle();
});
 
 

$('#myswitch').switchable();



