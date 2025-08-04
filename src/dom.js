import Image1 from "./img/Image 1.jpeg"
import Image2 from "./img/Image 2.jpg"
import Image3 from "./img/Image 3.avif"

const imageBox = document.querySelector(".imageBox");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const dots = document.querySelectorAll(".dot");

const images = [Image1, Image2, Image3]
let index = 0;
let img;

export function setup() {
    createImageElement();
    addEventListeners();
    startAutoSlide();
    updateUI();
}

function createImageElement() {
    img = document.createElement("img");
    img.src = images[index];
    imageBox.appendChild(img);
}

function addEventListeners() {
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);

    dots.forEach((dot, number) => {
        dot.addEventListener("click", () => {
            index = number;
            updateUI();
        })
    })
}

function showNextImage() {
    index = (index + 1) % images.length;
    updateUI();
}

function showPrevImage() {
    index = (index - 1 + images.length) % images.length;
    updateUI()
}

function startAutoSlide() {
    setInterval(() => {
        showNextImage();
    }, 5000)
}

function updateUI() {
    img.src = images[index];
    updateDots();
}

function updateDots() {
    dots.forEach((dot, number) => {
        dot.classList.toggle("active", number === index)
    })
}
