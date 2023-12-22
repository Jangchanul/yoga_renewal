(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        $(".day li").click(function(){
            $(".day li").removeClass();
            $(this).addClass("on");
        });
        $(".review_write .btn_o").click(function(){
            $(".popup.rw").fadeIn();
        });
        $(".popup.rw input").click(function(){
            $(".rw").fadeOut();
            location.href='review_write.html'
        });
        $(".box").click(function(){
            $(".box").removeClass("on");
            $(this).toggleClass("on");
        });
        $(".tag_list .bt_plus").click(function(){
            $(".tag_select").fadeIn();
        });
        $(".tag_select .bt_close").click(function(){
            $(".tag_select").fadeOut();
        });
        
        $(".t_page .plus_box .bt_plus").click(function(){
            $(".career").append("<div class='add'><button class='minus' type='button'><img src='img/bt_minus.png'></button><input type='text' value=''></div>")
        });
        $(".t_page .minus").on("click",function(){
            $(this).parent().remove();
        });
        $(".vod_all .bt_add").on("click",function(){
            $(".add_box").fadeIn();
        });
        $(".vod_all .bt_add2").on("click",function(){
            $(".add_box").fadeOut();
        });
        $(".vod_all .bt_close").on("click",function(){
            $(".add_box").fadeOut();
        });
        $(".class_add td").on("click",function(){
            $(this).toggleClass("active");
        });
        
        $(".popup input").on("click",function(){
            $(".pop_box").fadeOut();
        });
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

