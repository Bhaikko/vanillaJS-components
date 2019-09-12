function scrollAppear () {
    let introText = document.querySelector(".intro-text");
    let introPosition = introText.getBoundingClientRect().top;  

    // The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    let screenPosition = window.innerHeight / 1.2;

    if(introPosition < screenPosition)
    {
        introText.classList.add("intro-appear");
    }   

    // console.log(introPosition, screenPosition);
}

scrollAppear();

window.addEventListener("scroll", scrollAppear);