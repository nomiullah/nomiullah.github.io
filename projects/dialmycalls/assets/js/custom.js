(function ($) {
    $(window).on("load", function () {

        $(".table-outer").mCustomScrollbar({
            axis: "x",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
        $(".table-outer-second").mCustomScrollbar({
            axis: "x",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
        $("#addcontact_manually .modal-content").mCustomScrollbar({
            axis: "y",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    });
})(jQuery);




$(document).ready(function () {
    var tds = $('.table-responsive th').length;
    $('.numberof-selected-rows td').attr('colspan', tds);

    /*Alphabet Filter Toggle*/
    $('.alphabet-filter').on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.alphabet-sorting').toggleClass('active');
    });

    /*Settings Filter Toggle*/
    $('.settings').on("click", function (event) {
        event.preventDefault();
        $(this).siblings('.setting-option').toggleClass('active');
    });


    /*Selected Rows Toggle*/
    $(".data-table table label input[type='checkbox']").on("change", function (event) {
        $(this).closest("tr").toggleClass("selected-row");
        $(".numberof-selected-rows").addClass("active");
        $(".table-responsive .action-div").addClass("active")
    });

    $(".new-payment-method input[type='radio']").change(function () {
        $(this).closest("li").toggleClass('active').siblings().removeClass('active');;
    });

    /*Order info Toggle*/
    $('.complete_order_box .order-info').on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    /*Conversation Visible with delay*/
    $(".conversation").find("li").each(function (i) {
        $(this).delay(500 * i).show('slow');
    });
});


//  $(".flip-container").on('touchstart click', function(){
//     this.classList.toggle('hover');
// });

$(".btn-select").on('click', function (e) {
    e.preventDefault();
    $(this).closest('.flip-container').addClass('selected');
    $(this).closest('.flip-container').parent().siblings().children('.flip-container').removeClass('disabled');
    $('.btn-next').removeClass('disabled').removeAttr("disabled");
});

$(".btn-next").on('click', function (e) {
    $(this).siblings().removeClass('hidden');
    $('#steps').removeClass('hide_all_except_first');
    $(this).find('.text').text("Next");
});

$(".btn-prev").on('click', function (e) {
    if ($('#myWizard').wizard('selectedItem').step == 2) {
        $(this).addClass('hidden')
        $('#steps').addClass('hide_all_except_first');
        $('.btn-next').find('.text').text("Continue");
    }
});

$(".front").on('click', function (e) {
    $(this).closest('.selected').removeClass('selected');
});

$(".box-content.box-content--recipients").on('click', function (e) {
    e.preventDefault();
    $(this).closest('.broadcast-content').addClass('hidden');
    $(this).closest('.broadcast-content').siblings().removeClass('hidden');
});

var text_max = 0;
$('#count_message').html(text_max + ' /300 characters');
$('#message_text').keyup(function () {
    var text_length = $('#message_text').val().length;
    var text_remaining = text_max + text_length;
    $('#count_message').html(text_remaining + '/300 characters');
});

// $("input[name='schedule']").on('change', function (e) { 
//     if($('.send-later').get(0).checked){
//         $('.schedule-later-date').toggleClass('hidden');
//     }     
// });

$('.send-later').on('change', function (e) {
    if ($('.schedule-later-date').hasClass('hidden')) {
        $('.schedule-later-date').removeClass('hidden');
    } else {
        $('.schedule-later-date').addClass('hidden');
    }
});

$('.add-caller-id').on('click', function (e) {
    $(this).text('add new caller id')
    $('#select-caller-id').removeClass('hidden');
    $('.left-content').addClass('hidden')

});

$('.send-now').on('change', function (e) {
    $('.schedule-later-date').addClass('hidden');

});
 
$('.select-all').on('click', function(){
    if($(this).hasClass('active')){ 
        $(this).removeClass('active').val('Select all my contacts');
        document.querySelectorAll('.data-table table label input[type="checkbox"]').forEach(function(item){
            item.removeAttribute('checked');
        })
    }
    else{ 
        console.log("active")
        $(this).addClass('active').val('all my contacts selected');
        document.querySelectorAll('.data-table table label input[type="checkbox"]').forEach(function(item){
            item.setAttribute('checked',true);
        })
    }
})

 
$('#myWizard').on('finished.fu.wizard', function (evt, data) {
    $('#myWizard').wizard('destroy');
    $('.success-message').removeClass('hidden');               
});