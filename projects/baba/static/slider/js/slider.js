function getViewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
}
jQuery(document).ready(function ($) {
    var $win = $(window),
        isTouch = !!('ontouchstart' in window),
        clickEvent = isTouch ? 'tap' : 'click';
    (function () {
        function calculator(width) {
            var percent = '25%';
            if (width <= 480) {
                percent = '60%';
            } else if (width <= 767) {
                percent = '55%';
            } else {
                percent = '50%';
            }
            return percent;
        };
        var $example = $('.mightyslider_modern_skin'),
            $thumbnailsBar = $('#thumbnails ul', $example),
            $frame = $('.frame', $example),
            $details = $('div.details', $example),
            $title = $('#title', $details),
            $photographer = $('#photographer', $details),
            $description = $('#description', $details),
            lastIndex = -1;
        $frame.mightySlider({
            speed: 1000,
            startAt: 1,
            autoScale: 1,
            easing: 'easeOutExpo',
            navigation: {
                slideSize: calculator(getViewport().width),
                keyboardNavBy: 'slides',
                activateOn: 'click'
            },
            thumbnails: {
               thumbnailsBar:       '#thumbnails',    // Selector or DOM element for thumbnails bar container.
               horizontal:          1,       // Switch to horizontal mode.
               preloadThumbnails:   1,       // Enable preload thumbnails images.
               thumbnailNav:        'centered', // Thumbnail navigation type. Can be: 'basic', 'centered', 'forceCentered'.
               activateOn:          'click', // Event used to activate thumbnail. Can be: click, mouseenter, ...
               scrollBy:            0,       // Thumbnails to move per one mouse scroll. 0 to disable scrolling.
               mouseDragging:       0,       // Enable navigation by dragging the thumbnailsBar with mouse cursor.
               touchDragging:       0,       // Enable navigation by dragging the thumbnailsBar with touch events.
               thumbnailSize:       '100%',       // Set thumbnails size. Can be: 500 and '100%'.
               thumbnailBuilder:             // Thumbnail item generator.
                 function (index, thumbnail) {
                   return '<li><img src="' + thumbnail + '" /></li>';
                 }
             },
            dragging: {
                swingSpeed: 0.12,
                onePage: 1
            },
            buttons: !isTouch ? {
                prev: $('a.mSPrev', $frame),
                next: $('a.mSNext', $frame)
            } : {},
            cycling: {
                cycleBy: 'slides'
            }
        }, {
            active: function (name, index) {
                var slideOptions = this.slides[index].options;
                if (lastIndex !== index) $details.stop().animate({
                    opacity: 0
                }, 500, function () {
                    $title.html(slideOptions.title);
                    $photographer.html(slideOptions.photographer);
                    $description.html(slideOptions.description);
                    $details.animate({
                        opacity: 1
                    }, 500);
                });
                lastIndex = index;
            	$('#thumbnails li').removeClass('active');
            	$('#thumbnails li').eq(lastIndex).addClass('active');
            }

        });
        var API = $frame.data().mightySlider;
        $win.resize(function () {
            API.set({
                navigation: {
                    slideSize: calculator(getViewport().width)
                }
            });
        });
    })();
});
