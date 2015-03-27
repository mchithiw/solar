$(function() {
    
    $(".desc").hide();
    
    $(".object").click(function() {
        $(".object").hide();
        //$(this).find('.desc').show();
        $(this).siblings().show();
    });
    
    $(".but").click(function() {
        $('.object').show();
        $('.desc').hide();
        //$('.object').show();
    });
    
});