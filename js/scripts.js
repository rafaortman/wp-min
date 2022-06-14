(function ($) {
    
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    function string_to_slug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâãèéëêìíïîòóöôõùúüûñç·/_,:;";
        var to = "aaaaaeeeeiiiiooooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
    
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
    
    $('.menu-item-has-children>a').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('ativo');
        $(this).parent().siblings().find('.sub-menu').removeClass('ativo');
        $(this).parent().siblings().find('a').removeClass('ativo');
        $(this).next().toggleClass('ativo');
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

    $('.modal-fechar').on('click', function(){
        $('body').removeClass('modal-ativo');
        $(this).closest('.modal').removeClass('ativo');
    });
    
    $("iframe[src*='youtube']").unwrap().wrap('<div class="video-wrapper">');
    
})(jQuery);
