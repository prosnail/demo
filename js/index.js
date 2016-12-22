var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 3000,
    speed: 1000,
    autoplayDisableOnInteraction: false
});
var mySwiper2 = new Swiper('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 3000,
    speed: 1000,
    autoplayDisableOnInteraction: false
});

function shopKill() {
    var skimg = document.getElementsByClassName('skimg')[0];
    var oImg = skimg.getElementsByTagName('img');

    var num = 0;
    oImg[num].style.display = 'block';
    var timer = setInterval(function () {
        for (var i = 0; i < oImg.length; i++) {
//            oImg[i].style.opacity=0;
            oImg[i].style.display = 'none';
        }
        oImg[num].style.display = 'block';
        num++;
        if (num >= 3) {
            num = 0;
        }
    }, 3000)
}
shopKill();
function loadCont() {
    $.ajax({
        url: 'data/index.json',

        success: function (r) {
            for (var i = 0; i < r.length; i++) {

                var str = '';
                str += '<li class="shopli">' +
                    '<div class="br">' +
                    '<img class="bl" src="' + r[i].shopicon + '">' +
                    '<div class="bm">' +
                    '<h2>' + r[i].shopname + '</h2>' +
                    '<div>' +
                    '<p class="bn">' +
                    '<i></i> <i></i> <i></i> <i></i> <i></i>' +
                    '</p>' +
                    '</div>' +
                    '<p class="cb">' + r[i].shopnum + '件商品 | 月售' + r[i].sell + '单</p>' +
                    '</div>' +
                    '<div class="bs">' +
                    '<span class="d4"></span>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
                $('ul.shoplist')[0].innerHTML += str;
            }

        }
    });
}
loadCont();
function scrollAdd() {
    $(window).scroll(function () {
        if ($(document).height() - $(this).scrollTop() - $(this).height() < 100) {
            loadCont();
        }
    })
}
scrollAdd();