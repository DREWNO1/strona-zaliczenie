"use strict";
const menuPage = document.querySelector(".menu-page");
const menuBtn = document.querySelector(".menu-button");
const btnBack = document.querySelector(".btn-back");
const main = document.querySelector("main");
const page = document.querySelector(".page");
const ttvscript = document.querySelector(".twitch-script");
const [red, green, blue] = [255, 255, 255];

// menuBtn.addEventListener('click', () => {
//     if(menuBtn.classList.contains("hover")) {
//         menuBtn.classList.remove("hover");
//     }

//     menuBtn.classList.toggle("change");
//     menuPage.classList.toggle("hidden");

//     main.classList.toggle("blur");

//     setTimeout(() => {
//         btnBack.classList.toggle("hidden");
//     }, 150);
// })

window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 300
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)

    console.log(`rgb(${r}, ${g}, ${b}`)

    main.style.background = `rgb(${r}, ${g}, ${b}`
});