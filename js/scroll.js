/*==========================================================
                    SCROLL ANIMATIONS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            REVEAL SECTIONS
    =========================================*/

    const revealElements = document.querySelectorAll(

        "section, .skill-card, .project-card, .certificate-card, .stats-card"

    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

});


/*==========================================================
                ANIMATE SKILL BARS
==========================================================*/

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar=entry.target;

const value=bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=value;

},300);

progressObserver.unobserve(bar);

}

});

},

{

threshold:.3

}

);

progressBars.forEach(bar=>{

progressObserver.observe(bar);

});


/*==========================================================
                COUNTER ANIMATION
==========================================================*/

const counters=document.querySelectorAll(".stats-card h2");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let current=0;

const speed=Math.ceil(target/60);

const update=()=>{

current+=speed;

if(current>=target){

counter.innerText=target+"+";

}

else{

counter.innerText=current+"+";

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==========================================================
                PARALLAX HERO
==========================================================*/

window.addEventListener("scroll",()=>{

const heroImage=document.querySelector(".hero-image");

if(heroImage){

heroImage.style.transform=

`translateY(${window.scrollY*0.12}px)`;

}

});


/*==========================================================
                NAVBAR SHADOW
==========================================================*/

const header=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});


/*==========================================================
                BUTTON RIPPLE
==========================================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const diameter=Math.max(

button.clientWidth,

button.clientHeight

);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=

e.offsetX-diameter/2+"px";

circle.style.top=

e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/*==========================================================
                LAZY IMAGE EFFECT
==========================================================*/

const images=document.querySelectorAll("img");

images.forEach(image=>{

image.setAttribute("loading","lazy");

});


/*==========================================================
                PAGE LOADED
==========================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*==========================================================
                END
==========================================================*/

console.log(

"Portfolio Loaded Successfully 🚀"

);