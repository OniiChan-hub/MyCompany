$(window).scroll(function(){
    if ($(window).scrollTop() > 100){
       $('body').addClass('fas fa-angle-up');
    } else {
       $('body').removeClass('fas fa-angle-up');
    }
 });