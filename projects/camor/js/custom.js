/* */
$(document).ready(function() {
    $(".navbar-toggle").click(function(e) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("active");
        $(".menu-overlay").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });

    $(".mobile-menu").click(function(e) {
        e.stopPropagation();
    });
    $("body").click(function() {
        $(".mobile-menu").removeClass("active");
        $(".menu-overlay").removeClass("active");
        $("body").removeClass("no-scroll");
    });
});
if ($(window).width() < 960) {
    $(document).ready(function() {
        $(".banner .owl-carousel").css({
            height: $(".banner .item img").height()
        });
    });
    $(window).resize(function() {
        $(".banner .owl-carousel").css({
            height: $(".banner .item img").height()
        });
    });
}



lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true
})

if ($(window).width() < 639) {
    $(".owl-carousel > div:gt(0)").hide();

    setInterval(function() {
        $('.owl-carousel > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.owl-carousel');
    }, 3000);
}