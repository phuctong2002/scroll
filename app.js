const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.getElementById("nav");
console.log(navToggle);
console.log(linksContainer);
console.log(links);
window.addEventListener("scroll", function() {
    const height = window.pageYOffset;
    console.log(height);
    if (height > 86) {
        nav.classList.add("boxShadow");
    } else {
        nav.classList.remove("boxShadow");
    }
})