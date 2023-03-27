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



const editor = document.getElementById("editor");
const warning = document.getElementById('warning');
const highlightedText = document.getElementById('highlighted-text');

const inappropriateWords = ['a', 'b', 'c']; // Replace with a list of inappropriate words

function highlightInappropriateWords(text) {
    const words = text.split(/\s+/);
    let result = '';

    for (const word of words) {
        if (inappropriateWords.includes(word.toLowerCase())) {
            result += `<span class="highlight">${word}</span> `;
        } else {
            result += `${word} `;
        }
    }

    return result.trim();
}

function checkForInappropriateWords() {
    const editorContent = editor.value;

    if (editorContent) {
        console.log('d')
        highlightedText.innerHTML = highlightInappropriateWords(editorContent);
        highlightedText.classList.remove("hidden");
        warning.classList.remove("hidden");
    } else {
        highlightedText.classList.add("hidden");
        warning.classList.add("hidden");
    }
}


editor.addEventListener("input", checkForInappropriateWords);