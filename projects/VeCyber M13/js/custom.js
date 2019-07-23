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


if (screen.width < 992) {
    $('.left-sidebar').addClass('siderbarsmall');
	$('body').addClass('compactview');
}
else {
$('.left-sidebar').removeClass('siderbarsmall');
	$('body').removeClass('compactview');
}


$( window ).resize(function() {
 if (screen.width < 992) {
    $('.left-sidebar').addClass('siderbarsmall');
	$('body').addClass('compactview');
}
else {
$('.left-sidebar').removeClass('siderbarsmall');
	$('body').removeClass('compactview');
}
});
$(".content .right-content-tabs .tab-content .right-detail .finding-list ul,.content .asset-group-detail .group-left-table,.content .vulnerability-list-outer .vulnerability-right-tabs .tab-content ul").mCustomScrollbar({
	theme: "rounded",
	mouseWheelPixels: 100
});
$( ".content .asset-group-detail .group-left-table th a" ).click(function() {
	 $(this).toggleClass('sortable');
});

$( ".content .group-desctiption .top-name a.edit" ).click(function() {
	$(this).addClass('hidden-icon');
	 $('.content .group-desctiption .top-name input[type="text"]').prop('readonly', false);
	 $('.content .group-desctiption .top-name input[type="text"]').focus();
	 $('.content .group-desctiption .top-name input[type="text"]').addClass('editable');
	 $('.content .group-desctiption .top-name ul').addClass('shown');
});

$( ".content .group-desctiption .top-name a.cancel" ).click(function() {
	$('.content .group-desctiption .top-name ul').removeClass('shown');
	 $('.content .group-desctiption .top-name input[type="text"]').removeClass('editable');
	 $('.content .group-desctiption .top-name a.edit').removeClass('hidden-icon');
	 $('.content .group-desctiption .top-name input[type="text"]').prop('readonly', true);
});
 

    	