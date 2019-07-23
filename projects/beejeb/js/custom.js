$(document).ready(function() {
    $( ".mobile-toggle" ).click(function() {
        $('.mobile-menu').toggleClass('active');
        $(this).toggleClass('open');
        $('body').toggleClass('open-menu');
      });
    $('.custom-select').select2();

$('.custom-select').on('select2:opening select2:closing', function( event ) {
    var $searchfield = $(this).parent().find('.select2-search__field');
    $searchfield.prop('disabled', true);
});
});