window.onload = function(){

    resizeWindow();
    $(window).on('resize', resizeWindow);

};

//Change navbar height on window resize
function resizeWindow(){

    $("#mainImage").height($(window).height() - $("#mainNavbar").height());

}

//Affix navbar when scrolling past
$('#nav').affix({
    offset: {
        top: $('#mainNav').offset().top
    }
});

//Smooth Scrolling
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
