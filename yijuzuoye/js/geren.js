/**
 * Created by Administrator on 2016/10/13 0013.
 */
var pageNo=1;
var pageNo1=1;
Collect(pageNo);
$('#bbb p').click(function () {
    for(var i=0;i<4;i++){
            $('.geren p').eq(i).removeClass('c');
        //console.log(i)
    }
    $(this).addClass('c');
    var index=$(this).index();
    //console.log(index);
    for(var c=0;c<4;c++){
        $('#aaa .xinxi').eq(c).addClass('yin');
        //console.log(c)
    }
    $('#aaa .xinxi').eq(index).removeClass('yin');
    if(index == 0){
        //var pageNo = 1;
        //console.log(index);
        Collect(pageNo);
    }
    if(index==1){
        wdfb(pageNo1);
    }

});
/*-----------------收藏页面选项-------------*/
$('.shoucang .title li').click(

    function(){
        for(var i=0;i<4;i++){
            $('.shoucang .title li').eq(i).removeClass('c3');
            //console.log(i)
        }
        $(this).addClass('c3')
    }
);
/*----------------------------编辑页面选项---------------------------*/
$('.bianji .title li').click(

    function(){
        for(var i=0;i<4;i++){
            //$('.bianji .title li').eq(i).removeClass('yin');
            $('.bianji .title li').eq(i).removeClass('c3');
            //console.log(i)
        }
        $(this).addClass('c3');
        var index=$(this).index();
        for(var c=0;c<4;c++){
            $('.hg').eq(c).addClass('yin');
            //console.log(c)
        }
        $('.hg').eq(index).removeClass('yin');
    }
);
/*----------------------------------修改密码------------------------------*/
var pass;
$('#xgmima input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    }
});

$('#xgmima input').eq(0).blur(function () {
    var val = $(this).val();
    console.log(val==pass);

    if (!(val == pass)) {
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('#xgmima input').eq(1).blur(function () {
    var val = $(this).val();
    if(!(/^[a-zA-Z0-9][\w]{5,19}/.test(val))){
        $(this).css({
            'border-color': '#981616'
        });
    }

});
$('#xgmima input').eq(2).blur(function () {
    var val = $(this).val();
    if(!(val == '' ? false : val === $('#xgmima input').eq(1).val())){
        $(this).css({
            'border-color': '#981616'
        });
    }

});
//$('#xgmima a').eq(0).click(function () {
//    var off=true;
////        for (var i=0; i<$('.name-t1 input').length;i++){
////
////        }
//    console.log($('#xgmima input').eq(0).css('border-top-color'));
//
//
//});

$('#xgmima input').eq(2).on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        if (/[\w]{6,20}$/.test(val)) {
            $('#xgmima a').eq(0).click(function () {
                $.ajax({
                    type: 'post',
                    url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
                    dataType: 'jsonp',
                    data: {
                        lpassword: val
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.resultCode == '0000') {
                            location.href = 'http://192.168.0.164/denglu.html';
                        }
                    }
                })
            })
        }
    }
});
/*-----------修改昵称----------*/
$('#xgnicheng input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        if (/[\w]{6,20}$/.test(val)) {
            $('#xgnicheng a').eq(0).click(function () {
                $.ajax({
                    type: 'post',
                    url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
                    dataType: 'jsonp',
                    data: {
                        lname: val
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.resultCode == '0000') {
                            login();
                        }
                    }
                })
            })
        }
    }
});
/*--------------------------上传-------------------------------*/
login();
function login(){
$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType: 'jsonp',
    success: function (data) {
        //console.log(data.success);
        //if (data.success) {
        //    $('.lj a').eq(0).html('欢迎  ' + data.data[0].lname).attr('href', 'http://192.168.0.164/gerenzhongxin.html');
        //    $('#nicheng').eq(0).html(data.data[0].lname).attr('href', 'http://192.168.0.164/gerenzhongxin.html');
        //    $('.lj a').eq(1).html('退出').attr({
        //        'onclick': 'quitLogin()',
        //        'href': '###'
        //    });
        //}
        if(data.success){
            pass = data.data[0].lpassword;
            var a='<a href="###">'+data.data[0].lname+'</a>&nbsp|&nbsp<a href="###" onclick="quitLogin()" >退出</a>';
            //console.log(data.data[0]);
            $('.lj').html(a);
            $('#nicheng').html(data.data[0].lname);
            if(data.data[0].lphoto){
                $('.touxiang1 img').attr('src','http://www.zhijunxing.com/yiju/upload/'+data.data[0].lphoto)
            }else{
                //alert('meiyou');
            }

            /*  $('.wrap-top-r a').eq(0).html('娆㈣繋  '+data.data[0].lname).attr('href','http://192.168.0.175/yiju/01/edit.html');
             $('.wrap-top-r a').eq(1).html('閫€鍑�').attr({
             'onclick':'quitLogin()',
             'href':'###'
             });*/
        }else{
            location.href = 'http://192.168.0.164/denglu.html';
        }
    }
});
}
/*--------------上传图片--------------------*/
$('#shangchuan input').change(function () {

    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持FileReader对象！");
    }
    var reader= new FileReader(),
        val=this.files[0];
    reader.readAsDataURL(val);
    reader.onload=function(){
        //var a='im';
        $('.touxiang2 img').attr('src',reader.result);
    }
});

