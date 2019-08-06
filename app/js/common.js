$(function () {

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 160) {
    //         $('.header_center').hide();
    //     } else {
    //         $('.header_center').show();
    //     }
    // });

    // btn click top
    $("body").on("click", "#btn-top", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });


    $(window).resize(function () {
        $('.header_bottom .drop-menu1').slideUp();
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".header_bottom .drop-menu1"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 && div.siblings('.menu-title, .catalog_menu').has(e.target).length === 0) { // и не по его дочерним элементам
            div.slideUp(); // скрываем его
        }
    });

    // активная ссылка меню
    $('.cabinet_menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });
    // end

    $('.catalog_menu .menu-title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });

    // hidden list > 5
    $('.list-characteristics').each(function () {
        if ($(this).find('li').length > 5) {
            $(this).find('li').slice(5).hide();
        }
    });

    $('.product-info-box .btn-all').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('.info-box > .list-characteristics');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.find('span').text('Скрыть');

            content.find('li').slideDown();
        } else {
            $this.removeClass('trigger');
            $this.find('span').text('Показать больше');

            content.each(function () {
                $(this).find('li').slice(5).slideUp();
            })
        }
    });

    // hidden list > 5
    $('.basket-table').each(function () {
        if ($(this).find('.basket-table__line').length > 5) {
            $(this).find('.basket-table__line').slice(5).hide();
        }
    });

    $('.basket-table .btn-all').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('.basket-table__line');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.html('Скрыть');

            content.slideDown();
        } else {
            $this.removeClass('trigger');
            $this.html('Открыть все');

            content.slice(5).slideUp();
        }
    });

    // hidden list > 3
    $('.product_menu').each(function () {
        if ($(this).find('li').length > 3) {
            $(this).find('li').slice(3).hide();
        }
    });

    $('.product_item .btn-all').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('ul.product_menu li');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.find('span.text').text('Скрыть');

            content.slideDown();
            content.parents('.product_item').addClass('in');
        } else {
            $this.removeClass('trigger');
            $this.find('span.text').text('Показать все');

            content.slice(3).slideUp();
            content.parents('.product_item').removeClass('in');
        }
    });

    // hidden list > 3
    $('.offers-products').each(function () {
        if ($(this).find('.table-body li').length > 3) {
            $(this).find('.table-body li').slice(3).hide();
        }
    });

    $('.offers-products .btn-all').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('ul.table-body li');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.find('span').text('Скрыть');

            content.slideDown();
        } else {
            $this.removeClass('trigger');
            $this.find('span').text('Смотреть все предложения');

            content.slice(3).slideUp();
        }
    });

    // hidden list > 3
    $('.characteristics').each(function () {
        if ($(this).find('.list-characteristics li').length > 4) {
            $(this).find('.list-characteristics li').slice(4).hide();
        }
    });

    $('.characteristics .btn-all').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('ul.list-characteristics li');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            $this.find('span').text('Скрыть');

            content.slideDown();
        } else {
            $this.removeClass('trigger');
            $this.find('span').text('Смотреть все');

            content.slice(4).slideUp();
        }
    });

    // load more
    $(function () {
        $('.table-catalog').each(function () {
            if ($(this).find('.table-body').length > 10) {
                $(this).find('.table-body').slice(10).hide();
            }

        });

        // show list all
        $('.load-more').on('click', function (e) {
            e.preventDefault();
            $('.table-body:hidden').slice(0, 10).slideDown();

            var onBlock = $('.table-body:hidden').length;
            if (onBlock <= 0) {
                $('.load-more').hide();
            }
        });

    });

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 12500,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));

    $('.product-analogies ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.product-analogies').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.catalog ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.catalog').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.cabinet-details ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.cabinet-details__tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // mobile phone
    $('.btn-phone-mobile').click(function () {
        $('.block_phone-mobile').fadeToggle();
    });

    $('.block_phone-mobile .btn-close').click(function () {
        $('.block_phone-mobile').fadeOut();
    });


    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".block_phone-mobile"); // тут указываем ID элемента
        var btn = $('.btn-phone-mobile');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
        }
    });
    // mobile phone end


    // click line orders
    $('.list-orders .list-orders__top-line').click(function () {
        $(this).parent().toggleClass('in');
    });

    // amount
    $('.minus').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.filter-product .box-hidden .links').click(function (e) {
        e.preventDefault();
        $(this).siblings('label:nth-child(5) ~ label').fadeToggle().css('display', 'flex');
    });

    // registration form active
    $('.btn_stages-1').click(function (e) {
        e.preventDefault();
        $('.box-number-stages-one').addClass('active');
        $('.stages').fadeOut();
        $('.two_stages.stages').fadeIn().css('display', 'flex');
    });

    $('.btn_stages-2').click(function (e) {
        e.preventDefault();
        $('.box-number-stages-two').addClass('active');
        $('.stages').fadeOut();
        $('.three_stages.stages').fadeIn().css('display', 'flex');
    });

    $("input[name='phone']").mask("8(999) 999-99-99");


    $('.add-line').click(function () {
        $('.details-box .add-line').before('<div class="line">\n' +
            '                                <div class="input-group">\n' +
            '                                    <label><input type="text" name="name-part"></label>\n' +
            '                                </div>\n' +
            '\n' +
            '                                <div class="b_quantity">\n' +
            '                                    <a href="#" class="minus"></a>\n' +
            '                                    <label><input type="text" name="inp-quantity" value="1"></label>\n' +
            '                                    <a href="#" class="plus"></a>\n' +
            '                                </div>\n' +
            '\n' +
            '                                <button class="btn-close" type="button">\n' +
            '                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                                        <path d="M7.38035 8L8 7.38157L4.61894 4.00014L8 0.619002L7.38064 -2.51899e-08L4 3.38114L0.619363 -3.00175e-07L4.47757e-07 0.619002L3.38137 4.00014L1.30055e-07 7.38157L0.619647 8L4 4.61929L7.38035 8Z" fill="#FFA734"/>\n' +
            '                                    </svg>\n' +
            '                                </button>\n' +
            '                            </div>');
    });

    $('.details-box .line .btn-close').click(function () {
        $(this).closest('.details-box .line').remove();
    });

    // auto select btn
    $('.item .btn-select').click(function () {
        $(this).next().fadeToggle();
        $('.item .btn-select').not(this).removeClass('in').next().slideUp();
    });


    $('#menu .drop-menu1 .links-drop').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('in').find('.drop-menu2').fadeToggle();
    });

    // $('.catalog_menu .drop-menu1 .links-drop').hover(function () {
    //     var heightWindow = $(window).height();
    //
    //     var eTop = $('.catalog_menu .drop-menu1 .links-drop').offset().top;
    //
    //     var eSubmenu = $('.catalog_menu .drop-menu1 .links-drop .drop-menu2').offset().top;
    //
    //     var heightSubmenu = $('.catalog_menu .drop-menu1 .links-drop .drop-menu2').height();
    //
    //     var summHeight = heightSubmenu + eSubmenu;
    //
    //     if(heightWindow > (eTop + heightSubmenu)){
    //         $(this).find('.drop-menu2').fadeToggle().css({
    //             top: '0'
    //         });
    //     }
    //     else {
    //         $(this).find('.drop-menu2').fadeToggle().css('top', summHeight);
    //     }
    //
    // });





    $('.mobile_mnu').click(function () {
        $('#menu').fadeToggle().toggleClass('on');
    });

    $('#cabinet_menu-mobile').click(function () {
        // $(this).toggleClass('in');
        $('.cabinet-wrapper .sidebar').toggleClass('on');
        $('html').toggleClass('fix');
    });

    $('.cabinet-wrapper .box-close').click(function () {
        $('.cabinet-wrapper .sidebar').removeClass('on');
        $('html').removeClass('fix');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".cabinet-wrapper .sidebar"); // тут указываем ID элемента
        var btn = $('#cabinet_menu-mobile, .cabinet-wrapper .box-close');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('on'); // скрываем его
            $('html').removeClass('fix');
        }
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $("#menu"); // тут указываем ID элемента
        var btn = $('.mobile_mnu');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut().removeClass('on'); // скрываем его
            $('html').removeClass('fix');
        }
    });


    $('.catalog_item-list .item_wrapper-top .image, .catalog_item-list .item_wrapper-top .information-box').click(function (e) {
        e.preventDefault();
        $(this).parents('.item_wrapper').toggleClass('active');
    });

    $('.catalog_item-list .btn-close').click(function (e) {
        e.preventDefault();
        $(this).parents('.catalog_item-list').find('.item_wrapper').removeClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".catalog_item-list .item_wrapper"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 && div.siblings('.item_wrapper, .b_hidden').has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });


    $('.search-mobile').click(function () {
        $(this).toggleClass('in');
        $('.search-mobile .block_search').fadeToggle();
    });


    $('.main_slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.product_content-left-image .image_min').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        appendArrows: '.arrow-box',
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }
        ]
    });


    $('.filter-product__title').click(function () {
        $(this).parent().toggleClass('active');
    });


    $('.add_car').click(function () {
        $('.cabinet_garage .auto_select').fadeToggle();
    });


})
;


