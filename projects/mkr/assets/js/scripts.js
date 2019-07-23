jQuery(document).ready(function($) {
    // Initiate mailChimp AJAX
    ajaxMailChimpForm($('#optin-form'), $('#optin-result-success'), $('#optin-result-status'));

    /* ScrollReveal defaults */
    window.sr = ScrollReveal({ origin: 'bottom', duration: 1000, delay: 200, distance: '150px', opacity: 0, easing: 'ease', viewFactor: 0.4, scale: 1
    });

    /* ScrollReveal initialization */
    var srElemCount = 1,
        $elem, args, data, keyTemp, srElemClass;
    $('.sr-element').each(function(index, elem) {

        $elem = $(elem);
        data = $elem.data();
        args = {};

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (key.indexOf('sr') == 0) {
                    keyTemp = key.replace('sr', '').toLowerCase();
                    if (keyTemp == 'viewfactor') {
                        keyTemp = 'viewFactor';
                    }

                    args[keyTemp] = data[key];
                }
            }
        }

        srElemClass = 'sr-element-' + srElemCount;

        $elem.addClass(srElemClass);
        sr.reveal('.' + srElemClass, args);

        srElemCount++;
    });
});


function ajaxMailChimpForm($form, $successElement, $statusElement) {

    // Hijack the submission. We'll submit the form manually.
    $form.submit(function(e) {
        e.preventDefault();

        // Start loader
        jQuery('.submit-btn').addClass('is-processing');

        if (!isValidEmail($form)) {
            var error = "A valid email address must be provided.";
            $statusElement.html(error);
            $statusElement.css({
                'color': '#ff0000',
                'visibility': 'visible'
            });
            jQuery('.submit-btn').removeClass('is-processing');
        } else {
            submitSubscribeForm($form, $successElement, $statusElement);
        }
    });
}

// Validate the email address in the form
function isValidEmail($form) {
    var email = $form.find("input[type='email']").val();
    if (!email || !email.length) {
        return false;
    } else if (email.indexOf("@") == -1) {
        return false;
    }

    return true;
}

function submitSubscribeForm($form, $successElement, $statusElement) {
    $.ajax({
        type: "GET",
        url: $form.attr("action"),
        data: $form.serialize(),
        cache: false,
        dataType: "jsonp",
        jsonp: "c", // trigger MailChimp to return a JSONP response
        contentType: "application/json; charset=utf-8",

        error: function(error) {
            // According to jquery docs, this is never called for cross-domain JSONP requests
        },

        success: function(data) {
            if (data.result != "success") {
                var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
                $statusElement.css("color", "#ff0000");

                if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                    message = "You're already subscribed. Thank you.";
                    $statusElement.css("color", "#ffffff");
                }

                $statusElement.html(message).css({
                    'visibility': 'visible'
                });
                jQuery('.submit-btn').removeClass('is-processing');
            } else {
                jQuery('.submit-btn').removeClass('is-processing');
                $successElement.text('Thank you! You\'ve successfully subscribed.');
                jQuery('.fields-initial').animate({
                    opacity: 0,
                    marginLeft: '-300px'
                }, 800, 'linear', function() {
                    jQuery(this).hide(0);
                    sr.reveal('#optin-result-success', {
                        duration: 800,
                        distance: "100px",
                        scale: 1,
                        origin: "right",
                        easing: "ease",
                        viewFactor: 0.5,
                        opacity: 0
                    });
                });
            }
        }
    });
}