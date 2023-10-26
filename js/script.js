const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
});

// Set the initial slide to be active
slides[currentSlide].classList.add('active');


