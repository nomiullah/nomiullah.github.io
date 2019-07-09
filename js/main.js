jQuery(document).ready(function($) {
    $(window).load(function() {
        $(".loader").delay(500).fadeOut(1000, function() {
            $(".load_page").fadeOut(1000)
        })
    })
});
jQuery(document).ready(function($) {
    $("#tagline").hide();
    $(window).load(function() {
        $("#tagline").delay(1800).fadeIn(1500)
    })
});
//jQuery(document).ready(function($) {
  //  var open = false;

    //function resizeMenu() {
      //  if ($(this).width() <= 680) {
        //    $("nav,#logo").hide();
          //  $("#nav-mobile,#menu-button").show()
        //} else {
          //  if ($(this).width() >= 680) {
            //    $("nav,#logo").show();
              //  $("#nav-mobile,#menu-button").hide()
            //}
        //}
    //}

    //function setupMenuButton() {
      //  $("#menu-button").click(function(e) {
        //    e.preventDefault();
          //  if (open) {
            //    $("nav").slideUp()
            //} else {
              //  $("nav").slideDown()
            //}
            //open = !open
        //})
    //}
    //$(window).resize(resizeMenu);
    //resizeMenu();
    //setupMenuButton()
//});

$(".image_container_zoom").toggle(function() {
    $(this).animate({
        width: "90%"
    })
}, function() {
    $(this).animate({
        width: "70%"
    })
});
$(document).ready(function() {
    $(".category,.level,.proficiency").hide();
    $(".tool-item").hover(function() {
        $(".skill_hud", this).stop(true, true).delay(200).animate({
            height: "100px"
        }, {
            duration: 400
        });
        $(".category", this).stop(true, true).delay(200).fadeIn(400);
        $(".level", this).stop(true, true).delay(200).fadeIn(400);
        $(".proficiency", this).stop(true, true).delay(200).fadeIn(400)
    }, function() {
        $(".skill_hud").stop(true, true).animate({
            height: "60px"
        }, {
            duration: 400
        });
        $(".category", this).stop(true, true).fadeOut(100);
        $(".level", this).stop(true, true).fadeOut(100);
        $(".proficiency", this).stop(true, true).fadeOut(100)
    })
});
jQuery(document).ready(function($) {
    $(window).load(function() {
        $(".loader").delay(500).fadeOut(1000, function() {
            $(".load_page").fadeOut(1000)
        })
    })
});
$(".close_work").click(function() {
    $("div.work_item").slideUp("slow")
});
$(".work_1").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#whatsapp").slideDown("slow", function() {
                $("#whatsapp").addClass("current")
            })
        })
    } else {
        $("#whatsapp").slideDown("slow", function() {
            $("#whatsapp").addClass("current")
        })
    }
});
$(".work_2").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#ioscalling").slideDown("slow", function() {
                $("#ioscalling").addClass("current")
            })
        })
    } else {
        $("#ioscalling").slideDown("slow", function() {
            $("#ioscalling").addClass("current")
        })
    }
});
$(".work_3").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#booking").slideDown("slow", function() {
                $("#booking").addClass("current")
            })
        })
    } else {
        $("#booking").slideDown("slow", function() {
            $("#booking").addClass("current")
        })
    }
});
$(".work_4").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#dubizzle").slideDown("slow", function() {
                $("#dubizzle").addClass("current")
            })
        })
    } else {
        $("#dubizzle").slideDown("slow", function() {
            $("#dubizzle").addClass("current")
        })
    }
});
$(".work_5").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#azhari").slideDown("slow", function() {
                $("#azhari").addClass("current")
            })
        })
    } else {
        $("#azhari").slideDown("slow", function() {
            $("#azhari").addClass("current")
        })
    }
});
$(".work_6").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#couponincity").slideDown("slow", function() {
                $("#couponincity").addClass("current")
            })
        })
    } else {
        $("#couponincity").slideDown("slow", function() {
            $("#couponincity").addClass("current")
        })
    }
});
$(".work_7").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#danat").slideDown("slow", function() {
                $("#danat").addClass("current")
            })
        })
    } else {
        $("#danat").slideDown("slow", function() {
            $("#danat").addClass("current")
        })
    }
});
$(".work_8").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#doctorized").slideDown("slow", function() {
                $("#doctorized").addClass("current")
            })
        })
    } else {
        $("#doctorized").slideDown("slow", function() {
            $("#doctorized").addClass("current")
        })
    }
});
$(".work_9").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#abella").slideDown("slow", function() {
                $("#abella").addClass("current")
            })
        })
    } else {
        $("#abella").slideDown("slow", function() {
            $("#abella").addClass("current")
        })
    }
});
$(".work_10").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#ittihadna").slideDown("slow", function() {
                $("#ittihadna").addClass("current")
            })
        })
    } else {
        $("#ittihadna").slideDown("slow", function() {
            $("#ittihadna").addClass("current")
        })
    }
});
$(".work_11").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#freekon").slideDown("slow", function() {
                $("#freekon").addClass("current")
            })
        })
    } else {
        $("#freekon").slideDown("slow", function() {
            $("#freekon").addClass("current")
        })
    }
});
$(".work_12").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#qordoba").slideDown("slow", function() {
                $("#qordoba").addClass("current")
            })
        })
    } else {
        $("#qordoba").slideDown("slow", function() {
            $("#qordoba").addClass("current")
        })
    }
});
$(".work_13").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#supplybrand").slideDown("slow", function() {
                $("#supplybrand").addClass("current")
            })
        })
    } else {
        $("#supplybrand").slideDown("slow", function() {
            $("#supplybrand").addClass("current")
        })
    }
});
$(".work_14").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#altaqa").slideDown("slow", function() {
                $("#altaqa").addClass("current")
            })
        })
    } else {
        $("#altaqa").slideDown("slow", function() {
            $("#altaqa").addClass("current")
        })
    }
});
$(".work_15").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#jewelleryexhibition").slideDown("slow", function() {
                $("#jewelleryexhibition").addClass("current")
            })
        })
    } else {
        $("#jewelleryexhibition").slideDown("slow", function() {
            $("#jewelleryexhibition").addClass("current")
        })
    }
});
$(".work_16").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#kyra").slideDown("slow", function() {
                $("#kyra").addClass("current")
            })
        })
    } else {
        $("#kyra").slideDown("slow", function() {
            $("#kyra").addClass("current")
        })
    }
});
$(".work_17").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#alfuadexchange").slideDown("slow", function() {
                $("#alfuadexchange").addClass("current")
            })
        })
    } else {
        $("#alfuadexchange").slideDown("slow", function() {
            $("#alfuadexchange").addClass("current")
        })
    }
});
$(".work_18").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#hummingbit").slideDown("slow", function() {
                $("#hummingbit").addClass("current")
            })
        })
    } else {
        $("#hummingbit").slideDown("slow", function() {
            $("#hummingbit").addClass("current")
        })
    }
});
$(".work_19").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#lc").slideDown("slow", function() {
                $("#lc").addClass("current")
            })
        })
    } else {
        $("#lc").slideDown("slow", function() {
            $("#lc").addClass("current")
        })
    }
});
$(".work_20").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#moxtravel").slideDown("slow", function() {
                $("#moxtravel").addClass("current")
            })
        })
    } else {
        $("#moxtravel").slideDown("slow", function() {
            $("#moxtravel").addClass("current")
        })
    }
});
$(".work_21").click(function() {
    if ($("div.current").is(":visible")) {
        $("div.current").slideUp("slow", function() {
            $("div.current").removeClass("current");
            $("#dws").slideDown("slow", function() {
                $("#dws").addClass("current")
            })
        })
    } else {
        $("#dws").slideDown("slow", function() {
            $("#dws").addClass("current")
        })
    }
});
$("#whatsapp_prev").click(function() {
    $("#whatsapp").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#whatsapp").removeClass("current");
        $("#call").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#call").addClass("current")
        })
    })
});
$("#whatsapp_next").click(function() {
    $("#whatsapp").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#whatsapp").removeClass("current");
        $("#ioscalling").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#ioscalling").addClass("current")
        })
    })
});
$("#ioscalling_prev").click(function() {
    $("#ioscalling").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#ioscalling").removeClass("current");
        $("#whatsapp").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#whatsapp").addClass("current")
        })
    })
});
$("#ioscalling_next").click(function() {
    $("#ioscalling").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#ioscalling").removeClass("current");
        $("#booking").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#booking").addClass("current")
        })
    })
});
$("#booking_prev").click(function() {
    $("#booking").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#booking").removeClass("current");
        $("#ioscalling").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#ioscalling").addClass("current")
        })
    })
});
$("#booking_next").click(function() {
    $("#booking").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#booking").removeClass("current");
        $("#dubizzle").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#dubizzle").addClass("current")
        })
    })
});
$("#dubizzle_prev").click(function() {
    $("#dubizzle").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#dubizzle").removeClass("current");
        $("#booking").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#booking").addClass("current")
        })
    })
});
$("#dubizzle_next").click(function() {
    $("#dubizzle").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#dubizzle").removeClass("current");
        $("#azhari").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#azhari").addClass("current")
        })
    })
});
$("#azhari_prev").click(function() {
    $("#azhari").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#azhari").removeClass("current");
        $("#dubizzle").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#dubizzle").addClass("current")
        })
    })
});
$("#azhari_next").click(function() {
    $("#azhari").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#azhari").removeClass("current");
        $("#couponincity").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#couponincity").addClass("current")
        })
    })
});
$("#couponincity_prev").click(function() {
    $("#couponincity").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#couponincity").removeClass("current");
        $("#azhari").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#azhari").addClass("current")
        })
    })
});
$("#couponincity_next").click(function() {
    $("#couponincity").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#couponincity").removeClass("current");
        $("#danat").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#danat").addClass("current")
        })
    })
});
$("#danat_prev").click(function() {
    $("#danat").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#danat").removeClass("current");
        $("#couponincity").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#couponincity").addClass("current")
        })
    })
});
$("#danat_next").click(function() {
    $("#danat").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#danat").removeClass("current");
        $("#doctorized").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#doctorized").addClass("current")
        })
    })
});
$("#doctorized_prev").click(function() {
    $("#doctorized").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#doctorized").removeClass("current");
        $("#danat").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#doctorized").addClass("current")
        })
    })
});
$("#doctorized_next").click(function() {
    $("#doctorized").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#doctorized").removeClass("current");
        $("#abella").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#abella").addClass("current")
        })
    })
});
$("#abella_prev").click(function() {
    $("#abella").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#abella").removeClass("current");
        $("#doctorized").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#doctorized").addClass("current")
        })
    })
});
$("#abella_next").click(function() {
    $("#abella").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#abella").removeClass("current");
        $("#ittihadna").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#ittihadna").addClass("current")
        })
    })
});
$("#ittihadna_prev").click(function() {
    $("#ittihadna").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#ittihadna").removeClass("current");
        $("#abella").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#abella").addClass("current")
        })
    })
});
$("#ittihadna_next").click(function() {
    $("#ittihadna").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#ittihadna").removeClass("current");
        $("#freekon").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#freekon").addClass("current")
        })
    })
});
$("#freekon_prev").click(function() {
    $("#freekon").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#freekon").removeClass("current");
        $("#ittihadna").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#ittihadna").addClass("current")
        })
    })
});
$("#freekon_next").click(function() {
    $("#freekon").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#freekon").removeClass("current");
        $("#qordoba").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#qordoba").addClass("current")
        })
    })
});
$("#qordoba_prev").click(function() {
    $("#qordoba").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#qordoba").removeClass("current");
        $("#freekon").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#freekon").addClass("current")
        })
    })
});
$("#qordoba_next").click(function() {
    $("#qordoba").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#qordoba").removeClass("current");
        $("#supplybrand").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#supplybrand").addClass("current")
        })
    })
});
$("#supplybrand_prev").click(function() {
    $("#supplybrand").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#supplybrand").removeClass("current");
        $("#qordoba").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#qordoba").addClass("current")
        })
    })
});
$("#supplybrand_next").click(function() {
    $("#supplybrand").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#supplybrand").removeClass("current");
        $("#altaqa").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#altaqa").addClass("current")
        })
    })
});
$("#altaqa_prev").click(function() {
    $("#altaqa").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#altaqa").removeClass("current");
        $("#supplybrand").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#supplybrand").addClass("current")
        })
    })
});
$("#altaqa_next").click(function() {
    $("#altaqa").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#altaqa").removeClass("current");
        $("#jewelleryexhibition").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#jewelleryexhibition").addClass("current")
        })
    })
});
$("#jewelleryexhibition_prev").click(function() {
    $("#jewelleryexhibition").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#jewelleryexhibition").removeClass("current");
        $("#altaqa").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#altaqa").addClass("current")
        })
    })
});
$("#jewelleryexhibition_next").click(function() {
    $("#jewelleryexhibition").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#jewelleryexhibition").removeClass("current");
        $("#kyra").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#kyra").addClass("current")
        })
    })
});
$("#kyra_prev").click(function() {
    $("#kyra").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#kyra").removeClass("current");
        $("#jewelleryexhibition").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#jewelleryexhibition").addClass("current")
        })
    })
});
$("#kyra_next").click(function() {
    $("#kyra").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#kyra").removeClass("current");
        $("#alfuadexchange").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#alfuadexchange").addClass("current")
        })
    })
});
$("#alfuadexchange_prev").click(function() {
    $("#alfuadexchange").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#alfuadexchange").removeClass("current");
        $("#kyra").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#kyra").addClass("current")
        })
    })
});
$("#alfuadexchange_next").click(function() {
    $("#alfuadexchange").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#alfuadexchange").removeClass("current");
        $("#hummingbit").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#hummingbit").addClass("current")
        })
    })
});
$("#hummingbit_prev").click(function() {
    $("#hummingbit").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#hummingbit").removeClass("current");
        $("#alfuadexchange").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#alfuadexchange").addClass("current")
        })
    })
});
$("#hummingbit_next").click(function() {
    $("#hummingbit").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#hummingbit").removeClass("current");
        $("#lc").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#lc").addClass("current")
        })
    })
});
$("#lc_prev").click(function() {
    $("#lc").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#lc").removeClass("current");
        $("#hummingbit").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#hummingbit").addClass("current")
        })
    })
});
$("#lc_next").click(function() {
    $("#lc").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#lc").removeClass("current");
        $("#moxtravel").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#moxtravel").addClass("current")
        })
    })
});

