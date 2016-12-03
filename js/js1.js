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

                item += '<li class="kuang"><a href="https://867144817.github.io/xiangqing.html?id=' + data.data[i].id + '" class="chatu2">' +
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

