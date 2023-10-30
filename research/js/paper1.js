
// You can add JavaScript functionality to enhance the user experience, such as smooth scrolling, back-to-top buttons, or collapsible sections. The following code demonstrates smooth scrolling:

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