$("#moxtravel_prev").click(function() {
    $("#moxtravel").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#moxtravel").removeClass("current");
        $("#lc").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#lc").addClass("current")
        })
    })
});

$("#moxtravel_next").click(function() {
    $("#moxtravel").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#moxtravel").removeClass("current");
        $("#dws").effect("drop", {
            direction: "right",
            mode: "show"
        }, 400, function() {
            $("#dws").addClass("current")
        })
    })
});
$("#dws_prev").click(function() {
    $("#dws").effect("drop", {
        direction: "left",
        mode: "hide"
    }, 400, function() {
        $("#dws").removeClass("current");
        $("#moxtravel").effect("drop", {
            direction: "left",
            mode: "show"
        }, 400, function() {
            $("#moxtravel").addClass("current")
        })
    })
});
$("#dws_next").click(function() {
    $("#dws").effect("drop", {
        direction: "right",
        mode: "hide"
    }, 400, function() {
        $("#dws").removeClass("current");
    })
});


function isMobile() {
    return ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/webOS/i)) || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/BlackBerry/)))
}

function tagline() {
    scrollPos = jQuery(this).scrollTop();
    jQuery("#tagline").css({
        "margin-top": -(scrollPos / 3) + "px",
        opacity: 1 - (scrollPos / 550)
    })
}
jQuery(document).ready(function() {
    if (!isMobile()) {
        jQuery(window).scroll(function() {
            tagline()
        })
    }
});
$(document).ready(function() {
    $("#name-contact,#email-contact,#message-contact").val("")
});

