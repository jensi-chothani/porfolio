// ==============================
// Portfolio JavaScript
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // Current year in footer
    const footerText = document.querySelector("footer p");

    if (footerText) {
        const year = new Date().getFullYear();

        footerText.textContent =
            `© ${year} Jensi Chothani. All Rights Reserved.`;
    }


    // Smooth scrolling
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });

    });


    // Project button click effect
    const projectLinks = document.querySelectorAll(".project-links a");

    projectLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (this.getAttribute("href") === "#") {
                alert("GitHub / Live Demo link will be added soon.");
            }

        });

    });

});