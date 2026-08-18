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
