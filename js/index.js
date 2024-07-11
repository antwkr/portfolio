$('.menu-icon').click(function() {
    if ($('nav').hasClass('active')){
        $('menu-icon').hasClass('active');
        $('nav').removeClass('active');

    } else {
        $('nav').addClass('active');
        
    }
});

    var btn = $('#scroll-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});
