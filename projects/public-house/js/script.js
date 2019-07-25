// --- 08. Drinks Section ScrollPour™  -------------------------------------

    var cT = $('#drinks .menu-img img').offset();

	//Parallax
	$(window).scroll( function() {
	    var fromtheTop = $(this).scrollTop();
	    var newTop = ((fromtheTop * .5) - 0);
	    $('.page-title-wrap').css('backgroundPosition', '-0px -' + newTop + 'px');
	    
	    var ftt = fromtheTop;
	    var imgTop = 2650;
	    
	    	if ((ftt < imgTop )) {
		    	$('#drinks .menu-img img:eq(1)').fadeOut(100);
		    	$('#drinks .menu-img img:eq(0)').show();
	    	} else if ((ftt > imgTop) && (ftt <= (imgTop + 50))) {
		    	$('#drinks .menu-img img:eq(2)').fadeOut(100);	    	
		    	$('#drinks .menu-img img:eq(1)').fadeIn(100);	    	
	    	} else if ((ftt > (imgTop + 50)) && (ftt <= (imgTop + 100))) {
		    	$('#drinks .menu-img img:eq(3)').fadeOut(100);	    	
		    	$('#drinks .menu-img img:eq(2)').fadeIn(100);	    	
	    	} else if ((ftt > (imgTop + 100)) && (ftt <= (imgTop + 150))) {
		    	$('#drinks .menu-img img:eq(4)').fadeOut(100);	
		    	$('#drinks .menu-img img:eq(3)').fadeIn(100);    	
	    	} else if ((ftt > (imgTop + 150)) && (ftt <= (imgTop + 200))) {
		    	$('#drinks .menu-img img:eq(5)').fadeOut(100);
		    	$('#drinks .menu-img img:eq(4)').fadeIn(100);
	    	} else if ((ftt > (imgTop + 250))) {
		    	$('#drinks .menu-img img:eq(5)').fadeIn(100);
	    	}
	});