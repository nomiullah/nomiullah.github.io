 $('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
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


$(window).load(function(){
	$('#viewquote').modal('show');
});
$( ".content .top-titlebar .top-filter a.dropdown" ).click(function() {
  $(this).parent().toggleClass('open');
  
});	
$( ".content .data-table table tbody tr" ).click(function() {
   $(this).parent().parent().parent('.table-responsive').toggleClass('task-detail-outer');
   $('.content .data-table .task-detail').toggleClass('show-sidebar');
});	
$( "header .header-menu a" ).click(function() {
  $('.menu-overlay').show();
  $('nav').addClass('opennav');
});
$( ".content .product-review-table .product-review-top .left-detail.manage-dep .manage-dep-detail ul li a" ).click(function(e) {
	e.preventDefault();
    $(this).parent().toggleClass('editable');
});
$( "nav .nav-logo a.close-menu" ).click(function() {
  $('.menu-overlay').hide();
  $('nav').removeClass('opennav');
});
$( ".content .product-review-table table tr td a.caret" ).click(function(e) {
	e.preventDefault();
  $(this).parent().parent().toggleClass('open');
  $(this).parent().parent().next('tr.hidden-data').slideToggle('100');
});

$(".inner-data,.content .departments-criteria ul li .chnage-criteria ul,.select-criteria,.edit-criteria,.left-detail.manage-dep .select-dep-criteria .chnage-criteria ul,.product-detail-description").mCustomScrollbar({
	autoHideScrollbar: false,
	theme: "rounded",
	mouseWheelPixels: 100
});
 
 $(".tablescrollingbody").mCustomScrollbar({
	autoHideScrollbar: false,
	theme: "rounded",
	mouseWheelPixels: 100
});

$(".content .data-table .task-detail .chat-detail").mCustomScrollbar({
  autoHideScrollbar: false,
  theme: "rounded",
  mouseWheelPixels: 100
});
$(".ppc-merketing-content .left-tabs-detail .tab-content ul.scrollable").mCustomScrollbar({
  autoHideScrollbar: false,
  theme: "rounded",
  mouseWheelPixels: 100
});
 
 
 (function($) {
 
  $('.first.circle').circleProgress({
    value: 0.35,
    animation: false,
    fill: {gradient: ['#1cc006']}, 
	emptyFill: '#e1f7f8',

  });
    $('.first.circle2').circleProgress({
    value: 0.35,
    animation: false,
    fill: {gradient: ['#ff5b62']}, 
	emptyFill: '#e1f7f8',

  });

 
 })(jQuery);
 
 
 
 $( ".content .product-review-table .product-review-top .left-detail.manage-dep .dep-action-btn .save" ).click(function(e) {
	 e.preventDefault();
  $('.content .product-review-table .product-review-top .left-detail.manage-dep .manage-dep-detail').hide();
  $('.content .product-review-table .product-review-top .left-detail.manage-dep .manage-dep-detail.manage-dep-detail-2').show();
});


$( ".task-status" ).click(function(e) {
$(this).children('.top-filter').toggleClass('open');
e.preventDefault();
});

$( ".show-filter" ).click(function(e) {
  $('.filters-category').toggleClass('visible-modal');
  e.preventDefault();
});
 
 $(window).on('load',function(){
      $('#addkeyword-modal,#generate-graph').modal('show');
  });