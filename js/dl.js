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


    var isform = true;
    if (isform) {

        $('form input').blur();


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
       if (isform) {

        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                alert(data.resultCode);
                if (data.resultCode == '0000') {
                    location.href = 'shouye.html'
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
