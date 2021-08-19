$(function () {
    //좌측 불들어오게 하기
    $(window).scroll(function () {
        var ht = $(window).scrollTop();
        console.log("ht:" + ht)
        if (ht > 0 && ht < 300) {
            $(".cnt_box > ul > li > a").css({
                background: "#fff"
            });
            $(".cnt_icon1 a").css({
                backgroundColor: "#eee"
            });
        } else if (ht > 300 && ht < 1150) {
            $(".cnt_box > ul > li > a").css({
                background: "#fff"
            });
            $(".cnt_icon2 a").css({
                backgroundColor: "#eee"
            });
        } else if (ht > 1150 && ht < 1938) {
            $(".cnt_box > ul > li > a").css({
                background: "#fff"
            });
            $(".cnt_icon3 a").css({
                backgroundColor: "#eee"
            });
        } else if (ht > 1938 && ht < 2907) {
            $(".cnt_box > ul > li > a").css({
                background: "#fff"
            });
            $(".cnt_icon4 a").css({
                backgroundColor: "#eee"
            });
        } else if (ht > 2907) {
            $(".cnt_box > ul > li > a").css({
                background: "#fff"
            });
            $(".cnt_icon5 a").css({
                backgroundColor: "#eee"
            });
        }
    })

    //vs배너 옮기기
    var current = 0;
    $(".ban li:gt(0)").fadeOut()
    $(".ban1 li:gt(0)").fadeOut()
    $(".vs_btn_box ul li").eq(0).find("a").addClass("on");

    function nextani(i) {
        if (current == i) return;
        $(".ban li").eq(i).fadeIn(1500).siblings().fadeOut(1500);
        current = i;
    }

    function timer() {
        var n = current + 1;
        if (n == $(".ban li").length) {
            n = 0;
        }
        $(".vs_btn_box a").eq(n).trigger("click");
    }
    var interval = setInterval(timer, 4500);

    $(".vs_btn_box a").click(function (e) {
        e.preventDefault();
        $(".vs_btn_box a").removeClass("on");
        $(this).addClass("on");
        var i = $(this).parent().index();
        /*        console.log(i);*/

        /* $(".ban li").eq(i).fadeIn(1500).siblings().fadeOut(1500);*/
        nextani(i);
    });
    $(".vs_btn_box a").hover(function () {
        clearInterval(interval);
    }, function () {
        interval = setInterval(timer, 4500);
    });
    //통통
    function tong() {
        $(".scroll_dwn").animate({
            bottom: "0px"
        }, 500, "linear")
        $("#map_icon1").animate({
            top: "480px"
        }, 500, "linear")
        $("#map_icon2").animate({
            top: "390px"
        }, 500, "linear")
        $("#map_icon3").animate({
            top: "440px"
        }, 500, "linear")
        $(".scroll_dwn").animate({
            bottom: "10px"
        }, 500, "linear")
        $("#map_icon1").animate({
            top: "490px"
        }, 500, "linear")
        $("#map_icon2").animate({
            top: "400px"
        }, 500, "linear")
        $("#map_icon3").animate({
            top: "450px"
        }, 500, "linear")
    }
    var intertong = setInterval(tong, 500);
    //좌측 버튼 바로가기
    $(".cnt_box ul li a").click(function (e) {
        e.preventDefault();
        var page = $(this).attr("href");
        var color1 = page.slice(1);
        var top = $(page).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 700, "swing");
        $(".cnt_box ul li a").css({
            backgroundColor: "#fff"
        })
        $(this).css({
            backgroundColor: "#eee"
        });
    });
    // 메뉴 애니메이션
    var a = "(";
    var b = ")";
    var n = 0;
    $("#ck1").click(function () {
        n++
        if (n == 1) {
            $(".tnb .span1").css({
                top: "15px",
                transform: "rotate" + a + "135deg" + b
            })
            $(".tnb .span2").css({
                top: "15px",
                transform: "rotate" + a + "135deg" + b
            })
            $(".tnb .span3").css({
                top: "15px",
                transform: "rotate" + a + "45deg" + b
            })
        } else if (n == 2) {
            $(".tnb .span1").css({
                top: "0px",
                transform: "rotate" + a + "0deg" + b
            })
            $(".tnb .span2").css({
                top: "15px",
                transform: "rotate" + a + "0deg" + b
            })
            $(".tnb .span3").css({
                top: "30px",
                transform: "rotate" + a + "0deg" + b
            })
            n = 0;
        }
    });
    //페이지 하나씩 넘어가기
    var ht = $(window).height();
    $("section").height(ht);
    $(window).resize(function () {
        var ht = $(window).height();
        $("section").height(ht);
        $(window).scrollTop(ht);
        location.reload();
    });
    $(window).scroll(function () {
        var ht = $(window).height();
        var t = $(window).scrollTop();

        if (t >= ht * 0 && t < ht * 1) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(0).addClass("on");
        } else if (t >= ht * 1 && t < ht * 2) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(1).addClass("on");
        } else if (t >= ht * 2 && t < ht * 3) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(2).addClass("on");
        } else if (t >= ht * 3 && t < ht * 4) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(3).addClass("on");
        }
    });
    $(".page_wrap").on("mousewheel", function (event, delta) {
        /*        console.log(delta);*/
        //마우스를 올릴때
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            /*            console.log("prev :" + prev);*/
            $("html, body").stop().animate({
                scrollTop: prev
            }, 1000, "swing");

            //마우스를 내릴때
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $("html, body").stop().animate({
                scrollTop: next
            }, 1000, "swing");
        }
    });
    $("#menu li").click(function () {
        var num = $(this).index();
        var nowTop = num * ht;
        $("html, body").stop().animate({
            scrollTop: nowTop
        }, 1000, "swing");
    });

    //section4_slide
    var i = 0;
    $("#next").on("click", function (e) {
        e.preventDefault();
        if (i == 2) {
            return false;
        }
        i++;
        console.log("i :" + i);
        $(".section4_ban").animate({
            marginLeft: (i * -370) + "px"
        })
        $(".bar").animate({
            paddingRight: (i * 370) + "px"
        })
    });
    $("#prev").on("click", function (e) {
        e.preventDefault();
        var a = $(".section4_ban").css("marginLeft");
        var b = Number(a.slice(0, 4))
        var c = $(".bar").css("paddingRight");
        var d = Number(c.slice(0, 3))
        console.log(d);
        if (i == 0) {
            return false;
        }
        i--;
        $(".section4_ban").animate({
            marginLeft: (b + 370) + "px"
        })
        $(".bar").animate({
            paddingRight: (d - 370) + "px"
        })
    });
});