$(function(){
    var charts = $(".charts");
    var chart = $(".chart");
    var chartOST = chart.offset().top -500;    
    var about = $("blockquote");
    var aboutOST = about.offset().top -300;
    var foot = $("footer")
    var footOST = foot.offset().top-500;
    var menu = $("header nav ul li");
    var menuColor = $("main section");
    var jin_text = $("#jin_text")
    var jin_img = $("#jin_img")
    var jin_imgOST = jin_img.offset().top-500;
    var jeju_text = $("#jeju_text")
    var jeju_img = $("#jeju_img")
    var jeju_imgOST = jeju_img.offset().top-500;
    
    sec_top();

    $(window).scroll(function(){
        scroll();
        if($(this).scrollTop()>= chartOST){
            if(!charts.hasClass("active")){
                animateChart();
                charts.addClass("active");
            }

        };
        if($(this).scrollTop() > aboutOST){
            about.addClass("animate");
        };
        if($(this).scrollTop() > jin_imgOST){
            jin_text.addClass("text_in")
            jin_img.addClass("img_in")
        };
        if($(this).scrollTop() > jeju_imgOST){
            jeju_text.addClass("text_in")
            jeju_img.addClass("img_in")
        };
        if($(this).scrollTop() > footOST){
            foot.find(".box").addClass("animate_down");
            foot.find(".Idiom").addClass("show");
            foot.find(".contact").addClass("show");
        }else{
            foot.find(".box").removeClass("animate_down");
            foot.find(".Idiom").removeClass("show");
            foot.find(".contact").removeClass("show");
        }
    });

    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var targetNum = item.find("h2").attr("data-num");
            var circle = item.find("circle");
            
            $({rate:0}).animate({rate:targetNum},
                {
                    duration:1500,
                    progress : function(){
                        var now = this.rate;
                        var amount = 630 - (630*now/100);
                        circle.css({strokeDashoffset:amount});
                    }
                });
        });
    }
    function scroll(){
        $(window).scroll(function(){
            var $top = $(window).scrollTop();
            if($top != 0){
                $("header").addClass("active");
            }else{
                $("header").removeClass("active");
            }
        });
    };
    function sec_top(){
        menu.click(function(e){
            e.preventDefault();
            var idx = $(this).index();
            console.log(idx);
            var section = menuColor.eq(idx);
            var sectionDistance = section.offset().top-$("header").height();
            $("html,body").stop().animate({scrollTop:sectionDistance},1000);
        });
    }
});