/*-------------------保存头像-------------------------*/
$('#save1').click(function () {
    $.ajaxFileUpload({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
        secureuri: false,
        fileElementId:'uploadPhoto',
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
        //complete: function(data){
        //    console.log(data);
        //
        //
        //}
    });
    setTimeout(login,1000);
});






/*------------退出-----------------*/
function quitLogin(){

    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {
            //console.log(data);
            if(data.resultCode=='0000'){
                location.href = 'http://192.168.0.164/denglu.html###'
                    }


            // $('.wrap-top-r').html('<a href="">'+data.data[0].lname+'</a>|')



        }
    });

}
/*---------------------------------------我的收藏---------------------------------*/
//$('.rimg-t li').eq(0).click(function () {
//
//    var pageNo = 1;
//    $(this).addClass('bj').siblings().removeClass('bj');
//    $('.right').show();
//    $('.explain').hide();
//    Collect(pageNo);
/*-----------------插入收藏----------------------*/
//for (var i = 400; i < 600; i++) {
//    $.ajax({
//        type: 'post',
//        url: 'http://www.zhijunxing.com/yiju/addCollect.action',
//        dataType: 'jsonp',
//        data: {
//            hid: i
//        },
//        success: function (data) {
//            //console.log(data);
//        }
//    });
//}
/*---------------------------------点击页码----------------------------*/
    $('.y1').on('click', 'a', function () {
        // console.log($('.page-box a').last().prev().html());
       //var index=$(this).index();
       // console.log(index);
        if ($(this).html() == '上一页') {
            //console.log(pageNo);
            if (!(pageNo == 1)) {
                pageNo -= 1;
                Collect(pageNo);
            }
        } else if ($(this).html() == '下一页') {
            //console.log(pageNo);
            if (!(pageNo == $('.y1 a').last().prev().html())) {
                //console.log(pageNo);
                pageNo += 1;
                Collect(pageNo);
            }
        } else {
            //console.log(pageNo);
            pageNo = parseInt($(this).html());
            Collect(pageNo);
        }

    });
$('.y2').on('click', 'a', function () {
        // console.log($('.page-box a').last().prev().html());
       var index=$(this).index();
        console.log(index);
        if ($(this).html() == '上一页') {
            //console.log(pageNo);
            if (!(pageNo1 == 1)) {
                pageNo1 -= 1;
                wdfb(pageNo1);
            }
        } else if ($(this).html() == '下一页') {
            //console.log(pageNo);
            if (!(pageNo1 == $('.y2 a').last().prev().html())) {
                //console.log(pageNo);
                pageNo1 += 1;
                wdfb(pageNo1);
            }
        } else {
            //console.log(pageNo);
            pageNo1 = parseInt($(this).html());
            wdfb(pageNo1);
        }

    });


    //  pageNo=$('.page-box .page-checked').html();


    // Collect(pageNo);

