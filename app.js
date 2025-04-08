const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let setIntervalId = null;

document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
})

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('active');
        slides[slideIndex].querySelector('.slide-caption').classList.add('show');
        setIntervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.querySelector('.slide-caption').classList.remove('show');
    });

    slides[slideIndex].classList.add('active');
    setTimeout( () => {
        slides[slideIndex].querySelector('.slide-caption').classList.add('show');
    }, 500);
}

function prevSlide() {
    slideIndex--;
    clearInterval(setIntervalId);
    showSlide(slideIndex);
    initializeSlider();
}

function nextSlide() {
    slideIndex++;
    clearInterval(setIntervalId);
    showSlide(slideIndex);
    initializeSlider();
}