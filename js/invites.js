
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

    // 도트작동이상
    $('.main_visual .dots li').on('click', function (e) {
        e.preventDefault
        const idx = $(this).index(); //0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })



    // 스크롤 업
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    //   스크롤없애는거
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // 첫번째방법 sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })


    AOS.init();

})