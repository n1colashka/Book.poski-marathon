$(function () {

    $('.menu__btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu__btn--active');
        $('.menu').toggleClass('menu--active');
    });

    var catalogSwiper = new Swiper('.catalog__slider', {
        slidesPerView: 'auto',
        spaceBetween: 53,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var newSwiper = new Swiper('.new__slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});