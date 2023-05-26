// Botón To-top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// Animaciones Fade
window.addEventListener('load', function() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for(var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if(elementTop < windowHeight -elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    this.window.addEventListener("scroll", reveal);
    reveal();
})