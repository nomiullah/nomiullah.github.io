jQuery(document).ready(function() {

	jQuery('.accordion-group').first().ariaAccordion({
	  slideSpeed: 400,
	  expandOnPageLoad: false
	});

	jQuery('.modal-toggle').on('click', function(e) {
    	e.preventDefault();
      	jQuery('.modal').toggleClass('is-visible');
   	});

   	jQuery( ".menu-icon" ).click(function() {
		  jQuery(this).parent().toggleClass('overlay');
	   });

	jQuery('#nav-icon3').click(function(){
		jQuery(this).toggleClass('open');
    jQuery('body').toggleClass('open')
	});
});
    
function initMap() {
    var uluru = {lng: -73.5742423, lat: 45.5005139};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    }); 
    var marker = new google.maps.Marker({
      map: map,
      icon: 'marker.png'
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }