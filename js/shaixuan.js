/**
 * Created by Administrator on 2016/10/18 0018.
 */
var pageNo=1;
$('.yema').on('click', 'a', function () {
    // console.log($('.page-box a').last().prev().html());
    if ($(this).html() == '上一页') {
        console.log(pageNo);
        if (!(pageNo == 1)) {
            pageNo -= 1;
            Collect(pageNo);
        }
    } else if ($(this).html() == '下一页') {
        console.log(pageNo);
        if (!(pageNo == $('.yema a').last().prev().html())) {
            console.log(pageNo);
            pageNo += 1;
            Collect(pageNo);
        }
    } else {
        //console.log(pageNo);
        pageNo = parseInt($(this).html());
        Collect(pageNo);
    }

});

/*---------------------筛选-------------------------*/
var Ohtml1;
$('.quyu a').click(function() {
    for(var i=0;i<20;i++){
        $('.quyu a').eq(i).removeClass('c2');
    }
    $(this).addClass('c2');
if($(this).html()=='全部'){
    Ohtml1=undefined;
}else Ohtml1=$(this).html();
    Collect(Ohtml1);

});
var Ohtml2;
$('.zujin a').click(function() {
    for(var i=0;i<20;i++){
        $('.zujin a').eq(i).removeClass('c2');
    }
    $(this).addClass('c2');
    if($(this).html()=='全部'){
        Ohtml2=undefined;
    }else Ohtml2=$(this).html();
    Collect(Ohtml2);
});
var Ohtml3;
$('.fangxing a').click(function() {
    for(var i=0;i<20;i++){
        $('.fangxing a').eq(i).removeClass('c2');
    }
    $(this).addClass('c2');
    if($(this).html()=='全部'){
        Ohtml3=undefined;
    }else Ohtml3=$(this).index();
    Collect(Ohtml3);

});
/*---------------下拉------------------*/
//
//$('.xiala').on({
//
//    focus: function () {
//        $('.xuaze').removeClass('yin')
//}
//});


$('.xiala').eq(0).toggle(
    function(){
        //for(var i= 0;i<2;i++){
        //    $('.xuanze').eq(i).addClass('yin');
        //}
        $('.xuanze').eq(0).show()

    },
    function (){
        //$('.xuanze').eq(0).removeClass('yin')
        $('.xuanze').hide()
    }


);


$('.xiala').eq(1).toggle(
    function(){
        //for(var i= 0;i<2;i++){
        //    $('.xuanze').eq(i).addClass('yin');
        //}
        $('.xuanze').eq(1).show()

    },
    function (){
        //$('.xuanze').eq(1).removeClass('yin')
        $('.xuanze').hide()
    }
);
var Oroom;
$('#xiala-1 p').click(function () {
    Oroom=$(this).index();
    $('#change1').html($(this).html());
    if(Oroom==0){
        Oroom=undefined
    }else if(Oroom<5){
        Oroom=(Oroom-1)+'室1厅';
    }else Oroom=(Oroom-3)+'室2厅';
    console.log(Oroom);
    Collect(Oroom);

    //$('#city').click();
});
var hlevel;
$('#xiala-2 p').click(function () {
    hlevel=$(this).html();
    $('#change2').html($(this).html());
    console.log(hlevel);
    Collect(hlevel);
    //$('#city').click();
});


//console.log(Ohtml1);
//console.log(pageNo);
Collect(pageNo);
function Collect() {
    //console.log(Ohtml2);
    //console.log(Ohtml1);
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo,
            region: Ohtml1,
            price: Ohtml2,
            shi:Ohtml3,
            hlevel:hlevel,
            room:Oroom
        },
        success: function (data) {
            //console.log(data.rowCount);
            console.log(data);
            /*------------------插入页码---------------------*/
            if (data.success) {
                var a;
                if (Math.ceil(data.rowCount / 5) <= 5) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= Math.ceil(data.rowCount / 5); i++) {
                        if (i == pageNo) {
                            a += '<a href="###" class="dangqianyema">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo <= 3) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= 4; i++) {
                        if (i == pageNo) {
                            a += '<a href="###" class="dangqianyema">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<s> ··· </s><a href="###">' + Math.ceil(data.rowCount / 5) + '</a><a href="###">下一页</a>';
                } else if (pageNo + 2 >= Math.ceil(data.rowCount / 5)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<s> ··· </s>';
                    for (var i = 3; i >= 0; i--) {
                        if (Math.ceil(data.rowCount / 5) - i == pageNo) {
                            a += '<a href="###" class="dangqianyema">' + (Math.ceil(data.rowCount / 5) - i) + '</a>'
                        } else {
                            a += '<a href="###">' + (Math.ceil(data.rowCount / 5) - i) + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo + 2 < Math.ceil(data.rowCount / 5)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<s> ··· </s>' +
                        '<a href="###">' + (parseInt(pageNo) - 1) + '</a>' +
                        '<a href="###" class="dangqianyema">' + pageNo + '</a>' +
                        '<a href="###">' + (parseInt(pageNo) + 1) + '</a>' +
                        '<s> ··· </s>' +
                        '<a href="###">' + Math.ceil(data.rowCount / 5) + '</a>' +
                        '<a href="###">下一页</a>';
                }
                $('.yema').html(a);
                /*-----------------收藏内容---------------------*/
                var item = '';
                for (var i = 0; i < data.data.length; i++) {
                    item += '<li class="" id="' + data.data[i].id + '"><a href="http://www.zhijunxing.com/yiju/article.html?id=' + data.data[i].id + '" class="left chatu2">' +
                        '<img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" style="width: 100%;height: 100%;">' + '</a>' +
                        '<div class="left"><p class="p4">' + data.data[i].tittle + '  ' + data.data[i].room + '<span>(' + data.data[i].type +
                        ')</span><i class="tu10"></i><i class="tu11"></i></p><br><br>' +
                        data.data[i].room + ' | ' + data.data[i].rentway + ' | ' + data.data[i].hlevel + ' | ' + data.data[i].floor + '/' +
                        data.data[i].countfloor + '层 <br><br><span><i class="tu12"></i>' + data.data[i].address + '</span><br><br><a class="tiaojian center zero">' +
                        data.data[i].hlevel + '</a><a class="tiaojian center">' + data.data[i].paymethod + '</a></div>' +
                        '<div class="right" id="del"><br><s class="">' + data.data[i].price + '<sub>/月</sub></s><br><span class="right">' + data.data[i].addtime + '</span></div>' +
                        '</li>';

                }
                $('.sx ul').html(item);

            } else {

                alert('');
            }
        }
    })
}


//$('.xiala').on({
//    //console.log('6666');
//    focus: function () {
//        $('.xuanze').css({
//            'display':'block'
//        })
//    }
//
//});
