$(function () {
    $(".gnb li,#sub_wrap,#sub li").hover(function () {
        $(".sub,#sub_wrap").stop().slideDown("linear")
    }, function () {
        $(".sub,#sub_wrap").stop().slideUp("linear")
    });
    //버튼
    var count = 0;
    var num = 0;
    var yoffset = 0;
    var $move = $("#buttons ul");
    var $picture = $("#picture img");

    $move.find("li").eq(num + 1).css({
        "background-color": "#000",
        color: "#fff"
    });
    $move.find("li").click(function () {
        num = $(this).index();
        for (var i = 0; i < 8; i++) {
            console.log(i);
            if (i != num) {
                $move.find("li").eq(i).animate({
                    "background-color": "#fff",
                    color: "000"
                }, 300);
            } else {
                $move.find("li").eq(i).animate({
                    "background-color": "#000",
                    color: "fff"
                }, 300);
                $picture.attr({
                    src: "images/vs" + (num + 1) + ".jpg"
                }).css({
                    opacity: "0"
                }).animate({
                    opacity: "1"
                }, 300);
            }
        }

    }); //buttons li 클릭끝
    $("#down").click(function () {

        if (count < 2) {
            count++; //0,1,2
            yoffset = count * (-50);

        }

        $move.animate({
            top: yoffset + "px"
        }, 300);
    });
    $("#up").click(function () {

        if (count > 0) { //0,1,2
            count--;
            yoffset = count * (-50);

        }

        $move.animate({
            top: yoffset + "px"
        }, 300);
    });
    //이미지 스핀
    $(".prev").click(function () {
        $(".spin_box img").each(function (index) {
            console.log(index);
            var num = $(this).attr("data");
            if (++num >= 7) {
                num -= 7;
            }
            $(this).attr("class", "p" + num);
            $(this).attr("data", num);
        });
    });
    $(".next").click(function () {
        $(".spin_box img").each(function (index) {
            var num = $(this).attr("data");
            if (--num < 0) {
                num += 7;
            }
            $(this).attr("class", "p" + num);
            $(this).attr("data", num);
        });
    });
    /*.loacation.href("../index01.html")*/
    //화이팅
    /*   $("#page2 .page2_tit").animate({
        marginLeft: "-200px"
    })
    $(".section2_tit1").delay(500).animate({
        marginLeft: "250px"
    })
    $(".section2_tit2").delay(1000).animate({
        marginLeft: "-250px"
    })*/


    $(window).scroll(function () {
        var ht = $(window).scrollTop();
        console.log("ht:" + ht)
        if (ht > 850 && ht <= 2000) {
            $("#page2 .page2_tit").animate({
                marginLeft: "50px"
            })
            $(".section2_tit1").delay(700).animate({
                right: "30px"
            })
            $(".section2_com1").delay(700).animate({
                right: "30px"
            })
            $("#page2 #section2_1").delay(700).animate({
                left: "0"
            })
            $("#page2 #section2_2").delay(1500).animate({
                right: "0"
            })
            $(".section2_tit2").delay(1500).animate({
                left: "0px"
            })
            $(".section2_com2").delay(1500).animate({
                left: "0px"
            })
        } else if (ht > 1700 && ht < 2500) {
            $(".audi_bg").animate({
                right: "-100px"
            })
        } else if (ht > 3300 && ht < 4500) {
            $(".page4_tit").addClass("on");

        }
        if (ht > 3600 && ht <4430){
            $(".page4_sub").addClass("on");
            $(".phone_box img").addClass("on")
            $(".phone_sub1").addClass("on")
            $(".phone_sub2").addClass("on")
        }else if(ht > 4430 && ht <5000){
            $(".page4_sub2").addClass("on");
            $(".pob").addClass("on")
            
        }
    });
});