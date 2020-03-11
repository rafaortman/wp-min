(function ($) {

    $(window).on('scroll', function () {
        $('#menuBt').removeClass('ativo');
        $('#siteMenu').removeClass('ativo');
        $('#searchForm').removeClass('ativo');
        if ($(window).scrollTop() > 100) {
            $('#goTop').css('bottom', '1rem');
        } else {
            $('#goTop').css('bottom', '-100px');
        }
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
        $('#siteMenu').toggleClass('ativo');
        $('#searchForm').removeClass('ativo');
    });
    
    $('#buscaBt').on('click', function () {
        $('#searchForm').toggleClass('ativo');
        $('#siteMenu').removeClass('ativo');
    });

    toggleSlide = function () {
        console.log('tempo');
        var ativo = $(".banner.ativo");
        var ativoControle = $('.banners-bts button.ativo');
        var proximo = ativo.next();
        var proximoControle = ativoControle.next();
        if (proximo.length === 0) {
            proximo = $('.banner:first');
            proximoControle = $('.banners-bts button:first');
        }
        ativo.removeClass('ativo');
        proximo.addClass('ativo');
        ativoControle.removeClass('ativo');
        proximoControle.addClass('ativo');
    }

    var tempoSlide = setInterval(toggleSlide, 8000);

    $('.banners-bts button').on('click', function () {
        var posicao = $(this).index() + 1;
        var bannerAlvo = $('[data-slide="' + posicao + '"]');
        clearInterval(tempoSlide);
        if (!bannerAlvo.hasClass('ativo')) {
            $('.banners-bts button').removeClass('ativo');
            $(this).addClass('ativo');
            $('.banner.ativo').removeClass('ativo');
            bannerAlvo.addClass('ativo');
        }
    });
    
})(jQuery);