const hamburger = document.querySelector(".hamburger")
const headerNav = document.querySelector(".nav__list")




hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger--open")
    headerNav.classList.toggle("header__nav--active")
})