jQuery(document).ready(function($){

	$('.menu_show').click(function(){
		$(this).toggleClass('open');
		$('.body_menu').toggleClass('open');
		$('.header').toggleClass('open');
		$('.menu_mobile').toggleClass('open');
	});

	$('.select_language').click(function(){
		$('.select_language ul').stop().fadeToggle(300);
	});
	$(document).click(function(event){
		if ($(event.target).closest('.select_language').length) return;
		$('.select_language ul').fadeOut(300);
		event.stopPropagation();
	});

	$('.slider').slick({
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [{
			breakpoint: 1315,
			settings: {
				infinite: true,
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
			}
		},{
			breakpoint: 981,
			settings: {
				arrows: false,
				infinite: true,
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
			}
		},{
			breakpoint: 481,
			settings: {
				dots: true,
				arrows: false,
				infinite: true,
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
			}
		}]
	});

	$('.block_map_overlay').click(function(){
		$(this).css('display', 'none');
	});
	$('.block_naples_area_guide_map, .block_contact_us_map, .block_listing_map, .block_inner_details_map_places_inn, .block_homes_near_map_left').mouseleave(function(){
		$('.block_map_overlay').css('display', 'block');
	});

	$('.a_view_video').click(function(e){
		e.preventDefault();
		$('.overlay').fadeIn(600);
		$('.popup_video').fadeIn(600).css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 100) + 'px');
	});
	$('.overlay, .button_close').click(function(e){
		e.preventDefault();
		$('.overlay').fadeOut(600);
		$('.popup').fadeOut(600);
	});

/*
	$('.block_sitemap_alphabet a').click(function(e){
		e.preventDefault();
		$('.block_sitemap_alphabet').find('.active').removeClass('active');
		$(this).addClass('active')
	});
*/

	$('.ul_type_of_request label').click(function(){
		if($(this).hasClass('lb_buy')){
			$('.block_contact_us_sell').hide();
			$('.block_contact_us_buy').show();
		}else{
			$('.block_contact_us_buy').hide();
			$('.block_contact_us_sell').show();
		}
	});

	var tmp_block_listing_search_top_height = $('.block_listing_search_top').innerHeight()+14;
	$('.block_listing_search_content').css('top', tmp_block_listing_search_top_height+'px');

	window.slickColl = $('.slider_details').slick({
        autoplay: false,
        fade: true,
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        infinite: false,
        asNavFor: '.slider_details_small',
        autoplaySpeed: 5000,
        slidesToShow: 1,
        accessibility: false,
		nextArrow: '<a href="javascript:void(0)" class="slider_arrow_right"></a>',
		prevArrow: '<a href="javascript:void(0)" class="slider_arrow_left"></a>'
    });

    $('.slider_details_small').slick({
        autoplay: true,
        fade: false,
        dots: false,
        arrows: false,
        slidesToShow: 9,
        infinite: false,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        asNavFor: '.slider_details',
        accessibility: false,
        centerMode: false,
        focusOnSelect: true
    });

});

$(window).resize(function(){
	var tmp_block_listing_search_top_height = $('.block_listing_search_top').innerHeight()+14;
	$('.block_listing_search_content').css('top', tmp_block_listing_search_top_height+'px');
});

$(window).scroll(function(){
});