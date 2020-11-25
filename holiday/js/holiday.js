$(document).ready(function () {
    $('.dp2').hide();

    $('.gnb>li').mouseover(function () {

        $(this).children('.dp2').stop().slideDown();
    });

    $('.gnb>li').mouseout(function () {

        $(this).children('.dp2').stop().slideUp();
    });




    $('.sub_dp2').hide();

    $('.sub_gnb>li').mouseover(function () {

        $(this).children('.sub_dp2').stop().slideDown();
    });

    $('.sub_gnb>li').mouseout(function () {

        $(this).children('.sub_dp2').stop().slideUp();
    });



    $('.detail').hide();

    $('.mn>li').mouseover(function () {
        $(this).children('.detail').stop().fadeIn();
    });

    $('.mn>li').mouseout(function () {
        $(this).children('.detail').stop().fadeOut()
    });

    $('.box').bxSlider({
        pager: false,
        mode: 'fade'
    });

});
