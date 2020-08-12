// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropogation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //Grabbing new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }

})

$(".fa-plus").click(function(e) {
    $("input[type='text']").fadeToggle();
});