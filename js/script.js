/*==========================================================
                    PRELOADER
==========================================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

    setTimeout(() => {

        preloader.remove();

    },500);

});


/*==========================================================
                STICKY NAVBAR
==========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});


/*==========================================================
                ACTIVE NAVIGATION
==========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/*==========================================================
                SCROLL PROGRESS BAR
==========================================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop/scrollHeight)*100;

    progressBar.style.width = progress + "%";

});


/*==========================================================
                BACK TO TOP BUTTON
==========================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================================
                SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==========================================================
                AOS INITIALIZE
==========================================================*/

AOS.init({

    duration:1000,

    once:true,

    offset:100,

    easing:"ease-in-out"

});


/*==========================================================
                CURRENT YEAR
==========================================================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =

        `© ${year} Koti Shivaji. All Rights Reserved.`;

}


/*==========================================================
                CONSOLE MESSAGE
==========================================================*/

console.log(

"%cPortfolio Developed by Koti Shivaji",

"color:#2563EB;font-size:18px;font-weight:bold;"

);

/*==========================================================
                CONTACT FORM - FORMSPREE
==========================================================*/

const contactForm = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");
const contactStatus = document.getElementById("contactStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        // Prevent multiple submissions
        if (contactSubmit.disabled) {
            return;
        }

        const originalButtonText = contactSubmit.innerHTML;

        // Show sending state
        contactSubmit.disabled = true;

        contactSubmit.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            Sending...
        `;

        contactStatus.textContent = "";
        contactStatus.className = "mt-3";

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                // Success
                contactStatus.textContent =
                    "✓ Message sent successfully! I'll get back to you soon.";

                contactStatus.className =
                    "mt-3 text-success";

                // Clear form
                contactForm.reset();

            } else {

                // Formspree returned an error
                const data = await response.json().catch(() => null);

                throw new Error(
                    data?.errors?.map(error => error.message).join(", ")
                    || "Something went wrong. Please try again."
                );

            }

        } catch (error) {

            console.error("Contact form error:", error);

            contactStatus.textContent =
                "✕ Message could not be sent. Please try again.";

            contactStatus.className =
                "mt-3 text-danger";

        } finally {

            // Restore button
            contactSubmit.disabled = false;

            contactSubmit.innerHTML = originalButtonText;

        }

    });

}
