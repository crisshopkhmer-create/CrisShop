
/* =====================================================
   CRIS SHOP JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");


menuBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    mobileMenu.classList.toggle("active");

});


/* Close menu when clicking outside */

document.addEventListener("click", (event) => {

    if (

        mobileMenu.classList.contains("active") &&

        !mobileMenu.contains(event.target) &&

        !menuBtn.contains(event.target)

    ) {

        mobileMenu.classList.remove("active");

    }

});


/* Close menu when clicking a link */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});



/* ================= DARK / LIGHT MODE ================= */

const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* Remember Theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}



/* ================= CHANGING TEXT ================= */

const changingText =
    document.getElementById("changingText");


const texts = [

    "Game Store",

    "Roblox Store",

    "Game Items",

    "Fast & Easy",

    "Cris Shop"

];


let textIndex = 0;


setInterval(() => {

    textIndex++;


    if (textIndex >= texts.length) {

        textIndex = 0;

    }


    changingText.style.opacity = "0";


    setTimeout(() => {

        changingText.textContent = texts[textIndex];

        changingText.style.opacity = "1";

    }, 250);


}, 2500);



/* ================= BANNER SWIPER ================= */

const bannerSwiper =
    new Swiper(".bannerSwiper", {

        loop: true,

        speed: 600,


        autoplay: {

            delay: 3000,

            disableOnInteraction: false

        },


        navigation: {

            nextEl: ".swiper-button-next",

            prevEl: ".swiper-button-prev"

        },


        pagination: {

            el: ".swiper-pagination",

            clickable: true

        },


        grabCursor: true,

        touchRatio: 1,

        simulateTouch: true

    });



/* ================= GAME CARD SLIDER ================= */

const cardSlider =
    document.getElementById("cardSlider");


let currentSlide = 0;


function slideCards() {

    const cards =
        cardSlider.querySelectorAll(".section-card");


    if (cards.length < 2) {

        return;

    }


    currentSlide += 2;


    if (currentSlide >= cards.length) {

        currentSlide = 0;

    }


    const cardWidth =
        cards[0].offsetWidth;


    const gap = 15;


    cardSlider.scrollTo({

        left: currentSlide * (cardWidth + gap),

        behavior: "smooth"

    });

}


/* Auto Slide */

let cardAutoSlide =
    setInterval(slideCards, 3000);


/* Pause when touching */

cardSlider.addEventListener("touchstart", () => {

    clearInterval(cardAutoSlide);

});


/* Start again */

cardSlider.addEventListener("touchend", () => {

    cardAutoSlide =
        setInterval(slideCards, 3000);

});
