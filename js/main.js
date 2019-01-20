ActionJs = {
    Init : function(){
        ActionJs.scrollFixMenu();
        ActionJs.showMenuMobile();
        ActionJs.displayFormSearch();
        ActionJs.scrollFixMenu();
        ActionJs.setTopSearchForm();
    },
    showMenuMobile : function(){
        $('.control__menu').on('click', function(){
            console.log('aaa');
            $(this).toggleClass('show');
            $('#header nav .wrapper').toggleClass('show');
        });
    },
    displayFormSearch : function(){
        $('#header nav .wrapper .search-languages li svg, #header .wrapper-control-mobile img').on('click', function(){
            $('#header nav .wrapper .search-languages form').toggleClass('d-block');
        });
    },
    scrollFixMenu : function(){
        $(window).scroll(function(){
            var pos_body	= window.pageYOffset;
            if(pos_body > 10){
                $('#header').addClass('fix-menu');
            }else {
                $('#header').removeClass('fix-menu');
            }
        });
    },
    setTopSearchForm : function(){
        var h_header = $('#header').outerHeight();
        $('#header nav .wrapper .search-languages form').css('top', h_header + 15);
        $('#header nav .wrapper').css('top', h_header);
    }
}
ActionJs.Init();
