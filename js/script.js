$(document).ready(function(){
    
    $(window).scroll(function(){
        var x = $(window).scrollTop();
        if(x>500){
            $('.header').addClass('headerSticky');
        }
        else{
            $('.header').removeClass('headerSticky');
        }
    });
    
    
    
    $(".sora").click(function(){
        
        $("section.header2 .parent2 nav").slideToggle(500);
    });
   
});