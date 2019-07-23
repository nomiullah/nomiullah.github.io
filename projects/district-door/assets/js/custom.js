jQuery(document).ready(function ($) {

    $('#form-password input').focus()

    $('#form-password').on('submit', function(evt) {
        let $this = $(this)

        if (!$this.find('input').first().val().length) {
            evt.preventDefault()

            $this.find('.password-field').addClass('error-outer')
            $this.find('.password-field .error-message').text('Password is required')
        }
    })


    $(document).on('click', '#form-back-button', function(evt) {
        console.log("was here")
        evt.preventDefault()

        $('#submit-btn').val('Submit')

        $(this).closest('.message-box--error').fadeOut(function() {
            $('#contact-form').parent().fadeIn()
        })

    })

    $('#contact-form').on('submit', function (evt) {
        evt.preventDefault()

        // vars
        var $form = $(this)
        var $button = $form.find('#submit-btn')

        $button.val('Processing...')

        // validation
        var $name = $form.find('#input-name')
        var $email = $form.find('#input-email')
        var $message = $form.find('#input-message')

        // clear errors
        $('#input-name, #input-email, #input-message').removeClass('error')

        var validation = []

        if (!$email.val().length) {
            validation.push({
                element: $email,
                message: 'Email is required'
            })
        } else if (!validateEmail($email.val())) {
            validation.push({
                element: $email,
                message: 'Please enter a valid email address'
            })
        }

        if (!$name.val().length) {
            validation.push({
                element: $name,
                message: 'Name is required'
            })
        }

        if (validation.length) {

            for (let i = 0; i < validation.length; i++) {
                validation[i].element.addClass('error')
                validation[i].element.next('.error-message').text(validation[i].message)
            }

            validation[validation.length - 1].element.focusin()
            $button.val('Submit')

            return false
        }

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: $form.serialize(),
            dataType: 'JSON',
            success: function (response) {

                if (response[0].status == 'success') {
                    // emails were successfully sent
                    $form.parent().fadeOut(function() {
                        $('.message-box--success').fadeIn()
                    });
                } else if (response[0].status == 'fail') {
                    console.log(response)
                    $form.parent().fadeOut(function() {
                        $('.message-box--error').fadeIn()
                    });
                } else {
                    response.forEach(function(item, index) {
                        $elem = $(item.id)

                        $elem.addClass('error')
                        $elem.next('.error-message').text(item.message)
                    })
                }

                // $button.val('Submit')
            },
            error: function(response) {
                console.log('Error: ', response)
                $button.val('Submit')
            }
        })
    })
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(String(email).toLowerCase())
}
