/*==========================================================
                    CUSTOM CURSOR
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const dot = document.querySelector(".cursor-dot");

    const outline = document.querySelector(".cursor-outline");

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    /*====================================
            MOUSE POSITION
    ====================================*/

    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    /*====================================
        OUTLINE SMOOTH FOLLOW
    ====================================*/

    function animateCursor() {

        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    /*====================================
            HOVER EFFECT
    ====================================*/

    const hoverElements = document.querySelectorAll(

        "a, button, .btn, .skill-card, .project-card, .certificate-card"

    );

    hoverElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            outline.style.transform = "translate(-50%, -50%) scale(1.8)";
            outline.style.borderColor = "#2563EB";

            dot.style.transform = "translate(-50%, -50%) scale(0.5)";

        });

        element.addEventListener("mouseleave", () => {

            outline.style.transform = "translate(-50%, -50%) scale(1)";
            outline.style.borderColor = "#2563EB";

            dot.style.transform = "translate(-50%, -50%) scale(1)";

        });

    });

    /*====================================
            CURSOR HIDE
    ====================================*/

    document.addEventListener("mouseleave", () => {

        dot.style.opacity = "0";
        outline.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        dot.style.opacity = "1";
        outline.style.opacity = "1";

    });

});