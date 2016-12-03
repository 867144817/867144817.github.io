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
$('.chenggong-s1').click(
    function(){
        $('.chenggong').hide()
    }
);

/*------------------------------------------------------------------------------------*/



var off = {};

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
});


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
}).focus();
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


    var isform = true;
    if (isform) {
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
        if ($('#yincang').attr('class') == '') {
            isform = false;
            alert('请选择');
        }
    }
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
    console.log(isform);
    if (isform) {
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {

                if (data.resultCode == '0000') {
                    //location.href = 'http://192.168.0.175/yiju/01/login.html'
                    //location.href = 'http://http://192.168.0.164/denglu.html'
                    $('.chenggong').css(
                        {
                            'display':'block'
                        }
                    );
                    $('.chenggong-p2').click(
                        function(){

                            $.ajax({
                                type: 'post',
                                url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
                                dataType: 'jsonp',
                                data: {
                                    lname:$('form input[name=lname]').val(),
                                    lpassword:$('form input[name=lpassword]').val()
                        },
                            success: function (data) {
                                //alert(data.resultCode);
                                if (data.resultCode == '0000') {

                                    location.href = 'https://867144817.github.io/denglu.html###'
                                }
                            }
                        })
                        }
                    );
                }
            }
        })
    }


});