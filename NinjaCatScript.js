$(document).ready(function(){
    $('img').click(function(){
        var cat=$(this).attr("data-alt-src");
        var ninja=$(this).attr("src");
        $(this).attr("data-alt-src",ninja);
        $(this).attr("src",cat);
    });
});
