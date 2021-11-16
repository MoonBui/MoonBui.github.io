// Code for fade in while scrolling
$(document).ready(function() {
    $('.fade-onload').each(function(i) {
        $(this).animate({ 'opacity': '1', 'margin-top': '0px' }, 500);
    });
    $(window).scroll(function() {
        $('.fade-in').each(function(i) {
            var bottom_of_element = $(this).offset().top +
                $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() +
                $(window).height();

            if (bottom_of_window >= bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-top': '0px' }, 500);
            }
        });
    });
});