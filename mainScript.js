window.onload = function(){

    resizeWindow();
    $(window).on('resize', resizeWindow);

};

function resizeWindow(){

    $("#mainImage").height($(window).height() - $("#mainNavbar").height());

}

$('#nav').affix({
    offset: {
        top: $('#mainNav').offset().top
    }
});