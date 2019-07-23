//Sidebar dorpdown menu function
//$('.drop-menu > a').click(function(e) {
  //  $(this).parent().children('.sub-menu-list').slideToggle(500);
    //$(this).parent().toggleClass('active');
//});


//Header resize function
function headerResize() {
    var mainContWidth = $('.main-content').width();
    var leftSide = $('.left-side').width();
    var winWidth = $(window).width();
    $('.header-section').css('width', mainContWidth);

}
$(window).load(function() {
    headerResize();
});

//Menu collpased function
function menuCollapsed() {
    $('body').toggleClass('collpased-layout');
}
$('.menu-collapsed-btn').click(function() {
    menuCollapsed();
    headerResize();


});

function autoResize() {
    if ($(window).width() < 1367) {
        $('body').toggleClass('collpased-layout');

    }
}
autoResize();
//Resize function
$(window).resize(function() {

    if ($(window).width() < 1367) {
        $('body').addClass('collpased-layout');

    } else {
        $('body').removeClass('collpased-layout');
    }
    headerResize();

});

//Header search mobile fucntion
$('.search-trigger').click(function(e) {
    $('.header-search').toggle();
});
//Toggle menu funtion
$('.toggle-menu .toggle-trigger').click(function(e) {
    e.preventDefault();
    $(this).parent().children('.toggle-dropdown').toggle();
});
// Grid and list view swap function

$('.list-trigger').click(function() {

    $('.views-wrap').addClass('view-list');
    $(this).removeClass('inactive');
    $('.grid-trigger').addClass('inactive');
});
$('.grid-trigger').click(function() {
    $('.views-wrap').removeClass('view-list');
    $(this).removeClass('inactive');
    $('.list-trigger').addClass('inactive');
});

// Profile graphs function

function prfoileGraph() {
    var colors = [
            ['#fff', "#00d5c4"],
            ['#FCE6A4', '#EFB917'],
            ['#BEE3F7', '#45AEEA'],
            ['#F8F9B6', '#D2D558'],
            ['#F4BCBF', '#D43A43']
        ],
        circles = [];
    var child1 = document.getElementById('circles-1');
    var percentage1 = 92,
        percent = percentage1;
    circle = Circles.create({
        id: child1.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });

    var child2 = document.getElementById('circles-2');
    var percentage2 = 90,
        percent = percentage2;
    circle = Circles.create({
        id: child2.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child3 = document.getElementById('circles-3');
    var percentage3 = 90,
        percent = percentage3;
    circle = Circles.create({
        id: child3.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child4 = document.getElementById('circles-4');
    var percentage4 = 90,
        percent = percentage4;
    circle = Circles.create({
        id: child4.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child5 = document.getElementById('circles-5');
    var percentage5 = 90,
        percent = percentage5;
    circle = Circles.create({
        id: child5.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child6 = document.getElementById('circles-6');
    var percentage6 = 90,
        percent = percentage6;
    circle = Circles.create({
        id: child6.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child7 = document.getElementById('circles-7');
    var percentage7 = 90,
        percent = percentage7;
    circle = Circles.create({
        id: child7.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    

    var child8 = document.getElementById('circles-8');
    var percentage8 = 90,
        percent = percentage5;
    circle = Circles.create({
        id: child8.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });

    function getWidth() {
        if ($('.views-wrap').hasClass('view-list')) {
            return 10;
        } else {
            return 50;
        }
    };

    function getBorder() {
        if ($('.views-wrap').hasClass('view-list')) {
            return 3;
        } else {
            return 7;
        }
    };
};


//Select card function
$('.select-card').click(function(){
    $('.select-card').removeClass('active');
    $(this).addClass('active');
});

$(window).load(function() {

    if ($(".circle").length) {
        prfoileGraph();
    }

    if ($('.modal').hasClass('full-page')) {
        $('body').addClass('full-page-popup');
    }
    $('#add-client-step-1').modal('show');
    $('#add-client-step-2').modal('show');
    $('#add-client-step-3').modal('show');
    $('#add-client-step-4').modal('show');
});



// SideBar graphs function
function sidebarGraph() {
    var colors = [
            ['#fff', "#00d5c4"],
            ['#FCE6A4', '#EFB917'],
            ['#BEE3F7', '#45AEEA'],
            ['#F8F9B6', '#D2D558'],
            ['#F4BCBF', '#D43A43']
        ],
        circles = [];
    var child1 = document.getElementById('circles-1');
    var percentage1 = 10,
        percent = percentage1;
    circle = Circles.create({
        id: child1.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });

    var child2 = document.getElementById('circles-2');
    var percentage2 = 15,
        percent = percentage2;
    circle = Circles.create({
        id: child2.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child3 = document.getElementById('circles-3');
    var percentage3 = 2,
        percent = percentage3;
    circle = Circles.create({
        id: child3.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child4 = document.getElementById('circles-4');
    var percentage4 = 90,
        percent = percentage4;
    circle = Circles.create({
        id: child4.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child5 = document.getElementById('circles-5');
    var percentage5 = 30,
        percent = percentage5;
    circle = Circles.create({
        id: child5.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child6 = document.getElementById('circles-6');
    var percentage6 = 40,
        percent = percentage6;
    circle = Circles.create({
        id: child6.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });
    var child7 = document.getElementById('circles-7');
    var percentage7 = 62,
        percent = percentage7;
    circle = Circles.create({
        id: child7.id,
        value: percent,
        radius: getWidth(),
        width: getBorder(),
        colors: colors[0]
    });

    function getWidth() {
        if ($('.views-wrap').hasClass('view-list')) {
            return 10;
        } else {
            return 50;
        }
    };

    function getBorder() {
        if ($('.views-wrap').hasClass('view-list')) {
            return 3;
        } else {
            return 7;
        }
    };


};
//Select card function
$('.select-card').click(function(){
    $('.select-card').removeClass('active');
    $(this).addClass('active');
});

$(window).load(function() {
    if ($(".circle-sidebar").length) {
        sidebarGraph();
    }

    if ($('.modal').hasClass('full-page')) {
        $('body').addClass('full-page-popup');
    }
    $('#add-client-step-1').modal('show');
    $('#add-client-step-2').modal('show');
    $('#add-client-step-3').modal('show');
    $('#add-client-step-4').modal('show');
});