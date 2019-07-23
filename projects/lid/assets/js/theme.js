function ScrollToPos(target, offset) {
    if (target == "#") {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    } else {
        $('html,body').animate({
            scrollTop: $(target).offset().top + offset
        }, 1000);
    }
}
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 106) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});

$(document).ready(function () {
    $('#email, #message').on('keyup', function () {
        var email = $('#email').val();
        var message = $('#message').val();

        if (email && message) {
            $('#done').addClass('active');
        } else {
            $('#done').removeClass('active');
        }
    })
    $('#email-mobile, #message-mobile').on('keyup', function () {
        var email = $('#email-mobile').val();
        var message = $('#message-mobile').val();

        if (email && message) {
            $('#done-mobile').addClass('active');
        } else {
            $('#done-mobile').removeClass('active');
        }
    })
    $('#done').on('click', function () {
        $('.robot').addClass('active');
        $('#not-robot').addClass('active');
    })
    $('#done-mobile').on('click', function () {
        $('.email-message-mobile').fadeOut();
        $('.sending-mobile').fadeIn();
    })
    $('#not-robot-mobile').on('click', function () {
        $('.sending-mobile').fadeOut();
        $('.thankyou-mobile').fadeIn();
    })

    $('#not-robot').on('click', function () {
        $('.contact-sending').addClass('not-empty');

        setTimeout(function () {
            $('.thankyou').addClass('not-empty');
        }, 2000);
    })
    $('.list li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});

$(window).load(function () {

    var elems = $('.faded .column'),
        count = elems.length;
    var delay = 0;
    elems.each(function (i) {
        $(this).delay(delay).animate({
            opacity: 1
        }, 1000);
        delay += 0;
    }).promise().done(function () {
        $('.loader').fadeOut();
        (function () {
            "use strict";
            $('.cards-slideshow').cycle({
                timeout: 0
            });
            var slideshows = $('.cards-slideshow');
            var numSlideshows = slideshows.length - 1;

            // optional: sort the slideshow collection based on the value of the data-index attribute
            Array.prototype.sort.call(slideshows, function (a, b) {
                a = $(a).data('index'), b = $(b).data('index');
                return a < b ? -1 : a > b ? 1 : 0;
            });

            // bind to cycle-after to trigger next slideshow's transition
            $('#container').on('cycle-after', function (e) {
                // var index = slideshows.index(e.target);
                var index = Math.floor(Math.random() * numSlideshows) + 1;

                setTimeout(function () {
                    transitionNext(index);
                }, 2000);
            });

            // trigger the initial transition after 1 second
            setTimeout(transitionNext, 2000);

            function transitionNext(index) {
                if (index === undefined || index == slideshows.length - 1)
                    index = 0;
                else
                    index++;

                slideshows.eq(index).cycle('next');
            }

        })();
    });
});

if ($(window).width() < 1250) {
    $(".column.hidden-xl").removeClass("cards-slideshow");
    $(".hidden-xl").removeClass("faded");
    $('#not-robot').on('click', function () {
        $('.thankyou').addClass('not-empty');
    })
}
if ($(window).width() < 1000) {
    $(".column.hidden-lg").removeClass("cards-slideshow");
    $(".hidden-lg").removeClass("faded");
    $('#done').on('click', function () {
        $('.thankyou').addClass('not-empty');
    })

}
if ($(window).width() < 750) {
    $(".column.hidden-sm").removeClass("cards-slideshow");
    $(".hidden-sm").removeClass("faded");

}


$('.slider-init').slick({
    speed: 2000,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,

});
$('.slider-init-ltr').slick({
    speed: 2000,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: -1,
});