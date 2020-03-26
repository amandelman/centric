const mobileMenu = document.querySelector(".menu");
const burgerMenu = document.querySelector(".burger");

function toggleBurger(){
    mobileMenu.classList.toggle("menu-collapsed");
}

burgerMenu.addEventListener("click", toggleBurger);




