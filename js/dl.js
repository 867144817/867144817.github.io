/**
 * Created by Administrator on 2016/10/12 0012.
 */
$('#sj').toggle(
    function(){
        $('#yincang').addClass('s5')
    },
    function(){
        $('#yincang').removeClass('s5')
    }
);


/*------------------------------------------------------------------------------------*/


var off = {};  //鍒涘缓涓€涓┖瀵硅薄锛岀敤鏉ュ瓨鍌ㄦ瘡涓渶瑕佹彁浜ゆ椂楠岃瘉鏄惁閫氳繃锛�
               //褰撴瘡涓猧nput澶卞幓鐒︾偣鐨勬椂鍊欒幏鍙栬繖涓猧nput鐨勭被锛�
               // 褰撶劧杩欎釜绫诲彲浠ユ槸鍏朵粬鐨勬爣璇嗭紝浠栧彧璧峰埌鐨勪綔鐢ㄦ槸鐢ㄦ潵鐢勫埆杩欎釜杈撳叆妗嗘纭殑瀹屾垚浜嗚緭鍏ワ紝
               // 鐒跺悗鎶婅繖涓悕瀛楀綋瀵硅薄鐨勫睘鎬у瓨鍌ㄥ埌off閲岄潰锛屽€间负true鎴杅alse

$('form input[name=lname]').on({

    focus: function () {
        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        isinput(/[\w]{6,20}/.test(val), this);
    }
}).focus();


$('form input[name=lpassword]').on({
    focus: function () {
        // console.log($(this).tagName);


        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);

    }
});
$('form .input-3').on({
    focus: function () {
        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(val==''?false:val === $('form input[name=lpassword]').val(), this);
    }
});


$('form input[name=lemail]').on({
    focus: function () {
        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val), this);
    }
});

$('form input[name=lphone]').on({
    focus: function () {

        $(this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^1[0-9]{10}$/.test(val), this);

    }
});

function isinput(put, _this) {
    if (put) {
        $(_this).parent().css({
            'border-color': 'rgb(112, 173, 70)'
        });
        // console.log(_this.className);
        off[_this.className] = true
    } else {

        $(_this).parent().css({
            'border-color': '#981616'
        });
        off[_this.className] = false;
        //console.log($(_this).name());
    }

}


$('form .i2').click(function () {

    /*------------------------------------绗竴绉�-------------------------------------------*/
    //澶氶」閫夋嫨锛屼竴娆″叏閮ㄥ垽鏂紝
    var isform = true;
    if (isform) {

        $('form input').blur();

        /*
         if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
         $('form input[name=lname]').blur();
         }
         if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
         $('form input[name=lpassword]').blur();
         }
         if (!($('form .input-3').val() === $('form input[name=lpassword]').val()) || $('form .input-3').val()=='' ) {
         $('form .input-3').blur();
         }
         if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
         $('form input[name=lemail]').blur();
         }
         if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
         $('form input[name=lphone]').blur();
         }
         */
        if ($('#yincang').attr('class') == '') {
            isform = false;
            alert('666');
        }
    }
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
    console.log(isform);
    /*------------------------------------绗竴绉嶇粨鏉�-------------------------------------------*/
    if (isform) {

        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                alert(data.resultCode);
                if (data.resultCode == '0000') {
                    location.href = 'http://192.168.0.164/shouye.html###'
                }
            }
        })
    }


});
$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data.success);
        if (data.success) {
            $('form input[name=lname]').val(data.data[0].lname);
            $('form input[name=lpassword]').val(data.data[0].lpassword)
        }
    }
});
