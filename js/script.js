const slides = document.querySelectorAll('.slide');
let currentSlide = 0;



document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
});


let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX) {
        // Swipe left (move to next slide)
        showSlide(currentSlide + 1);
    }

    if (touchendX > touchstartX) {
        // Swipe right (move to previous slide)
        showSlide(currentSlide - 1);
    }
}

slides[currentSlide].classList.add('active');

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}