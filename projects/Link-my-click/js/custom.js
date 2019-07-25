
$(document).ready(function(){
    $('#menuToggle').click( function() {
      $("body").toggleClass('navToggle');
    });

    $('.profile').click( function() {
      $(".profille-dropdown").toggle();
    });
});