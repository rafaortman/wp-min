(function ($) {
    
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    $(window).on('resize scroll', function () {
        $('.section').each(function () {
            var sectionAtiva = $(this).attr('id');
            var menuAtivo = '#siteTopo .menu a[href*="#' + sectionAtiva + '"]';
            if ($(this).isInViewport()) {
                $('#' + sectionAtiva).addClass('ativo');
                $(menuAtivo).addClass('ativo').parent().siblings().find('a').removeClass('ativo');
            } else {
                $('#' + sectionAtiva).removeClass('ativo');
            }
            if($(window).scrollTop() < $('.section').first().offset().top - 100) {
                $('.section').removeClass('ativo');
                $('#siteTopo .menu a').removeClass('ativo');
            }
        });
    });

    $('a[href*="#"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 750, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    $('#menuBt').on('click', function () {
        $(this).toggleClass('ativo');
        $('.menu').toggleClass('ativo');
        $('#searchForm').removeClass('ativo');
    });
    
    $('.carrossel').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true
    });

    $('.modal-trigger').on('click', function(){
        $('body').addClass('modal-ativo');
        $(this).find('.modal').addClass('ativo');
    });

    $('.modal').on('click', function(e){
        e.stopPropagation();
        $('body').removeClass('modal-ativo');
        $(this).removeClass('ativo');
        console.log('fechar');
    });

    $('.fechar').on('click', function(){
        $('body').removeClass('modal-ativo');
        $(this).closest('.modal').removeClass('ativo');
    });
    
})(jQuery);
