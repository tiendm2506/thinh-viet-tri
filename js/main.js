ActionJs = {
    Init : function(){
        ActionJs.scrollFixMenu();
        ActionJs.showMenuMobile();
        ActionJs.orderItem();
        ActionJs.changeFlag();
    },
    scrollFixMenu : function(){
        $(window).scroll(function(){
            let pos_body = window.pageYOffset;
            if(pos_body > 100){
                $('#header').addClass('scrolled');
            }else {
                $('#header').removeClass('scrolled');
            }
        });
    },
    showMenuMobile : function(){
        $('.control__menu').on('click', function(){
            $(this).toggleClass('show');
            $('.menu-part').toggleClass('show');
        });
    },
    orderItem : function(){
        $('#nop-rut-tien-page #nop-rut-tien .tab-info .nav-tabs .nav-item .nav-link').on('click', function(){
            $('#nop-rut-tien-page #nop-rut-tien .tab-info .nav-tabs .nav-item .nav-link').parent().css('order','2')
            $(this).parent().css('order','1')
        });
    },
    changeFlag : function(){
        $('.language').on('change', function(){
            let value = $(this).val();
            $('.flag-icon').attr('src', '../images/' + value + '.png');
        });
    }
}
ActionJs.Init();