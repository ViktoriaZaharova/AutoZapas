$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header_fixed').addClass('fixed');
        } else {
            $('.header_fixed').removeClass('fixed');
        }
    });

    $(window).resize(function(){
        $('.drop-menu1').slideUp();
    });

    $('.catalog_menu .menu-title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        // $('.catalog_menu .menu-title').not(this).removeClass('in').next().slideUp();
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".drop-menu1"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 && div.siblings('.menu-title, .catalog_menu').has(e.target).length === 0) { // и не по его дочерним элементам
            div.slideUp(); // скрываем его
        }
    });


    $('.filter-product .box-hidden .links').click(function (e) {
        e.preventDefault();
        $('.filter-product .box-hidden label:nth-child(5) ~ label').fadeToggle().css('display', 'flex');
    });


    $("#menu").mmenu({
        "extensions": [
            "position-front",
            "pagedim-black",
            "multiline"
        ],
        backButton: {
            close: true
        },
        navbar: {
            title: false
        },
        "navbars": [
            {
                "position": "top",
                "content": [
                    "close",
                    ".mobile-header"
                ]
            }
        ]
    });

    $('.item_brand, .catalog_item-block .item_title').equalHeights();


    $('.orders_wrapper .s__cabinet-content .line').click(function () {
        $(this).toggleClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').fadeToggle();
        $('.orders_wrapper .s__cabinet-content').not(this).removeClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').slideUp();
    });

    $('.VIN_queries .s__cabinet-content .line').click(function () {
        $(this).toggleClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').fadeToggle();
        $('.VIN_queries .s__cabinet-content').not(this).removeClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').slideUp();
    });

    $('.cabinet_orders .s__cabinet-content .line').click(function () {
        $(this).toggleClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').fadeToggle();
        $('.cabinet_orders .s__cabinet-content .line').not(this).removeClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').slideUp();
    });

    $('.cabinet_vin .s__cabinet-content .line').click(function () {
        $(this).toggleClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').fadeToggle();
        $('.cabinet_vin .s__cabinet-content .line').not(this).removeClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn').slideUp();
    });

    $('.clarification').click(function () {
       $('.vin-request .cabinet_wrapper .tabs__content .auto_select-top .block_center, .vin-request .cabinet_wrapper .tabs__content .auto_select-top .block_right').fadeToggle();
    });

    $('#cabinet_menu-mobile').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });

    $('.auto_select-wrap .item .btn-select').click(function () {
        $(this).toggleClass('in').next().fadeToggle().css('display', 'flex');
        $('.auto_select-wrap .item .btn-select').not(this).removeClass('in').next().slideUp();
    });


    $('.form_delivery .input-group .radio').click(function () {
        $(this).toggleClass('in').next().fadeIn();
        $('.form_delivery .input-group .radio').not(this).removeClass('in').next().slideUp();
    });

    $('.link-comment').click(function () {
        $(this).toggleClass('in').next().fadeToggle();
        $('.link-comment').not(this).removeClass('in').next().slideUp();
    });


    $('.btn_stages-1').click(function () {
        $('.two_stages .form_delivery').fadeIn();
       $('.two_stages .subtitle').addClass('in');
       $('.one_stages .one_stages-wrap').fadeOut();
       $('.one_stages .number_stages').addClass('out');
       $('.ordering_total .btn-disable').addClass('btn');
       $('.link-comment').addClass('in');
       $('.comment-delivery').fadeIn();
    });


    $('.btn_stages-2').click(function () {
        $('.three_stages .form_delivery').fadeIn();
        $('.three_stages .subtitle').addClass('in');
        $('.two_stages .form_delivery').fadeOut();
        $('.two_stages .number_stages').addClass('out');
    });

    $('.one_stages .link-edit').click(function () {
        $('.two_stages .form_delivery').fadeOut();
        $('.two_stages .subtitle').removeClass('in');
        $('.one_stages .one_stages-wrap').fadeIn();
        $('.one_stages .number_stages').removeClass('out');
        $('.ordering_total .btn-disable').removeClass('btn');
        $('.link-comment').removeClass('in');
        $('.comment-delivery').fadeOut();
    });

    $('.two_stages .link-edit').click(function () {
        $('.three_stages .form_delivery').fadeOut();
        $('.three_stages .subtitle').removeClass('in');
        $('.two_stages .form_delivery').fadeIn();
        $('.two_stages .number_stages').removeClass('out');
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

    $('.catalog ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.catalog').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.vin-request ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.vin-request').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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

    $('.cabinet_menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });

    $('.filter-product__title').click(function () {
       $(this).toggleClass('in').siblings('.box-hidden').slideToggle();
    });

    $(".date-input").mask("99.99.9999");
    $("input[name='phone']").mask("8(999) 999-99-99");


    $('.add_car').click(function () {
        $('.cabinet_garage .auto_select').fadeToggle();
    });

    $('.btn-save').click(function () {
        $('.message_result').fadeIn();
    });

    $('.add-line').click(function () {
        $(".details_description .form .add-line").before('<div class="line">\n' +
            '                                <div class="input-group">\n' +
            '                                    <label>Название запчасти:</label>\n' +
            '                                    <input type="text" name="name-part">\n' +
            '                                </div>\n' +
            '\n' +
            '                                <div class="input-group">\n' +
            '                                    <label>Кол-во</label>\n' +
            '                                    <input type="text" name="inp-quantity" value="1">\n' +
            '                                </div>\n' +
            '\n' +
            '                                <button class="btn-close">x</button>\n' +
            '                            </div>');
    });

    $('.details_description .form .line .btn-close').click(function (e) {
        $(this).closest('.details_description .form .line').remove();
    });


    $(".file-upload input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $(".filename").val(filename).after('<button type="button" class="btn-close">x</button>').toggleClass('active');
        $(this).off('change');
    });




});


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
                    .css('display', 'block')
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
    var open_modal = $('.btn-open_modal');
    var close = $('.modal_close, .btn-ok');
    var modal = $('#modal_result');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $('#modal_result');
        $(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                }
            );
    });
});

$(document).ready(function () {
    var overlay = $('#overlay');
    var open_filter = $('.filter_mnu');
    var close = $('.icon-close');
    var filter_menu = $('#filter_menu');

    open_filter.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('left', '0')
                    .animate(200);
            });
    });

    close.click(function () {
        filter_menu
            .animate(200,
                function () {
                    $(this).css('left', '-300px');
                    overlay.fadeOut(400);
                }
            );
    });
});


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});


// mobile slide
// $('.s_sale .cart-wrapper').slick({
//     dots: true,
//     infinite: true,
//     speed: 700,
// });

// $(window).on("load resize", function(){
//     var width = $(document).width();
//
//     if (width > 610) {
//         $('.s_sale .cart-wrapper').slick('unslick');
//     } else {
//         $('.s_sale .cart-wrapper').not('.slick-initialized').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//         });
//     }
// });