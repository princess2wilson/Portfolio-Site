
$(document).ready(function () {
    $('.html').animate({width:'90%'},2000);
    $('.css').animate({width:'90%'},2000);
    $('.js').animate({width:'60%'},2000);
    $('.cs').animate({width:'80%'},2000);
    $('.java').animate({width:'65%'},2000);
    $('.python').animate({width:'90%'},2000);
    $('.swift').animate({width:'70%'},2000);
    $('.cp').animate({width:'80%'},2000);
    $('.react').animate({width:'50%' },2000);
    $('.matlab').animate({width:'80%'},2000);
    $('.sql').animate({width:'50%'},2000);


    $('.menu-toggler').on('click', function (){
       $(this).toggleClass('open');
       $('.top-nav').toggleClass('open');
    });
    
    $('.top-nav .nav-link').on('click', function (){
       $('.menu-toggler').removeClass('open');
       $('.top-nav').removeClass('open');
    });
    
    $('nav a[href*="#"]').on('click', function (){
       $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
    });
    
    $('#up').on('click', function (){
       $('html, body').animate({
           scrollTop: 0
    }, 1000);
    });
    
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
    
});


