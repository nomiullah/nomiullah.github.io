$(function(){

	$('table td').each(function(){
		
		var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
		$(this).css('backgroundColor', hue);
	})
	/*
	$('table td').click(function(){
		var cuisineId = $(this).attr('id');
		console.log(cuisineId);
		loadCuisineDishes(cuisineId);
	})
	*/


	function loadCuisineDishes(cuisineId){

		window.location.hash = "#cuisine-"+ cuisineId;

		$.ajax({
          type: "POST",
          url: "/users/search_recipe/#cuisine-"+cuisineId,
          //data: $('form.email-recipe').serialize(),
          success: function(response){
              console.log('success');
          },
          error: function(){
              alert("failure");
          }
      });
		
	}
	

});