const hamburger = document.querySelector(".hamburger");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const nav = document.querySelector("nav");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", function () {
    bars.classList.toggle("active");
    times.classList.toggle("active");
    nav.classList.toggle("active");
    wrapper.classList.toggle("active");
    hamburger.classList.toggle("active");
})

const bebnyButton = document.querySelector(".bebny p");
const kominkiButton = document.querySelector(".kominki p");
const bebny = document.querySelector(".bebny>div");
const kominki = document.querySelector(".kominki>div");

bebnyButton.addEventListener("click", function () {
    bebnyButton.classList.toggle("active");
    bebny.classList.toggle("active");
})

kominkiButton.addEventListener("click", function () {
    kominkiButton.classList.toggle("active");
    kominki.classList.toggle("active");
})