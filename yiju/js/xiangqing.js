/**
 * Created by Administrator on 2016/10/24 0024.
 */

var href=window.location.href;
var str = (href.substr(href.indexOf("?")+1)).split("&");
//console.log(str);
var params = [];

for(var i=0; i<str.length; i++){

    params.push(str[i].split("="))
}
var aaa;
for(var i=0; i<params.length; i++){
    if(params[i][0] == 'id'){
     aaa = params[i][1];
        //console.log(aaa);
    }
}

//console.log(aaa);
$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesByid.action',
    dataType: 'jsonp',
data:{
    id:aaa
},
    success: function (data) {
        console.log(data.data[0].photo.split(',').length);
        console.log(data.data);
        if (data.success) {
            //var item;
            //for (var i=0 ;i<data.data.photo.length;i++) {

               var item = '<img src="http://www.zhijunxing.com/yiju/upload/'
                   + data.data[0].photo.split(',')[0] + '"/>';
            //}
            $('.xq').html(item);
            var item1='';
            for(var i=1;i<data.data[0].photo.split(',').length;i++){

                item1 += '<li class="left"><img src="http://www.zhijunxing.com/yiju/upload/' +
                data.data[0].photo.split(',')[i] + '"/></li>'

            }
            $('.hidden-ul').html(item1);
        }
    }
});
var map = new BMap.Map("abc");    // 鍒涘缓Map瀹炰緥

map.centerAndZoom("郑州", 11);  // 鍒濆鍖栧湴鍥�,璁剧疆涓績鐐瑰潗鏍囧拰鍦板浘绾у埆
map.addControl(new BMap.MapTypeControl());   //娣诲姞鍦板浘绫诲瀷鎺т欢
map.setCurrentCity("郑州");          // 璁剧疆鍦板浘鏄剧ず鐨勫煄甯� 姝ら」鏄繀椤昏缃殑
map.enableScrollWheelZoom(true);     //寮€鍚紶鏍囨粴杞缉鏀�

//娣诲姞缂╃暐鍥�
var overView = new BMap.OverviewMapControl();
var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
map.addControl(overView);
map.addControl(overViewOpen);

//娣诲姞姣斾緥灏�
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 宸︿笂瑙掞紝娣诲姞姣斾緥灏�
var top_left_navigation = new BMap.NavigationControl();  //宸︿笂瑙掞紝娣诲姞榛樿缂╂斁骞崇Щ鎺т欢
map.addControl(top_left_control);
map.addControl(top_left_navigation);
