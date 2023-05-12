"use strict";
//! CODE BY DREWNO

const posts = document.querySelectorAll(".gal");
const mainPage = document.querySelector("main");
const galPage = document.querySelector("#gallery-page");
const zdjecie = document.querySelector(".zdjecie");
const picBtns = document.querySelectorAll(".picture-button")

let pictures = new Map();

pictures.set('post1', 'post1.png')

posts.forEach((post) => {
    post.addEventListener("click", () => {
        mainPage.style.opacity = "0";


        setTimeout(() => {
            mainPage.style.display = "none";
            galPage.style.display = "grid";
        }, 1000)

        let pictureLocation = `${post.classList[2]}`
        let postImage = document.createElement("img");

        postImage.setAttribute("src", `../img/posts/${post.classList[2]}/${pictures.get(pictureLocation)}`)
        postImage.setAttribute("class", 'post-picture')
        console.log(`../img/posts/${post.classList[2]}/${pictures.get(pictureLocation)}`)
        // console.log(pictures.get(pictureLocation))
        zdjecie.appendChild(postImage)

        const postPicture = document.querySelector(".post-picture");

        setTimeout(() => {
            zdjecie.style.opacity = "1";
        }, 1500)

    })
})

picBtns.forEach((picBtn) => {
    picBtn.addEventListener("mouseenter", () => {
        picBtn.style.transform = "scale(1.1)"
    })
    picBtn.addEventListener("mouseleave", () => {
        picBtn.style.transform = "scale(1)"
    })
})