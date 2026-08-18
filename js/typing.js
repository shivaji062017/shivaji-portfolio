/*==========================================================
                    TYPING ANIMATION
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.querySelector("#typing");

    if (!typingElement) return;

    new Typed("#typing", {

        strings: [

            "Frontend Developer",

            "Python Developer",

            "AI Enthusiast",

            "Web Designer"

        ],

        typeSpeed: 70,

        backSpeed: 45,

        backDelay: 1500,

        startDelay: 500,

        smartBackspace: true,

        loop: true,

        showCursor: true,

        cursorChar: "|"

    });

});
