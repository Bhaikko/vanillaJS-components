const modal = $("#modal");

$("#giveMeModal").click(event => {
    modal.css({
        "animation": `modal-slide-down 0.75s ease forwards`,
        "z-index": "2"
    });
    $("body > *").not("body > #modal").css({
        "filter": "blur(5px) grayscale(10%)"
    });
});

$("#modal-closeButton").click(event => {
    
    $("body > *").not("body > #modal").css({
        "filter": "blur(0px)"
    });

    modal.css({
        "animation": "",
    });
});


$("#addMoreIngredients").click(() => {
    
    $("#ingredients").append(
        `
            <br>
            <input class="recipe-ingredient-name" name="ingredients[][name]" placeholder="Enter Ingredient Name" >
            <input class="recipe-ingredient-quantity" name="ingredients[][quantity]" placeholder="Enter Ingredient Quantity">
        `
    )
});
