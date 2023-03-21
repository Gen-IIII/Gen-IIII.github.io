function fadeInElements() {
    const header = document.querySelector("header");
    const editorContainer = document.querySelector(".editor-container");
    const logoContainer = document.querySelector(".logo-container");
    
    setTimeout(() => {
        header.classList.add("fade-in");
        logoContainer.classList.add("fade-in");
        editorContainer.classList.add("fade-in");

    }, 500);
    
}
document.addEventListener("DOMContentLoaded", fadeInElements);
typeSlogan();

function typeSlogan() {
    const slogan = document.querySelector(".slogan");
    slogan.classList.add("slogan-typing");
    setTimeout(() => {
        slogan.classList.remove("slogan-typing");
    }, 2000);
}
