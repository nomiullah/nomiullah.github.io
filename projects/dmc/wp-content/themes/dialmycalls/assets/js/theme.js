jQuery(document).ready(function ($) {
  $body = $("body");

  stickyHeaderLogic();

  // jQuery Tabs.
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  // Mobile Menu.
  $("#hamburger").on("click", function () {
    $(this).toggleClass("open");
    $(".header__menu").toggleClass("active");
    $("body").toggleClass("menu_opened");
  });

  $('.menu-item-has-children').on('click', function () {
    let $this = $(this);
    $this
      .siblings('.is-active')
      .removeClass('is-active')
      .children('.sub-menu')
      .slideUp();
    $this
      .addClass('is-active')
      .children('.sub-menu')
      .slideDown();
  });

  $(window).scroll(function () {
    stickyHeaderLogic();
  });

  $(function () {
    $('input[name="phonenumber"]', "#form-sample-call").setMask();
    $('input[name="phonenumber"]', "#form-request-quote").setMask();

    $("#form-sample-call").ajaxForm({
      dataType: "json",
      success: function (response) {
        if (response["result"] == "ok") {
          $(".modal-body", "#modal-sample-call").html(
            "Thank you! You should receive your sample call shortly."
          );
        } else {
          var msg = "The following errors occurred:";
          $.each(response["errors"], function (key, value) {
            msg += "\n- " + value;
          });
          alert(msg);
        }
      }
    });

    $("#form-request-quote").ajaxForm({
      dataType: "json",
      success: function (response) {
        if (response["result"] == "ok") {
          $(".modal-body", "#modal-request-quote").html(
            "Thank you! Someone on our team will get back to you shortly with custom pricing information."
          );
        } else {
          var msg = "The following errors occurred:";
          $.each(response["errors"], function (key, value) {
            msg += "\n- " + value;
          });
          alert(msg);
        }
      }
    });
  });

  $("a.fancy_img").fancybox({
    titleShow: false
  });

  // $('.dropdown-toggle').on('click', function(evt) {
  //     evt.stopPropagation();
  // });

  var $tabTitle = $(".paymounth > h2");
  var $tabs = {};

  $(".tabbs [data-tab-link]").click(function () {
    var $curr = $(this);

    // Show new title (if any).
    var title = $curr.data("title");

    if (title !== null) {
      $tabTitle.html(title);
    }

    // Mark others inactive, this one active.
    $curr.addClass("active");
    $curr.siblings().removeClass("active");

    var key = $curr.data("tab-link");

    // Get tab, show, hide others.
    if (typeof $tabs[key] === "undefined") {
      $tabs[key] = $('.content[data-tab="' + key + '"]');
    }

    $tabs[key].fadeIn();
    $tabs[key].siblings().hide();
  });

  $(".tabbs tr").click(function () {
    $('td:first > input[type="radio"]:first', $(this)).prop("checked", true);
  });
});

function stickyHeaderLogic() {
  var y = $(window).scrollTop();
  var $header = $(".header");

  if (y > 0) {
    $header.addClass("header-scrolled");
  } else {
    $header.removeClass("header-scrolled");
  }
}