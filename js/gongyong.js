/**
 * Created by Administrator on 2016/10/13 0013.
 */
$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType: 'jsonp',
    success: function (data) {
        //console.log(data.success);
        if (data.success) {
            $('.lj a').eq(0).html('欢迎  ' + data.data[0].lname).attr('href', 'http://192.168.0.164/gerenzhongxin.html');
            $('#nicheng').eq(0).html(data.data[0].lname).attr('href', 'http://192.168.0.164/gerenzhongxin.html');
            $('.lj a').eq(1).html('退出').attr({
                'onclick': 'quitLogin()',
                'href': '###'
            });
        }
    }
});

function quitLogin(){

    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if(data.resultCode=='0000'){

                $('.lj a').eq(0).html('登录').attr('href','http://192.168.0.164/denglu.html');
                $('.lj a').eq(1).html('注册').attr('href','http://192.168.0.164/zhuce.html').removeAttr('onclick');
            }


            // $('.wrap-top-r').html('<a href="">'+data.data[0].lname+'</a>|')



        }
    });

}