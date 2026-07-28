/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

/* ===========================
   CLOSE MENU WHEN LINK IS CLICKED
=========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

/* ===========================
   FAQ ACCORDION
=========================== */

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {

            if(item !== answer){

                item.style.display = "none";

            }

        });

        answer.style.display =
            answer.style.display === "block"
            ? "none"
            : "block";

    });

});

/* ===========================
   DARK MODE
=========================== */

const themeBtn = document.getElementById("theme-toggle");

let dark = true;

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (dark) {

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

});

/* ===========================
   STICKY HEADER SHADOW
=========================== */

window.addEventListener("scroll",()=>{

    const header=document.querySelector(".header");

    if(window.scrollY>40){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="none";

    }

});

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals=document.querySelectorAll(

".feature-card,.step,.testimonial,.faq-item,form"

);

window.addEventListener("scroll",reveal);

function reveal(){

    const trigger=window.innerHeight-120;

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

/* Initial state */

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="all .7s ease";

});

reveal();

/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#0ea5e9";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / 120;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update, 20);

        } else {

            if (target >= 1000000) {

                counter.innerText = "1M+";

            } else if (target >= 10000) {

                counter.innerText = "10K+";

            } else if (target === 98) {

                counter.innerText = "98%";

            } else {

                counter.innerText = target + "+";

            }

        }

    };

    update();

});