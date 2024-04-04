const slides = document.querySelectorAll('.slide');
let currentSlide = 0;



document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowDown' ) {
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
    if (slideIndex >= slides.length) {
        location.href = 'https://pre-oracles.github.io/mainPages.html';
    
    }
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}