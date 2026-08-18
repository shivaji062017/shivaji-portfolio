/*==========================================================
                    DARK MODE
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");

    const body = document.body;

    const icon = themeToggle.querySelector("i");

    // Load Saved Theme
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    // Toggle Theme
    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

            localStorage.setItem("portfolio-theme", "dark");

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

            localStorage.setItem("portfolio-theme", "light");

        }

    });

});
