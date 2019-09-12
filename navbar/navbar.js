
class Navbar 
{
    constructor() {
        this.addHeaders();
        this.render();
        this.navSlide();
    }

    render = () => {
        const navbar = document.getElementById("navbar");
        navbar.innerHTML = 
        `
            <img src="" alt="" class="logoImage"/>
            <div class="logo">
                <h4>Title </h4>
            </div>
            <ul class="nav-links">
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
                <li><a href="#">Link3</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        `
    }

    navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");

        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            navLinks.forEach((link, index) => {

                if(link.style.animation)
                    link.style.animation = "";
                else
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            });

            burger.classList.toggle("toggle");

        });  
    }

    addHeaders = () => {
        const head = document.getElementsByTagName("head");
        head[0].innerHTML += `<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">`;
        head[0].innerHTML += `<link rel="stylesheet" href="./navbar.css">`;

    }
};

const navbar = new Navbar();
