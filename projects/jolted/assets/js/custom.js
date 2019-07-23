new WOW().init();


$(window).on("scroll", function() {

    if ($(window).scrollTop() > 0) {

        $("header").addClass("scrolled");
        $(".wrapper").css('padding-top','49px');

    } else {

        //remove the background property so it comes transparent again (defined in your css)

        $("header").removeClass("scrolled");
        $(".wrapper").css('padding-top','0');

    }

});
(function($) {
    function floatLabel(inputType) {
        $(inputType).each(function() {
            var $this = $(this);
            // on focus add cladd active to label
            $this.focus(function() {
                $this.next().addClass("active");
            });
            //on blur check field and remove class if needed
            $this.blur(function() {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");
})(jQuery);


$( "header .mobile-menu" ).click(function() {
  $('header .header-right .navbar').toggleClass('active');
});