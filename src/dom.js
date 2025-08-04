import Image1 from "./img/Image 1.jpeg"
import Image2 from "./img/Image 2.jpg"
import Image3 from "./img/Image 3.avif"

const imageBox = document.querySelector(".imageBox");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const dots = document.querySelectorAll(".dot");


export function setup() {
    const images = [Image1, Image2, Image3]
    let index = 0
    const img = document.createElement("img");
    img.src = Image1;
    imageBox.appendChild(img);
    nextBtn.addEventListener("click", () => {
        if (index === images.length - 1) {
            index = 0
        } else {
            index++;
        }
        img.src = images[index];
        changeDots(index)
    })
    prevBtn.addEventListener("click", () => {
        if (index === 0) {
            index = images.length - 1
        } else {
            index--;
        }
        img.src = images[index];
        changeDots(index)
    })
    dots.forEach((dot, number) => {
        dot.addEventListener("click", () => {
            index = number
            img.src = images[index];
            changeDots(index)
        })
    })

    // Auto-slide every 5 seconds
    setInterval(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        changeDots();
    }, 5000)
}

function changeDots(index) {
    dots.forEach((dot, number) => {
    if (number === index) {
        dot.classList.add("active");
    } else {
        dot.classList.remove("active")
    }
    })
}
