$(function(){
    $("#text_hd").hide();
});

$(document).ready(function(){

    $(function(){    
            $("#text_hd").fadeIn(3000, function(){           
            });    
    });

    $(window).click(function(){	
		$("#header_dp").fadeOut(1000);
    });

    //NAV FUNCTION *****************
    $(function() {
        var d=300;
        $('#navigation a').each(function(){
            $(this).stop().animate({
                'marginTop':'-80px'
            },d+=150);
        });
    
        $('#navigation > li').hover(
        function () {
            $('a',$(this)).stop().animate({
                'marginTop':'-2px'
            },200);
        },
        function () {
            $('a',$(this)).stop().animate({
                'marginTop':'-80px'
            },200);
        }
    );
    });
    //NAV FUNCTION END****************
    
});