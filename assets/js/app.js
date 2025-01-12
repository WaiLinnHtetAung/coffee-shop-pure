document.addEventListener("DOMContentLoaded", function() {

    // add shadow to nav when scroll
    const nav = document.querySelector("nav"); 
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            nav.classList.add("shadow");
        } else {
            nav.classList.remove("shadow");
        }
    })
});