$(document).ready(function () {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay, .btn-continue-shopping');
    var modal = $('.modal_div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});


$(document).ready(function () {
    var overlay = $('#overlay');
    var open_filter = $('.filter_mnu');
    var close = $('.filter-title, #overlay');
    var filter_menu = $('#filter_menu');

    open_filter.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(200,
            function () {
                $(div)
                    .css('left', '0')
                    .animate(200);
                $('#filter_menu > .button-group, .filter-title').css('left', '0')
                    .animate(200);
            });
    });

    close.click(function () {
        filter_menu
            .animate(200,
                function () {
                    $(this).css('left', '-100%');
                    overlay.fadeOut();
                }
            );
        $('#filter_menu > .button-group, .filter-title').animate(200,
            function () {
                $(this).css('left', '-100%');
                overlay.fadeOut(200);
            }
        );
    });
});


$(function () {

    if ($(window).width() < 510) {
        $('.s_category-mark .btn-all').text('Показать больше');
        // hidden list > 38
        $('.s_category-mark__content > .list-auto').each(function () {
            if ($(this).children('li').length > 8) {
                $(this).children('li').slice(8).hide();
            }
        });
        $('.s_category-mark .btn-all').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                content = $(this).parent().find('ul.list-auto');
            if (!$this.hasClass('trigger')) {
                $this.addClass('trigger');
                $this.text('Скрыть');
                content.children('li').slideDown();
            } else {
                $this.removeClass('trigger');
                $this.text('Показать больше');
                content.each(function () {
                    $(this).children('li').slice(8).slideUp();
                })
            }
        });

        $('.s_category-mark__content > .list-auto > li').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('in').find('.subcategory-auto').slideToggle();
        });

        $('.auto_select-wrap .item').removeClass('item-disable');

        $('.product_menu').each(function () {
            $(this).find('li').show();
        });

        $('.product_item .product_item-text').click(function () {
            $(this).parent().toggleClass('in');
        });

        // $('.s_product-group .container .show-more').show();
        // hidden block category
        $('.s_product-group .container').each(function () {
            if ($(this).find('.product_item').length > 5) {
                $(this).find('.product_item').slice(5).hide();
            }
        });

        $('.s_product-group .container .show-more').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                content = $(this).parent().find('.product_item');
            if (!$this.hasClass('trigger')) {
                $this.addClass('trigger');
                $this.text('Скрыть');
                content.slice(5).fadeIn();
            } else {
                $this.removeClass('trigger');
                $this.text('Показать больше');
                content.slice(5).fadeOut();
            }
        });

        $('.auto_select .container h4').text('Выберите автомобиль');


        $('.s-category-auto .box h6').click(function () {
            $(this).next('.list-auto').slideToggle();
        });

        $('.product-information .info-item:first-child p').text('Возврат 14 дн.');
        $('.product-information .info-item:last-child p').text('Гарантия 12 мес. ');

        $('.info-delivery-payment .box h3').click(function () {
            $(this).toggleClass('in').next('.list-line').slideToggle();
        });

        $('.about-brand .subtitle h2').click(function () {
            $(this).toggleClass('in').parents('.about-brand').find('.brand-description').slideToggle();
        });


        $('.product-analogies h3').click(function () {
            $(this).toggleClass('in').next().slideToggle();
        });


        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 160) {
        //         $('.header_center').hide();
        //     } else {
        //         $('.header_center').hide();
        //     }
        // });


    } else {

        $('.s_category-mark .btn-all').text('Запчасти для других марок');
        $('.product_menu').each(function () {
            if ($(this).find('li').length > 3) {
                $(this).find('li').slice(3).hide();
            }
        });

        $('.product-information .info-item:first-child p').text('Возврат, обмен - 14 дней');
        $('.product-information .info-item:last-child p').text('Гарантия - 12 месяцев ');
        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 160) {
        //         $('.header_center').hide();
        //     } else {
        //         $('.header_center').show();
        //     }
        // });
    }
    // window.addEventListener("resize", function() {
    //     if ($(window).width() < 510) {
    //         // $(window).scroll(function () {
    //         //     if ($(this).scrollTop() > 160) {
    //         //         $('.header_center').hide();
    //         //     } else {
    //         //         $('.header_center').hide();
    //         //     }
    //         // });
    //
    //         $('.header_center').hide();
    //     }
    //     else {
    //         // $(window).scroll(function () {
    //         //     if ($(this).scrollTop() > 160) {
    //         //         $('.header_center').hide();
    //         //     } else {
    //         //         $('.header_center').show();
    //         //     }
    //         // });
    //
    //         $('.header_center').show();
    //     }
    //
    // }, false);
});


