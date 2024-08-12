/*----------

Theme Name: kgTech - Responsive HTML5 Template
Theme Version: 1.0

----------*/

new WOW().init();
wow = new WOW({
    mobile: true
})
wow.init();

$(document).ready(function() {

    "use strict";

    $(".menu-toggle").click(function() {
        $(".main-navigation").toggleClass("toggled");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('.site-header').addClass('sticky-head');
            $('.scrolltotop').css({ "display": "block" });
        } else {
            $('.site-header').removeClass('sticky-head');
            $('.scrolltotop').css({ "display": "none" });
        }
    });
    jQuery(".menu-menu-1-container li a").click(function() {
        jQuery(".main-navigation").removeClass("toggled");
    });

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scrollToTop').fadeIn();
        } else {
            jQuery('#scrollToTop').fadeOut();
        }
    });

    $(".solution-accordion-list-box").click(function() {
        $(this).toggleClass('active');
    })

    $('.projects-slider-wp').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });

    $('.blog-slider-wp').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

})
document.querySelector('.play-btn').addEventListener('click', function() {
    // Get the video element
    var video = document.getElementById('myVideo');
    
    // Show the video
    video.style.display = 'block';
    
    // Play the video
    video.play();
    
    // Optionally, hide the play button after the video starts playing
    this.style.display = 'none';
});