//});

/*-------------------插入页码----------------------*/
function Collect(pageNo) {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryCollectHouses.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo
        },
        success: function (data) {
            console.log(data);
            /*------------------插入页码---------------------*/
            if (data.success) {
                var a;
                if (Math.ceil(data.rowCount / 2) <= 5) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= Math.ceil(data.rowCount / 2); i++) {
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
                    a += '<s> ··· </s><a href="###">' + Math.ceil(data.rowCount / 2) + '</a><a href="###">下一页</a>';
                } else if (pageNo + 2 >= Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<s> ··· </s>';
                    for (var i = 3; i >= 0; i--) {
                        if (Math.ceil(data.rowCount / 2) - i == pageNo) {
                            a += '<a href="###" class="dangqianyema">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        } else {
                            a += '<a href="###">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo + 2 < Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<s> ··· </s>' +
                        '<a href="###">' + (parseInt(pageNo) - 1) + '</a>' +
                        '<a href="###" class="dangqianyema">' + pageNo + '</a>' +
                        '<a href="###">' + (parseInt(pageNo) + 1) + '</a>' +
                        '<s> ··· </s>' +
                        '<a href="###">' + Math.ceil(data.rowCount / 2) + '</a>' +
                        '<a href="###">下一页</a>';
                }
                $('.y1').html(a);
                /*-----------------收藏内容---------------------*/
                var item = '';
                for (var i = 0; i < data.data.length; i++) {
                    item += '<li class="" id="' + data.data[i].id + '"><a href="http://192.168.0.164/xiangqing.html?id=' + data.data[i].id + '"  class="left chatu2">' +
                        '<img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" style="width: 100%;height: 100%;">' + '</a>' +
                        '<div class="left"><p class="p4">' + data.data[i].tittle + '  ' + data.data[i].room + '<span>(' + data.data[i].type +
                        ')</span><i class="tu10"></i><i class="tu11"></i></p><br><br>' +
                        data.data[i].room + ' | ' + data.data[i].rentway + ' | ' + data.data[i].hlevel + ' | ' + data.data[i].floor + '/' +
                        data.data[i].countfloor + '层 <br><br><span><i class="tu12"></i>' + data.data[i].address + '</span><br><br><a class="tiaojian center zero">' +
                        data.data[i].hlevel + '</a><a class="tiaojian center">' + data.data[i].paymethod + '</a></div>' +
                        '<div class="right" id="del"><b class="center right">删除 ×</b><br><s class="">' + data.data[i].price + '<sub>/月</sub></s><br><span class="right">' + data.data[i].addtime + '</span></div>' +
                        '</li>';

                }
                $('.shoucang-quanbu ul').html(item);

 /*------------------------取消收藏----------------------------*/
                $('#del b').click(function(){
//    var i=$(this).parent().attr(id);
                    var thisId=$(this).parent().parent().attr('id');
                    //$(this).parent().parent().remove().html();
    console.log(thisId);
                    $('.shanchu').removeClass('yin');
$('.shanchu a').click(function(){
     $('.shanchu').addClass('yin');
    var a = $(this).index();
    console.log(a);
    if(a==2){
        //console.log(thisId);
        //$('.shanchu').addClass('yin');
    $.ajax({

        type:'get',
        url: 'http://www.zhijunxing.com/yiju/delCollect.action',
        dataType:'jsonp',
        data: {
            hid: thisId
        },
        success: function (data) {
            console.log(data);
            Collect(pageNo)
        }
    });
    } })

});

            } else {

                alert('您没有收藏房源！');
            }
        }
    })
}
function wdfb() {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryHousesBylid.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo1
        },
        success: function (data) {
            //console.log(data);
            /*------------------插入页码---------------------*/
            if (data.success) {
                var a;
                if (Math.ceil(data.rowCount / 2) <= 5) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= Math.ceil(data.rowCount / 2); i++) {
                        if (i == pageNo1) {
                            a += '<a href="###" class="dangqianyema">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo1 <= 3) {
                    a = '<a href="###">上一页</a>';
                    for (var i = 1; i <= 4; i++) {
                        if (i == pageNo1) {
                            a += '<a href="###" class="dangqianyema">' + i + '</a>'
                        } else {
                            a += '<a href="###">' + i + '</a>'
                        }
                    }
                    a += '<s> ··· </s><a href="###">' + Math.ceil(data.rowCount / 2) + '</a><a href="###">下一页</a>';
                } else if (pageNo1 + 2 >= Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<s> ··· </s>';
                    for (var i = 3; i >= 0; i--) {
                        if (Math.ceil(data.rowCount / 2) - i == pageNo1) {
                            a += '<a href="###" class="dangqianyema">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        } else {
                            a += '<a href="###">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                        }
                    }
                    a += '<a href="###">下一页</a>';
                } else if (pageNo1 + 2 < Math.ceil(data.rowCount / 2)) {
                    a = '<a href="###">上一页</a>' +
                        '<a href="###">1</a>' +
                        '<s> ··· </s>' +
                        '<a href="###">' + (parseInt(pageNo1) - 1) + '</a>' +
                        '<a href="###" class="dangqianyema">' + pageNo1 + '</a>' +
                        '<a href="###">' + (parseInt(pageNo1) + 1) + '</a>' +
                        '<s> ··· </s>' +
                        '<a href="###">' + Math.ceil(data.rowCount / 2) + '</a>' +
                        '<a href="###">下一页</a>';
                }
                $('.y2').html(a);
                /*-----------------收藏内容---------------------*/
                var item = '';
                for (var i = 0; i < data.data.length; i++) {
                    item += '<li class="" id="' + data.data[i].id + '"><a  class="left chatu2">' +
                        '<img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" style="width: 100%;height: 100%;">' + '</a>' +
                        '<div class="left"><p class="p4">' + data.data[i].tittle + '  ' + data.data[i].room + '<span>(' + data.data[i].type +
                        ')</span><i class="tu10"></i><i class="tu11"></i></p><br><br>' +
                        data.data[i].room + ' | ' + data.data[i].rentway + ' | ' + data.data[i].hlevel + ' | ' + data.data[i].floor + '/' +
                        data.data[i].countfloor + '层 <br><br><span><i class="tu12"></i>' + data.data[i].address + '</span><br><br><a class="tiaojian center zero">' +
                        data.data[i].hlevel + '</a><a class="tiaojian center">' + data.data[i].paymethod + '</a></div>' +
                        '<div class="right" id="del"><b class="center right">删除 ×</b><br><s class="">' + data.data[i].price + '<sub>/月</sub></s><br><span class="right">' + data.data[i].addtime + '</span></div>' +
                        '</li>';

                }
                $('.fabu-quanbu ul').html(item);

                /*------------------------取消发布----------------------------*/
                $('#del b').click(function(){
//    var i=$(this).parent().attr(id);
                    var thisId=$(this).parent().parent().attr('id');
                    //$(this).parent().parent().remove().html();
                    console.log(thisId);
                    $('.shanchu').removeClass('yin');
                    $('.shanchu a').click(function(){
                        $('.shanchu').addClass('yin');
                        var a = $(this).index();
                        console.log(a);
                        if(a==2){
                            //console.log(thisId);
                            //$('.shanchu').addClass('yin');
                            $.ajax({

                                type:'get',
                                url: 'http://www.zhijunxing.com/yiju/delHousesByidByLand.action',
                                dataType:'jsonp',
                                data: {
                                    hid: thisId
                                },
                                success: function (data) {
                                    console.log(data);
                                }
                            });
                        } })

                });

            } else {

                alert('您没有收藏房源！');
            }
        }
    })
}