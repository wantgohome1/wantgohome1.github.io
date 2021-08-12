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

    $move.find("li").eq(num+1).css({
        "background-color": "#000",color:"#fff"
    });
    $move.find("li").click(function () {
        num = $(this).index();
        for (var i = 0; i < 8; i++) {
            console.log(i);
            if (i != num) {
                $move.find("li").eq(i).animate({
                    "background-color": "#fff",color:"000"
                }, 300);
            } else {
                $move.find("li").eq(i).animate({
                    "background-color": "#000",color:"fff"
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
});