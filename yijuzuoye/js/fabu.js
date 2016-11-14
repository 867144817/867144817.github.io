/**
 * Created by Administrator on 2016/10/19 0019.
 */
$('.four').toggle(
  function(){
      $(this).addClass('xuanzhong');
      var i='#'+$(this).attr('name');
      //console.log(i);
      $(i).click();
  },
function(){
      $(this).removeClass('xuanzhong');
    var i='#'+$(this).attr('name');
    $(i).click()
  }

);

/*-----------------传图----------------------*/




var fileIds=[],num=1;
$('.charuchuantu').on('change', 'input[type=file]',
    function () {

    var reader= new FileReader(),

        val=$(this).get(0).files[0];
    reader.readAsDataURL(val);
        //console.log(typeof reader);
    reader.onload=function(){
        fileIds.push('file' + num);
        $('#'+fileIds[num-1]).hide();
        num +=1;
        var Oimg='<img src="'+reader.result+'" alt="">';
        $('.chuantu').append(Oimg);
        $('.charuchuantu').append('<input type="file" id="file' + num +'" name="file" class="yincang poa">');

    };

});


//$('#fabu').click(function(){
//    //var Osrc=$('.chuantu img').attr('src');
//    //function Osrc1(){
//    //    $('.chuanru').attr('value',Osrc)
//    //}
//    ////Osrc();
//    //Osrc1();
//    //console.log(Osrc);
//    //console.log($('.yincang').attr('value'));
//    //console.log($('.chuantu img').attr('src'));
//    /*-----------------房东类型  租赁方法-----------*/
//    $('.dx input').click(function(){
//            var index=$(this).index();
//            console.log(index);
//
//            $('.fdxx').removeClass('fdxx');
//            $('.zlff').eq(i).removeClass('fdxx');
//
//            if(index<3){
//                $(this).addClass('zlff')
//            }else  $(this).addClass('fdxx')
//        }
//    );
//    var otype=$('.fdxx').html();
//    var orentway=$('.zlff').html();
//    /*--------------------价格--------------------*/
//    var oprice=$('#price').val();
//    /*------------------地址----------*/
//    var oaddress=$('#address').val();
//    /*---------------------小区名字-------------*/
//    var ovillageName=$('#villageName').val();
//    /*------------------面积-----------------*/
//    var oArea=$('#Area').val();
//    /*----------------特色---------------*/
//    var ofeatures=$('#features').val();
//    /*------------------房间配置--------------*/
//    var furniture=$('#features').val(),
//        oname=$('.xiuanzhong').html();
//console.log(oname);
//
//
//    /*-----------------支付方法---------------*/
//    var opaymethod=$('#paymethod').val();
//    /*-----------------房子所处楼层------------*/
//    var ofloor=$('#floor').val();
//    //console.log(ofloor);
//    /*------------房子总共楼层高度-------------*/
//    var ocountfloor=$('#countfloor').val();
//    /*-----------------联系人------------*/
//    var olinkman=$('#linkman').val();
//    /*--------------房屋朝向---------------*/
//    var odirection=$('#direction').val();
//    /*----------------装修类型-----------*/
//    var olevel=$('#level').val();
//    //console.log(olevel);
//    /*---------------标题---------------*/
//    var otittle=$('#tittle').val();
//    //console.log(otittle);
//    /*-------------------联系电话-------------*/
//    var olinkphone=$('#linkphone').val();
//    /*--------室厅卫---------------*/
//    var oshi=$('#shi').val();
//    //console.log(oshi);
//    var oting=$('#ting').val();
//    var owei=$('#wei').val();
//    console.log(fileIds);
//    $.ajaxFileUpload({
//        type: 'post',
//        url: 'http://www.zhijunxing.com/yiju/addHouses.action',
//        //dataType: 'json',
//        secureuri: false,
//        fileElementId:'fileIds',
//        data:
//
//         {
//        shi:oshi,
//            ting:oting,
//            wei:owei,
//            type:otype,
//            price:oprice,
//            villageName:ovillageName,
//            area:oArea,
//            room:oshi+'室'+oting+'厅'+owei+'卫',
//            features:ofeatures,
//            furniture:oname,
//            paymethod:opaymethod,
//            floor:ofloor,
//            countfloor:ocountfloor,
//            rentway:orentway,
//            linkman:olinkman,
//            direction:odirection,
//            hlevel:olevel,
//            tittle:otittle,
//            linkphone:olinkphone,
//            condition:ovillageName+oshi+'室'+oting+'厅'+owei+'卫',
//             address:oaddress
//             //photo:
//    },
//        async: true,
//        cache: true,
//        dataType: 'json',
//        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
//        success: function (data) {
//            console.log(data);
//        }
//    })
//});
$('#fabu').click(function () {
$('.dx input').click(function(){
        var index=$(this).index();
        console.log(index);

        $('.fdxx').removeClass('fdxx');
        $('.zlff').eq(i).removeClass('fdxx');

        if(index<3){
            $(this).addClass('zlff')
        }else  $(this).addClass('fdxx')
    }
);
var otype=$('.fdxx').html();
var orentway=$('.zlff').html();
/*--------------------价格--------------------*/
var oprice=$('#price').val();
/*------------------地址----------*/
var oaddress=$('#address').val();
/*---------------------小区名字-------------*/
var ovillageName=$('#villageName').val();
/*------------------面积-----------------*/
var oArea=$('#Area').val();
/*----------------特色---------------*/
var ofeatures=$('#features').val();
/*------------------房间配置--------------*/
var furniture=$('#features').val(),
    oname=$('.xiuanzhong').html();
console.log(oname);


/*-----------------支付方法---------------*/
var opaymethod=$('#paymethod').val();
/*-----------------房子所处楼层------------*/
var ofloor=$('#floor').val();
//console.log(ofloor);
/*------------房子总共楼层高度-------------*/
var ocountfloor=$('#countfloor').val();
/*-----------------联系人------------*/
var olinkman=$('#linkman').val();
/*--------------房屋朝向---------------*/
var odirection=$('#direction').val();
/*----------------装修类型-----------*/
var olevel=$('#level').val();
//console.log(olevel);
/*---------------标题---------------*/
var otittle=$('#tittle').val();
//console.log(otittle);
/*-------------------联系电话-------------*/
var olinkphone=$('#linkphone').val();
/*--------室厅卫---------------*/
var oshi=$('#shi').val();
//console.log(oshi);
var oting=$('#ting').val();
var owei=$('#wei').val();
    $.ajaxFileUpload({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/addHouses.action',
        secureuri: false,
        fileElementId: fileIds,
        data:
        //$('form').serialize(),
        {
            shi:oshi,
            ting:oting,
            wei:owei,
            type:otype,
            price:oprice,
            villageName:ovillageName,
            area:oArea,
            room:oshi+'室'+oting+'厅'+owei+'卫',
            features:ofeatures,
            furniture:oname,
            paymethod:opaymethod,
            floor:ofloor,
            countfloor:ocountfloor,
            rentway:orentway,
            linkman:olinkman,
            direction:odirection,
            hlevel:olevel,
            tittle:otittle,
            linkphone:olinkphone,
            condition:ovillageName+oshi+'室'+oting+'厅'+owei+'卫',
            address:oaddress
        },
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        success: function (data) {
            console.log(data);
        }
    })
});




