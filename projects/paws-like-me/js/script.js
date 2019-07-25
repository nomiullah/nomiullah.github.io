$(function () {
	// menu mobile functionaity
	$("#menu").click(function () {
		if( $(this).hasClass('active')){
			$(this).removeClass('active');
			$("#nav").stop(true,true).slideUp();
		}
		else{
			$(this).addClass('active');
			$("#nav").stop(true,true).slideDown();
		}
		return false;
	});	
	
	
	if ($(window).width() < 767) {
		$(".dropdown-menu > a").click(function () {
			if( $(this).parent().hasClass('exp')){
				$(this).parent().removeClass('exp');
				$(this).next().stop(true,true).slideUp();
			}
			else{
				$(this).parent().addClass('exp');
				$(this).next().stop(true,true).slideDown();
			}
			return false;
		});	
	}
	
	
	
	// list-and map view
	$('.view-section a').click(function(){
		var newContents = $(this).attr('href').slice(1);
		
		$('.content-commen').hide();
		$('#'+newContents).show();
		
		$('.view-section a').removeClass('active');
		$(this).addClass('active');
		
		return false;
	});
	
	
	// tabs
	$('.tabs a').click(function(){
		var newTabs = $(this).attr('href').slice(1);
		$('.tabs-content').hide();
		$('#'+newTabs).show();
		$('.tabs li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent('ul').parent('li').addClass('active');
		
		// mobile menu
		var newtabsVal = $(this).html();
		$(".menu-detail").html(newtabsVal);
		
		return false;
	});
	
	// mobile icon for tabs
	$('.menu-tabs a').click(function(){
		if( $(this).hasClass('active')){
			$(this).removeClass('active');
			$('.tabs-mobile-menu').removeClass('exp');
			$('.tabs-menu-list').stop(true,true).slideUp();
			
		}
		else{
			$(this).addClass('active');
			$('.tabs-menu-list').stop(true,true).slideDown();
			$('.tabs-mobile-menu').addClass('exp');
		}
		return false;
	});
	
	if ($(window).width() < 767) {
		$('.tabs-menu-list a').click(function(){
			$(this).parents('.tabs-menu-list').slideUp();
			$('.menu-tabs a').removeClass('active');
			$('.tabs-mobile-menu').removeClass('exp');
		});
	}
	
	
	$('.first a').click(function(){
		$(".slider-overlay").removeClass('tab-third');
		$(".slider-overlay").removeClass('tab-second');
	});
	$('.second a').click(function(){
		$(".slider-overlay").removeClass('tab-third');
		$(".slider-overlay").addClass('tab-second');
	});
	$('.third a').click(function(){
		$(".slider-overlay").removeClass('tab-second');
		$(".slider-overlay").addClass('tab-third');
	});
	
	
	
	// login
	$(".popup-link").click (function () {
		var newLocation = $(this).attr('href');
		$(newLocation).fadeIn();
		$(".overlay").fadeIn();
		return false;
	});
	$(".cancel").click (function () {
		$(this).parents('.popup-section').fadeOut();
		$(".overlay").fadeOut();
		return false;
	});
	
	
	// Modal popup
	$('.modal-link').click(function(){
		var newPopup = $(this).attr('href').slice(1);
		$(".modal-overlay").fadeIn();
		$('#'+newPopup).fadeIn();
		
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 130
		}, 0);
		
		return false;
	});
	$('.modal-custom .close').click(function(){
		$(".modal-overlay, .modal-custom").fadeOut();
		return false;
	});
	
	// secondary popup, from insde the main popup
	$('.modal-link-secondary').click(function(){
		var newPopupSec = $(this).attr('href');
		$(".overlay-secondary").fadeIn();
		$(newPopupSec).fadeIn();
		
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 130
		}, 0);
		return false;
	});
	$('.close-secondary').click(function(){
		$(".modal-custom-secondary, .overlay-secondary").fadeOut();
		return false;
	});
	
	
	
	// Heart hutton
	$(".heart-btn, .heart").click (function (){
		if( $(this).hasClass('red')){
			$(this).removeClass('red');
		}
		else{
			$(this).addClass('red');
		}
		
		return false;
	});
	
	
	// Add pet on Pet List
	$("#add-pet").click (function (){
		$(".pet-list-section").hide();
		$(".add-pet").show();
		return false;
	});
	$(".back-to-list").click (function (){
		$(".add-pet").hide();
		$(".pet-list-section").show();
		return false;
	});
	
	
	// Action button
	$(".acution > a").click (function (){
		if( $(this).hasClass('exp')){
			$(this).removeClass('exp');
			$(this).next().hide();
		}
		else{
			$(this).addClass('exp');
			$(this).next().show();
		}
		return false;
	});
	$(".acution ul a").click (function (){
		$(".acution > a").removeClass('exp');
		$(this).parents(".actuon-dropdown").hide();
		return false;
	});
	$("body").click (function (){
		if( $(".acution > a").hasClass('exp')){
			$(".acution > a").removeClass('exp');
			$(".actuon-dropdown").hide();
		}
	});
	
	// custom dropdown 
	$(".dropdown").click(function () {
		if ( $(this).hasClass('active') ) {
			$(this).next().hide();
			$(this).removeClass('active');
		}
		else{
			
			$(".dropdown-list").hide();
			$(".dropdown").removeClass('active;');
			
			$(this).next().show();
			$(this).addClass('active');
		}
		return false;
	});
	$(".dropdown-list a").click(function () {
		var newVal = $(this).children('label').html();
		$(this).parents('.dropdown-section').find('.dropdown span').html(newVal);
		
		$(this).parents('.dropdown-list').hide();
		$(this).parents('.dropdown-list').prev('.dropdown').removeClass('active');
		
		return false;
	});
	$("body").click(function () {
		if ( $(".dropdown").hasClass('active') ){
			$(".dropdown").removeClass('active');
			$(".dropdown-list").hide();
		}
	});
	
	
	// accordion
	$('.sidebar-link > ul > li > a').click(function(){
		
		if( $("#arrow").hasClass('active')){
		}
		else{
			$("#arrow").trigger('click');
		}
			
		if( $(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).next('.accordion-content').stop(true,true).slideUp();
		}
		
		else{	
			$('.sidebar-link > ul > li').removeClass('active');
			$('.accordion-content').stop(true,true).slideUp();
			
			
			$(this).parent().addClass('active');
			$(this).next('.accordion-content').stop(true,true).slideDown();
		}
		return false;
	});
	
	// arrow sidebar
	$('#arrow').click(function(){
		if( $(this).hasClass('active')){
			$(this).removeClass('active');
			$(".sidebar-pet-search").animate({'right':'-219px'},
				function () {
					$("#contents").removeClass('exp');
				}
			);
			$('.sidebar-link > ul > li').removeClass('active');
			$('.accordion-content').stop(true,true).slideUp();
		}
		
		else{
			$(this).addClass('active');
			$(".sidebar-pet-search").animate({'right':'0'})
			$("#contents").addClass('exp');
		}
		return false;
	});
	
	// mobile icon for filter
	$('.mobile-filter').click(function(){
		if( $(this).hasClass('active')){
			$(this).removeClass('active');
			$('.sidebar-pet-in').stop(true,true).slideUp();
			$('.sidebar-pet-search').stop(true,true).animate({'height':'50px'});
		}
		else{
			$(this).addClass('active');
			$('.sidebar-pet-in').stop(true,true).slideDown();
			$('.sidebar-pet-search').css({'height':'auto'});
		}
		return false;
	});
	
	// accordion funcitonality
	// accordion
	$('.accordion-section > h3 a').click(function(){
		if( $(this).parent().hasClass('exp')){
			$(this).parent().removeClass('exp');
			$(this).parent().next('.accordion-info').stop(true,true).slideUp();
		}
		
		else{	
			//$('.accordion-section > h3').removeClass('exp');
			//$('.accordion-info').stop(true,true).slideUp();
			$(this).parents('.accordion-section').find('h3').removeClass('exp')
			$(this).parents('.accordion-section').find('.accordion-info').stop(true,true).slideUp();
			
			$(this).parent().addClass('exp');
			$(this).parent().next('.accordion-info').stop(true,true).slideDown();
		}
		return false;
	});
	
	
	// share dropdown 
	$(".share-link").click(function () {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).next('.share-item').hide();
		}
		else{
			$('.share-item').hide();
			$('.share-link').removeClass('active');
			
			$(this).addClass('active');
			$(this).next('.share-item').show();
		}
		return false;
	});
	$(".share-item a").click(function () {
		$(this).parents('.share-item').hide();
		$(this).parents('.share-item').prev('.share-link').removeClass('active');
		return false;
	});
	$("body").click (function (){
		if( $(".share-link").hasClass('active')){
			$('.share-item').hide();
			$('.share-link').removeClass('active');
		}
	});
	
	$(window).scroll(function () {
		var floatView = $('#wrap-in').height();
		var floatWrapperView = $('#float-conttainer-wrap').height();
		var headerView = $('#header-wrap').outerHeight() + $(".top-section").outerHeight() + -50;
		var footerView = $('#footer-wrap').outerHeight();
		var docView = $(document).height();
		var windowView = $(window).height();
		
		if ($(this).scrollTop()>=headerView){
			$('#wrap-in').css('position', 'absolute').animate({ top: $(window).scrollTop()-headerView+'px'}, 0);
			$('#wrap-in').css('right', '20px');
			
			if($(this).scrollTop()-headerView>floatWrapperView-floatView){
				$('#wrap-in').css({ 'top': floatWrapperView-floatView+'px' });
				$('#wrap-in').css('right', '20px');
			}
		}
		else {
			$('#wrap-in').css('position', 'static');
		}
		
	});
	
	$(window).load(function () {
		var floatView = $('#wrap-in').height();
		var floatWrapperView = $('#float-conttainer-wrap').height();
		var headerView = $('#header-wrap').outerHeight() + $(".top-section").outerHeight() + -50;
		var footerView = $('#footer-wrap').outerHeight();
		var docView = $(document).height();
		var windowView = $(window).height();
		
		if ($(this).scrollTop()>=headerView){
			$('#wrap-in').css('position', 'absolute').animate({ top: $(window).scrollTop()-headerView+'px'}, 0);
			$('#wrap-in').css('right', '20px');
			
			if($(this).scrollTop()-headerView>floatWrapperView-floatView){
				$('#wrap-in').css({ 'top': floatWrapperView-floatView+'px' });
				$('#wrap-in').css('right', '20px');
			}
		}
		else {
			$('#wrap-in').css('position', 'static');
		}
		
	});
	
	
	
	
});