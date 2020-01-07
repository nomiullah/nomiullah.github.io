function readyFunction(){
	$('.menu-toggles').click(function(){
		$('body').addClass('menu-open');
	});
	$('.menu-close').click(function(){
		$('body').removeClass('menu-open');
	});
}

function menu(){
	if($(window).width() < 1024){
		$('.side-nav li').click(function(){
			$(this).toggleClass('active');
		});
	}
}

$('document').ready(function(){
	readyFunction();
	menu();
});

$('window').resize(function(){
	menu();
});