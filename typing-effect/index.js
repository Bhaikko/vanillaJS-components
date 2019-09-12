const texts = ["games", "websites", "3d models", "coffee"];
let count = 0;  //Word Selector
let index = 0;  //Indiviual Character of Word
let currentText = "";
let letter = "";

(function type() {
    if(count === texts.length)
    {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length == currentText.length)
    {
        count++;
        index = 0;
    }

    setTimeout(type, 400);
        

})();