function IsChar(name) {
    var regex = /^([A-Za-z][ éàëA-Za-z]*)$/;
    return regex.test(name)
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email)
}
$(document).ready(function() {
    $("#error-wrap,#success-wrap,#error,#success").hide();
    $("#send-email").click(function() {
        var name = $("#name-contact").val();
        var email = $("#email-contact").val();
        var message = $("#message-contact").val();
        var errors = new Array();
        var i = -1;
        if (!IsChar(name) || ($.trim(name).length == 0)) {
            i++;
            errors[i] = " ";
            $("#name-contact").animate({
                outlineColor: "#5c6576"
            }, "slow");
            $("#error-wrap").stop(true, true).delay(200).animate({
                height: "50px",
                mode: "show"
            }, {
                duration: 400
            });
            $("#error").delay(500).fadeIn(700)
        }
        if (!IsEmail(email)) {
            i++;
            errors[i] = " ";
            $("#email-contact").animate({
                outlineColor: "#5c6576"
            }, "slow");
            $("#error-wrap").stop(true, true).delay(200).animate({
                height: "50px",
                mode: "show"
            }, {
                duration: 400
            });
            $("#error").delay(500).fadeIn(700)
        }
        if ($.trim(message).length == 0) {
            i++;
            errors[i] = " ";
            $("#message-contact").animate({
                outlineColor: "#5c6576"
            }, "slow");
            $("#error-wrap").stop(true, true).delay(200).animate({
                height: "50px",
                mode: "show"
            }, {
                duration: 400
            });
            $("#error").delay(500).fadeIn(700)
        }
        if (errors.length == 0) {
            $.ajax({
                url: "envoi.php",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                type: "POST",
                success: function(data) {
                    $("#success-wrap").stop(true, true).delay(200).animate({
                        height: "50px",
                        mode: "show"
                    }, {
                        duration: 400
                    });
                    $("#success").delay(500).fadeIn(700);
                    $("#error-wrap").stop(true, true).delay(100).animate({
                        height: "50px",
                        mode: "hide"
                    }, {
                        duration: 200
                    });
                    $("#error").delay(100).fadeOut(200);
                    $("#name-contact,#email-contact,#message-contact").delay(1000).val("");
                    $("#name-contact,#email-contact,#message-contact").animate({
                        outlineColor: "transparent"
                    })
                }
            })
        }
    })
});