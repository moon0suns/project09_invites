
$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })


    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .dots li').eq(0).addClass('on');
        $('.main_visual .dots li').eq(c).addClass('on')
            .siblings().removeClass('on');
    })


    $('.main_slide').slick({
        autoplay: true,
        autopalySpeed: 5000,
        speed: 200,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .dots li').on('click', function (e) {
        e.preventDefault
        const idx = $(this).index(); //0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })



    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })


    AOS.init();


    $('.header .gnb>ul>li').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).find('.sub').stop().slideToggle();
        }

    });

    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });


    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    })
})
