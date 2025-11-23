/*  ---------------------------------------------------
    Bhavesh Production
    Custom JavaScript for portfolio website
---------------------------------------------------------  */
'use strict';
(function ($) {
    // Preloader
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");
    // });
    
    // Background images
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    
    // Mobile navigation
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    // Hero slider
    if ($('.hero__slider').length && $.fn.owlCarousel) {
        $('.hero__slider').owlCarousel({
            loop: true,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            margin: 0,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
        var dot = $('.hero__slider .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            $(this).html(index < 10 ? '0' + index : index);
        });
    }
    
    // Counter animation
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({ Counter: $(this).text() }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) { $(this).text(Math.ceil(now)); }
        });
    });
})(jQuery);
