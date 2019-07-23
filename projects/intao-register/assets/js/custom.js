$(document).ready(function () {
    // Disable form submit on enter
    $('form input[type=text], form input[type=password]').on('keypress', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            if (!$(this).hasClass('btn-submit')) {
                $(this).closest('.form-wrapper').find('.btn-submit:not(.disabled)').first().unbind('click').click();
            }
            return false;
        }
    });

    $('#step-1 .field-first-name, #step-1 .field-last-name').on('change keyup', function () {
        if ($('#step-1 .field-first-name').val() && $('#step-1 .field-last-name').val()) {
            $('#step-1 .btn-submit').removeClass('disabled');
        } else {
            $('#step-1 .btn-submit').addClass('disabled');
        }
    })

    $(document).on('click', '#step-1 .btn-submit:not(.disabled)', function () {
        progressWizard();

        // Hide #step-1 & show #step-2
        $('#step-1').fadeOut(400, function () {
            $('#step-2').fadeIn(400, function () {
                $(this).removeClass('hidden');

                // Focus in the password field
                $('#step-2 .field-password').first().focus();
            });
        });

        // Update template placeholders
        $('.template-placeholder[data-field="first-name"]').text($('#step-1 .field-first-name').val());
    })

    $('#step-2 .field-password').on('change keyup', function () {
        let password = $(this).val();
        let regexp = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        if (regexp.test(password)) {
            $('#step-2 .btn-submit').removeClass('disabled');
        } else {
            $('#step-2 .btn-submit').addClass('disabled');
        }
    })

    // Reveal password
    $('.show-pass').on('click', function () {
        let $button = $(this)
        let $password = $button.prev();

        if ($button.hasClass('active')) {
            $password.attr('type', 'password');
        } else {
            $password.attr('type', 'text');
        }

        $button.toggleClass('active');
    })

    $(document).on('click', '#step-2 .btn-submit:not(.disabled)', function () {
        progressWizard();

        // Hide #step-2 & show #step-3
        $('#step-2').fadeOut(400, function () {
            $('#step-3').fadeIn(400, function () {
                $(this).removeClass('hidden');
            });
        });
    })

    $('#step-3 .field-privacy, #step-3 .field-terms').on('change', function () {
        if ($('#step-3 .field-privacy').is(':checked') && $('#step-3 .field-terms').is(':checked')) {
            $('#step-3 .btn-submit').removeClass('disabled');
        } else {
            $('#step-3 .btn-submit').addClass('disabled');
        }
    })

    /**
     * Proceed the wizard counter
     */
    function progressWizard() {
        let $wizard = $('.wizards-count');
        let $current = $wizard.find('.active');
        let $next = $current.next();

        $next.addClass('active');
        $current.toggleClass('active completed');
    }
})