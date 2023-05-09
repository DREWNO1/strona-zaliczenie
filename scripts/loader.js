const loader = document.querySelector("#loader-bg");


onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        page.style.filter = "blur(4px)"
        page.style.display = "block"
        setTimeout(() => {
            loader.style.display = "none";
            page.style.filter = "blur(0)"
        }, 500)
    }, 1000)
}