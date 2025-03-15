function toggleMenu() {
    const navLinks = document.querySelector("#navlinks");
    navLinks.classList.toggle("active");
}

var typed = new Typed('#typed', {
    strings: ["Frontened developer", "UI/UX Designer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const navlinks = document.querySelector("#navlinks");
let modeToggle = document.querySelector(".icon");
const homeText = document.querySelector("#home");
let toggleMenu = document.getElementById("toggle");

modeToggle.addEventListener("click" , () => {
    modeToggle.classList.toggle("active");
});

