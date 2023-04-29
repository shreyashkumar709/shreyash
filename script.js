window.addEventListener("load", (e) => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");
    document.body.classList.add('animate');
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        links.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    });
    const whyText = document.querySelector(".clickable-text p:first-child");
    const hiddenText = document.querySelector(".clickable-text .hidden-text");

    whyText.addEventListener("click", () => {
        hiddenText.style.display = "block";
    });
    const registerButton = document.getElementById("register-button");
    registerButton.addEventListener("click", () => {
        let name = prompt("Your Name-");
        while (name === null || name.trim() === "") {
            name = prompt("Your Name-");
        }
        alert(`Welcome, ${name}!`);
    });

})
