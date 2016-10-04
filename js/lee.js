/*global $*/

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){

    $('.lee-portrait').matchHeight();

    //Stack menu when collapsed and show "research fields"
    $('#research-pill-collapse').on('show.bs.collapse', function() {
        $('.nav-pills').addClass('nav-stacked');
    });

    //Unstack menu when not collapsed
    $('#research-pill-collapse').on('hide.bs.collapse', function() {
        $('.nav-pills').removeClass('nav-stacked');
    });

    $('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).attr('src'));
		$('#fm-img-modal').modal('show');
	});

});
