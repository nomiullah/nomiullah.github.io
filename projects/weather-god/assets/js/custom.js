$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("header-scrolled");
    } else {
        $(".header").removeClass("header-scrolled");
    }
});