 var selector = '.content .view-option ul li a';

$(selector).on('click', function(e){
	e.preventDefault();
    $(selector).removeClass('active');
    $(this).addClass('active');
	$('.monthly-day-title-wrap').toggle();
	$('.monthly-day-wrap').toggle();
	$('.callender-agenda').toggle();
		
});
 
$('.content .view-option ul li a.agendaview').on('click', function(e){
	e.preventDefault();
    $(selector).removeClass('active');
    $(this).addClass('active');
	$('.fc-view-container').hide();
 	$('.callender-agenda').show();
		
});
$('.content .view-option ul li a.callenderview').on('click', function(e){
	e.preventDefault();
    $(selector).removeClass('active');
    $(this).addClass('active');
	$('.fc-view-container').show();
 	$('.callender-agenda').hide();
		
});
 $('.content .media-detail .search-field ul.series li a').on('click', function(e){
	e.preventDefault();
 });
 
 
 if ($(window).width() < 768) {
   $('header .navbar-nav>li.dropdown a').removeClass('disabled');
}
 