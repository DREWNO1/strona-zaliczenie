"use strict";
const menuPage = document.querySelector(".menu-page");
const menuBtn = document.querySelector(".menu-button");
const btnBack = document.querySelector(".btn-back");
const main = document.querySelector("main");
const page = document.querySelector(".page");


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

// window.addEventListener("scroll", () => {
   
//     if(window.scrollY >= 200) {
//         menuBtn.classList.remove("menu-btn-hidden");
//         console.log("scroll")
//     } else {
//         menuBtn.classList.add("menu-btn-hidden");
//     }
// });
