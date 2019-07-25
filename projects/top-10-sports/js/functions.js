$(function() {

    $(document).ready(function(){
        $(".review_carousel").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            speed: 1000,
            auto: 9000,
            visible: 1,
            scroll: 1
        });});

    // Register events
    $('#advertiser_disclosure_link').click(function (e) {
        e.preventDefault();
        showDisclosure();
    });


    $('.field, textarea').focus(function(){
        if ($(this).attr("title") == $(this).val()){
            $(this).val('');
        }
    });

    $('.field, textarea').blur(function(){
        if ('' == $(this).val()){
            $(this).val( $(this).attr("title") );
        }
    });


    insertRankExplanationLink(); // done in JS for easy link placement

    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 400,
        slideBy: 3,
        autoplayHoverPause: true
    })
});



/**
 * Disclosure show/hide functionality
 **/
function showDisclosure(){
    $("#advertiser_disclosure_box").show();
    trackEvent(['_trackEvent', 'Info','Advertiser Disclosure','',1,true]);

    $('.advertiser-disclosure-close').click(function(e) {
        e.preventDefault();
        hideDisclosure();
    });

    $('body').click(function(e) {
        if(e.target.id != "advertiser_disclosure_link" && e.target.parentNode.id != "advertiser_disclosure_box") {
            hideDisclosure();
        }
    });
}

function hideDisclosure(){
    $("#advertiser_disclosure_box").hide();
    $("#advertiser_disclosure_link").show();
    $('body').unbind('click');
}

/**
 * Rate Explanation
 **/
function insertRankExplanationLink() {
    if ($('body').data('rank-explanation')) {
        var $elem = ($('.how-we-rank').length) ? $('.how-we-rank').first() : (($('.subtitle_txt').length) ? $('.subtitle_txt').first() : $('.topText').first());
        if ($elem.children('p').length)
            $elem = $elem.children('p').last();

        var template_link = $('body').data('rank-explanation');
        var link = ' ' + template_link.replace(/link\((.+)\)/gi, '<a href="javascript:void(0)" onclick="rankExplanation(event, \'' + $('body').data('front-site-id') + '\')" class="rank-explanation-link">$1</a>');

        if (typeof $elem != 'undefined')
            $elem.append(link);
    }
}
function rankExplanation(event, frontSiteId) {
    cancelBubble(event);

    var fancydiv = '<iframe id="rankExplanation" src="/ajax/aj_rank_explanation.php?s=' + frontSiteId + '" style="width: 100%; height: 100%;" scrolling="no" frameborder="0"></iframe>';
    $shellElement = ($('.wrapper').length > 0) ? $('.wrapper').first() : (($('.parent_div').length > 0) ? $('.parent_div').first() : $('.grid-container').first());

    var width = ($(window).width() > 800) ? 800 : $(window).width() - 50;
    var height = (width >= 800) ? 630 : ((width > 450) ? 1000 : 800);

    $.fancybox(fancydiv, {
        width: width,
        height: height,
        fitToView: false,
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: false,
        scrolling: 'no',
        beforeShow: function() {
            $(".fancybox-skin").css("background-color", "white");
        }
    });
}
function cancelBubble(e) {
    var evt = e ? e:window.event;
    if (evt.stopPropagation) evt.stopPropagation();
    if (evt.cancelBubble != null) evt.cancelBubble = true;
}

/**
 * FAQ show/hide functionality
 **/
function faq_click(element){
    var answer = element.parents().closest('tr').next().children('.faq_a');
    if ($(answer).css('display') == 'none') {
        $(element).addClass('active');
        $(answer).css('display', 'inline');
    }
    else {
        $(element).removeClass('active');
        $(answer).css('display', 'none');
    }

    var question = element.parents().closest('tr').children('.faq_q');
    trackEvent(["_trackEvent", "FAQ link", "Clicked", question.text()]);
}