$.ajax({
    url: '../data/bannerView.json',
    success: function (r) {

        var str = '';
        for (var i = 0; i < r.shoplistimg.length; i++) {
            str += '<li>' +
                '<a>' +
                '<img src="' + r.shoplistimg[i] + '">' +
                '<span class="desc">' +
                '<span class="title">' + r.shoplisttitle[i] + '</span>' +
                '<i class="money">￥' + r.shoplistmoney[i] + '</i>' +
                '<span class="buy">立即购买</span>' +
                '</span>' +
                '</a>' +
                '</li>';

        }
        for (var j = 0; j < $('ul.shop').length; j++) {
            $('ul.shop')[j].innerHTML += str;
        }
    }
});
//    function backTop(){
//        $(window).scroll(function () {
//
//        })
//    }
    $('#myNav').click(function () {
        if($('div.navlist')[0].style.display=='block'){
            $('div.navlist')[0].style.display='none';
        }else{
            $('div.navlist')[0].style.display='block'
        }
    });
    $('div').not('#myNav').click(function () {
        $('div.navlist')[0].style.display='none';
    });
