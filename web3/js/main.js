$(function () {
    $(".left,.right").hover(function () {
        $("#sub_wrap").stop().slideDown();
        $(".l_sub,.r_sub").stop().slideDown();
    }, function () {
        $("#sub_wrap").stop().slideUp();
        $(".l_sub,.r_sub").stop().slideUp();
    });

    function nextani() {
        $(".ban").not(":animated").animate({
            marginLeft: "-100%"
        }, 500, "linear", function () {
            $(".ban li").eq(0).appendTo(".ban");
            $(".ban").css({
                marginLeft: "0"
            })
        })
    }

    function prevani() {
        $(".ban li").eq(4).prependTo(".ban");
        $(".ban").css({
            marginLeft: "-100%"
        });
        $(".ban").not(":animated").animate({
            marginLeft: "0"
        }, 500, "linear");
    }
    /*$(".prev").click(function () {
        prevani();
    });*/

    var a = $(".ban li").eq(0).find("img").attr("src");
    var b = a.slice(9, 10);

    var c = $(".scroll_bar").css("paddingRight");

    var d = Number(c.slice(0, 1))

    var e = $(".chg").text();

    var f = Number(e);

    var i = 1;
    $(".next").on("click", function (e) {
        e.preventDefault();


        if (i <= 4) {
            i++;
            $(".chg").text(i);
            nextani();
            $(".scroll_bar").animate({
                paddingRight: (i - 1) * 66 + "px"
            });

        }
    });
    $(".prev").on("click", function (e) {
        e.preventDefault();
        /*console.log(i);*/


        if (i > 1) {
            i--;
            $(".chg").text(i);
            prevani();
            $(".scroll_bar").animate({
                paddingRight: (i - 1) * 66 + "px"
            });

        }
    });

    var count = 0;
    var count2 = 0;
    var yoffset = 0;
    var $move = $(".pg2_sum");
    var $move2 = $(".pg2_sum2");
    var $move3 = $(".pg3_sum");
    //buttons li 클릭끝

    //첫번쨰 슬라이드 car

    $(".next_btn").click(function (e) {
        e.preventDefault();
        if (count < 4) {
            count++; //0,1,2,4
            /*console.log("count:" + count)*/
            yoffset = count * (-300);

        }
        if (count == 4) {
            $(".next_btn").css({
                opacity: "0.6"
            });
        }

        $move.animate({
            marginLeft: yoffset + "px"
        }, 300);
    });
    $(".prev_btn").click(function (e) {
        e.preventDefault();
        if (count > 0) { //0,1,2
            count--;
            yoffset = count * (-300);
            $(".next_btn").css({
                opacity: "1"
            });

        }

        $move.animate({
            marginLeft: yoffset + "px"
        }, 300);
    });

    //두번째 슬라이드 brand
    $(".next_btn2").click(function (e) {
        e.preventDefault();
        if (count2 < 4) {
            count2++; //0,1,2,4
            /*console.log("count2:" + count2)*/
            yoffset = count2 * (-300);


        }
        if (count2 == 4) {
            $(".next_btn2").css({
                opacity: "0.6"
            });
        }

        $move2.animate({
            marginLeft: yoffset + "px"
        }, 300);
    });
    $(".prev_btn2").click(function (e) {
        e.preventDefault();
        if (count2 > 0) { //0,1,2
            count2--;
            /*console.log("count2:" + count2);*/
            yoffset = count2 * (-300);
            $(".next_btn2").css({
                opacity: "1"
            });

        }

        $move2.animate({
            marginLeft: yoffset + "px"
        }, 300);
    });

    //세번째 슬라이드 Tip
    var count3 = 0;
    $(".next_btn3").click(function (e) {
        e.preventDefault();
        if (count3 < 4) {
            count3++; //0,1,2,4
            /*console.log("count2:" + count2)*/
            yoffset = count3 * (-300);


        }
        if (count3 == 4) {
            $(".next_btn3").css({
                opacity: "0.6"
            });
        }

        $move3.animate({
            marginLeft: yoffset + "px"
        }, 300);
    });
    $(".prev_btn3").click(function (e) {
        e.preventDefault();
        if (count3 > 0) { //0,1,2
            count3--;
            /*console.log("count2:" + count2);*/
            yoffset = count3 * (-300);
            $(".next_btn3").css({
                opacity: "1"
            });

        }

        $move3.animate({
            marginLeft: yoffset + "px"
        }, 300);
    });
});