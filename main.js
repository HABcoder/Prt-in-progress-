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
})