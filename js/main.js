$(function () {
            var text = document.getElementById("textType");

            var typewriter = new Typewriter(text, {
                loop: true
            });

            typewriter.typeString('신속하지만 정교하게')
                .pauseFor(2500)
                .deleteAll()
                .typeString('서투르지만 완벽하게')
                .pauseFor(2500)
                .deleteAll()
/*                .typeString('집에 가고 싶..')
                .pauseFor(2500)
                .deleteAll()*/
                /*.deleteChars(7)*/
                .typeString('시작은 미약하지만 끝은 창대하게')
                .pauseFor(2500)
                .start();
    //첫번쨰 슬라이드
        $(".ban1 li:gt(0)").css({display:"none"});
       function nextani(){
           $(".ban1 li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban1");
       };
       function prevani(){
          $(".ban1 li:last").fadeOut(500).prev().fadeIn(500).end().prependTo(".ban1");
       }
    
       $(".next1").click(function(e){
           e.preventDefault();
           nextani();
       });
        $(".prev1").click(function(e){
           e.preventDefault();
           prevani();
       });
    
    //두번째 슬라이드
     $(".ban2 li:gt(0)").css({display:"none"});
       function nextani1(){
           $(".ban2 li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban2");
       };
       function prevani1(){
          $(".ban2 li:last").fadeOut(500).prev().fadeIn(500).end().prependTo(".ban2");
       }
    
       $(".next2").click(function(e){
           e.preventDefault();
           nextani1();
       });
        $(".prev2").click(function(e){
           e.preventDefault();
           prevani1();
       });
    //세번째 슬라이드
     $(".ban3 li:gt(0)").css({display:"none"});
       function nextani2(){
           $(".ban3 li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban3");
       };
       function prevani2(){
          $(".ban3 li:last").fadeOut(500).prev().fadeIn(500).end().prependTo(".ban3");
       }
    
       $(".next3").click(function(e){
           e.preventDefault();
           nextani2();
       });
        $(".prev3").click(function(e){
           e.preventDefault();
           prevani2();
       });
    $("#home").click(function(e){
        e.preventDefault();
       var page1 = $("#page1").offset().top;
        $("html, body").animate({
            scrollTop: page1
        });
    });
    $("#about").click(function(e){
        e.preventDefault();
       var page2 = $("#page2").offset().top;
        $("html, body").animate({
            scrollTop: page2
        });
    });
    $("#web").click(function(e){
        e.preventDefault();
       var page4 = $("#page4").offset().top;
        $("html, body").animate({
            scrollTop: page4
        });
    });
    $("#etc").click(function(e){
        e.preventDefault();
       var page5 = $("#page5").offset().top;
        $("html, body").animate({
            scrollTop: page5
        });
    });
    $("#plz").click(function(e){
        e.preventDefault();
       var page6 = $("#page6").offset().top;
        $("html, body").animate({
            scrollTop: page6
        });
    });
    
    
    
    // $(window).scrollTop(function(){
    // var hd = $(".hd_wrap").offset().top;
    // var scr1 = $("#page1").offset().top;
    // var scr2 = $("#page2").offset().top;
    //     if(hd > scr1 ) {
    //     $(".hd_wrap").animate({backgroundColor:"#222"}, 300);
    // } else {
    //     $(".hd_wrap").animate({backgroundColor:"#fff"}, 300);
    // }
    // })
});