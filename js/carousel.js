/**
 * Created by Administrator on 2016/10/9 0009.
 */
/*
 *
 *
 *
 *
 *
 *
 *
 *
 * */
jQuery.fn.carousel =function (sett,off,dot) {


    if(off == undefined|| off == true ){
        off=true;//默认左右控制
    }else {
        off=false;//默认左右控制
    }
    if(dot == undefined|| dot == true ){
        dot=true;//默认圆点
    }else {
        dot=false;//默认圆点
    }


    var btn='<a href="###" style="display: inline-block;margin: 0 5px;width: 14px;height: 14px;background-color: #7a7a7a;border-radius: 50%;"></a>';
    var len=sett.element.children('ul').children('li').length-1;
    var width=sett.element.children('ul').children('li').outerWidth(true);
    for (var i=0;i<len;i++){
        btn +='<a href="###" style="display: inline-block;margin: 0 5px;width: 14px;height: 14px;background-color: #7a7a7a;border-radius: 50%;"></a>';
    }
    sett.element.children('ul').css('width',width*(len+1));
    //  sett.element.css('width',width);
    if(off){
        sett.element.append(' <div class="banner-off" style="display: none;"> <a href="###"  style="background-color: rgba(0, 0, 0, 0.3);color: #fff;font-size: 30px;font-family: simsun;width: 26px;line-height: 60px;text-align: center;position: absolute;top: 50%;margin-top: -30px;"><</a> <a href="###"   style="right:0;background-color: rgba(0, 0, 0, 0.3);color: #fff;font-size: 30px;font-family: simsun;width: 26px;line-height: 60px;text-align: center;position: absolute;top: 50%;margin-top: -30px;">></a> </div>')
    }
    if(dot){
        $('<div class="banner-dot"  style="width: 100%;text-align: center;position: absolute;bottom: 8px;"></div>').append(btn).appendTo(sett.element);
        sett.element.children('div.banner-dot').last().children('a').eq(0).css('background-color','#ff4b3f');
    }
    var defaultset={
        time:3000,//时间间隔
        left:sett.element.children('div.banner-off').eq(0).children('a').eq(0),
        right:sett.element.children('div.banner-off').eq(0).children('a').eq(1),
        oli:1//


    };
    sett = $.extend({},defaultset,sett);
    console.log(sett);
    var index = 0, timer;
    sett.element.hover(function () {
        $(this).children('div.banner-off').first().show();
        clearInterval(timer)
    }, function () {
        $(this).children('div.banner-off').first().hide();
        timers()
    }).mouseleave();
    sett.left.hover(function () {
        if(!off){
            clearInterval(timer)
        }
    },function(){
        if(!off){
            timers()
        }

    });
    sett.right.hover(function () {
        if(!off){
            clearInterval(timer)
        }

    },function(){
        if(!off){
            timers()
        }
    });

    sett.element.children('div.banner-dot').last().children('a').mouseover(function () {
        $(this).css('background-color','#ff4b3f').siblings().css('background-color','#7a7a7a');
        index = $(this).index();
        animate()
    });

    sett.left.click(function () {
        index--;
        if (index == -1) index = len-(sett.oli-1);
        animate()
    });
    sett.right.click(function () {
        index++;
        if (index+(sett.oli-1) == (len+1)) index = 0;
        animate()
    });
    function animate() {
        sett.element.children('ul').stop(true).animate({left: -(width * index)});
        sett.element.children('div.banner-dot').last().children('a').css('background-color','#7a7a7a').eq(index).css('background-color','#ff4b3f')
    }

    function timers(){
        timer = setInterval(function () {
            index++;
            if (index+(sett.oli-1) == (len+1)) index = 0;
            //console.log(width);
            animate()
        },sett.time)
    }
};