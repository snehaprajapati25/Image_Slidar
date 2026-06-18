const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide-image");
const dotsContainer = document.querySelector(".navigation-dots");

let currentSlide = 0;

//show firstImg
slides[currentSlide].classList.add("active");

// Create dots according to number of images
slides.forEach(() => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateButtons() {
    prevBtn.disabled = currentSlide === 0; 
    prevBtn.style.pointerEvents = "none";

    if (currentSlide === 0) {
        prevBtn.style.opacity = 0.5;
        prevBtn.style.pointerEvents = "none";
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto";
    }

    if (currentSlide === slides.length - 1) {
        nextBtn.style.opacity = "0.5";
        nextBtn.style.pointerEvents = "none";
    } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
    }
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    slides[index].classList.add('active');

    // Update dots
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");

    updateButtons()
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
})

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
})

// Runs when page loads
showSlide(currentSlide);