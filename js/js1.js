/**
 * Created by Administrator on 2016/9/24 0024.
 */
var wsfd=document.getElementById('wsfd'),
    wsfdson=document.getElementById('wsfdson'),
    wyzf=document.getElementById('wyzf'),
    wyzfson=document.getElementById('wyzfson');

wsfd.onclick=function(){
    wsfdson.style.display = 'block';
    wyzfson.style.display = 'none';
};
wyzf.onclick=function(){
    wsfdson.style.display = 'none';
    wyzfson.style.display = 'block';
};
$('.img-show-wrap').carousel({
    element: $('#banner'),
    time: 2000,
    left: $('.zuo'),
    right: $('.you'),
    oli: 4
}, false, false);

$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data.data[1].photo);
        if (data.success) {
            console.log(data.data);
            var item = '';
            for (var i=0 ;i<data.data.length;i++) {

                item += '<li class="kuang"><a href="http://192.168.0.164/xiangqing.html?id=' + data.data[i].id + '" class="chatu2">' +
                    '<img src="http://www.zhijunxing.com/yiju/upload/' +
                    data.data[i].photo.split(',')[0] + '"/><p>' + data.data[i].villageName + '</p><br><div>' + data.data[i].room + '<span class="c1">' + data.data[i].price + '</span> 元/月</div></li>'
            }

            $('.kuan').append(item);

            $('.img-show-wrap').carousel({
                element: $('#banner'),
                time: 2000,
                left: $('.zuo'),
                right: $('.you'),
                oli: 4
            }, false, false);

        }else {
            alert('发生未知错误')
        }

    }
});

$('#city').toggle(
    function(){
        $('#city-son').removeClass('yin')
    },
    function(){
        $('#city-son').addClass('yin')
    }

);
$('#city-son p').click(function () {
    $('#change').html($(this).html());
    $('#city').click();
});

//$.ajax({
//    type: 'post',
//    url: 'http://www.zhijunxing.com/yiju/loginSession.action',
//    dataType: 'jsonp',
//    success: function (data) {
//        console.log(data.success);
//        if (data.success) {
//            $('.lj a').eq(0).html('欢迎  ' + data.data[0].lname).attr('href', 'http://192.168.0.164/gerenzhongxin.html');
//            $('.lj a').eq(1).html('退出').attr({
//                'onclick': 'quitLogin()',
//                'href': '###'
//            });
//        }
//    }
//});
//
//        function quitLogin(){
//
//            $.ajax({
//                type: 'post',
//                url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
//                dataType: 'jsonp',
//                success: function (data) {
//                    console.log(data);
//                    if(data.resultCode=='0000'){
//
//                        $('.lj a').eq(0).html('登录').attr('href','http://192.168.0.164/denglu.html');
//                        $('.lj a').eq(1).html('注册').attr('href','http://192.168.0.164/zhuce.html').removeAttr('onclick');
//                    }
//
//
//                    // $('.wrap-top-r').html('<a href="">'+data.data[0].lname+'</a>|')
//
//
//
//                }
//            });
//
//        };