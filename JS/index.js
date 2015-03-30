$(function() {
    
    $(".desc").hide();
    $(".name").hide();
    
    $(".planet").click(function() {
        $(".planet").hide();
        $(".orbit").hide();
        $(this).parent().find(".desc").show();
    });
    
    $(".but").click(function() {
        $(".desc").hide();
        $(".planet").show();
        $(".orbit").show();
    });
    
    $(".planet").hover(function() {
        $(this).parent().find(".name").show();
    }, function() {
        //$(this).rotate(360);
        $(this).parent().find(".name").hide();
    });
    
});