//// стрелка для прокрутки таблицы
$(document).ready(function () {
   // scroll table
   $('.btn-scroll').on('click', function () {
       $(this).siblings('.table-wrapper').animate({scrollLeft: '+=100'}, 500);
   });

   var div = $('.table-wrapper'),
       div_sh = $(div)[0].scrollWidth,
       div_h = div.width();
   $(div).scroll(function () {
       if ($(this).scrollLeft() >= div_sh - div_h) {
           $('.btn-scroll').hide();
       } else {
           $('.btn-scroll').show();
       }
   });
   // scroll table
});

var MenuPos = {
    scrollY:0,//тек скрол экрана
    screenY:0, //высота экрана
    screenYmax:0,//нижняя точка экрана
    offsetPos:10,//смещение от низу
    
    init: function(){
        this.screenY = parseInt(window.innerHeight);
        MenuPos.labMouse = $('#MousePos');
        this.winScrol();
        this.event();
    },
    event: function(){
        window.onscroll = function() { MenuPos.winScrol();} //обновим позиции при скроле

        $('body').on('mouseover','.catalog_menu > .drop-menu1 > .links-drop',function(e){
            $('.drop-menu2').removeClass('active');
            $(this).find('.drop-menu2').addClass('active');

            var elmPos = $(this).offset();//позиция элемента
            var box = $(this).find('.drop-menu2');// блок который позиционируем
            var boxHeight = box.outerHeight();//высота блока
            var top = elmPos.top;//коректируем позицию относительно смещения

            if(MenuPos.screenYmax > parseInt(top + boxHeight)){//если высоты хватает
                box.css( "top",0 );
            }else{
                var offsBox = parseInt(parseInt(MenuPos.screenYmax) - parseInt(top + boxHeight)) - MenuPos.offsetPos;
                box.css( "top",offsBox );
            }
        });

        $('body').on('mouseout','.catalog_menu > .drop-menu1 > .links-drop',function(e){
            $('.drop-menu2').removeClass('active');
        });
    },
    winScrol:function(){
        MenuPos.scrollY = window.pageYOffset || document.documentElement.scrollTop;
        MenuPos.screenYmax = MenuPos.scrollY + MenuPos.screenY;
    }


};
$(document).ready(function () {
    MenuPos.init();
});