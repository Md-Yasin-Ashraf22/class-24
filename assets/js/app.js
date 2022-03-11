$(function(){
    $('.banner_slider').slick({
        prevArrow: '<i class="fas fa-arrow-left banner_slider_icon"></i>',
        nextArrow: '<i class="fas fa-arrow-right banner_slider_icon"></i>'
    })

    $(window).on('scroll' , function(){
       
        var scrollTop = $(this).scrollTop()

        console.log( $(this).scrollTop())

        if(scrollTop > 500){
            $('#back_to_top').fadeIn(500)
        }else{
            $('#back_to_top').fadeOut(500)
        }

    })

    $('#back_to_top').on('click' , function(){
        $('html ,body').animate({
            scrollTop: 0
        })
    })

    $(window).on('load' , function (){
        $('#preloader').fadeOut(1000)
    })

    $('a').on('click' , function(e){
        
        (e).preventDefault()

        var hash = (this).hash

        if(hash !== ''){
            $('html , body').animate({
               scrollTop: $(hash).offset().top
            }, 500);
         }

    })


})