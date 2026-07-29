/* MOBILE MENU */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

/* CLOSE MENU WHEN LINK IS CLICKED */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

/* FAQ ACCORDION */

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
const isLight = document.body.classList.contains("light-mode");
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

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

const botReply = document.getElementById("botReply");
const userRequest = document.getElementById("userRequest");
const aiStatus = document.getElementById("aiStatus");

function showToast(message){

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

document.getElementById("getStartedBtn").addEventListener("click",(e)=>{

    e.preventDefault();

    showToast("Generating your personalized AI dashboard...");

    botReply.textContent = "Analyzing your learning goals...";

    aiStatus.textContent = "⏳ Preparing AI dashboard...";

    setTimeout(()=>{

        botReply.textContent = "Welcome! Your study assistant is ready.";

        aiStatus.textContent = "✅ Dashboard generated successfully.";

        document.getElementById("features").scrollIntoView({

            behavior:"smooth"

        });

    },2500);

});

document.getElementById("generateBtn").addEventListener("click",(e)=>{

    e.preventDefault();

    userRequest.textContent = "Generate a Physiology quiz.";
    aiStatus.classList.remove("typing");
    aiStatus.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Generating AI Quiz...
    `;

    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    setTimeout(()=>{

        aiStatus.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <strong>📘 Quiz Ready!</strong><br>
            • 20 Multiple Choice Questions<br>
            • Topic: Physiology<br>
            • Difficulty: Intermediate
        `;

        generateBtn.disabled = false;
        generateBtn.textContent = "Generate Quiz";

        showToast("20 AI questions generated successfully!");

    },3000);

});

document.getElementById("exploreBtn").addEventListener("click",(e)=>{

    e.preventDefault();

    document.getElementById("features").scrollIntoView({

        behavior:"smooth"

    });

});