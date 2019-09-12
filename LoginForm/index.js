$(".textb input").on("focus", function() {
    $(this).addClass("focus");
});

$(".textb input").on("blur", function() {

    if($(this).val() == "")
        $(this).removeClass("focus");
});

