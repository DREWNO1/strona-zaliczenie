"use strict";
//! CODE BY DREWNO

const posts = document.querySelectorAll(".gal");
const mainPage = document.querySelector("main");
const galPage = document.querySelector("#gallery-page");
const zdjecie = document.querySelector(".zdjecie");
const picBtns = document.querySelectorAll(".picture-button")
const leftBtn = document.querySelector(".button-left")
const rightBtn = document.querySelector(".button-right")

const postsList = {
    post1: new Set(['post1.png', 'avatar.png']),
    post2: new Set(['post2.png', 'avatar2.png', 'ja.JPEG', 'avatar3.png', 'post3.png']),
    post3: new Set(['post3.png', 'avatar3.png'])
};
let i = 0;
// post1.set(['post1.png', 'avatar'])

posts.forEach((post) => {
    post.addEventListener("click", () => {
        mainPage.style.opacity = "0";


        setTimeout(() => {
            mainPage.style.display = "none";
            galPage.style.display = "grid";
        }, 500)

        let pictureLocation = post.classList[2];
        const postValues = postsList[pictureLocation];

        // console.log([...postValues][0]);

        let postImage = document.createElement("img");

        console.log(`../img/posts/${pictureLocation}/` + [...postValues][0])
        postImage.setAttribute("src", `../img/posts/${pictureLocation}/` + [...postValues][0])
        postImage.setAttribute("class", 'post-picture')

        zdjecie.appendChild(postImage)

        const postPicture = document.querySelector(".post-picture");
        // // for(i = 0; i++; i <= pictures.get(pictureLocation).length)

        rightBtn.addEventListener('click', () => {
            zdjecie.style.opacity = "0";
            if (i == ([...postValues].length) - 1) {
                i = 0;
            } else {
                i++
            }

            setTimeout(() => {
                zdjecie.removeChild(postImage)
                postImage.setAttribute("src", `../img/posts/${pictureLocation}/` + [...postValues][i])
                zdjecie.appendChild(postImage)

                zdjecie.style.opacity = "1";
            }, 500)

        })

        leftBtn.addEventListener('click', () => {
            zdjecie.style.opacity = "0";
            console.log(i)

            if (i == 0) {
                i = ([...postValues].length - 1)
                console.log(i)
            } else {
                i--
                console.log(i)
            }

            setTimeout(() => {
                zdjecie.removeChild(postImage)
                postImage.setAttribute("src", `../img/posts/${pictureLocation}/` + [...postValues][i])
                zdjecie.appendChild(postImage)

                zdjecie.style.opacity = "1";
            }, 500)

        })

        setTimeout(() => {
            zdjecie.style.opacity = "1";
        }, 1000)

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