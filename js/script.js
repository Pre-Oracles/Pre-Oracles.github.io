const slides = document.querySelectorAll('.slide');
let currentSlide = 0;




let touchstartY = 0;
let touchendY = 0;

document.addEventListener('touchstart', (e) => {
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchendY = e.changedTouches[0].screenY;
    handleGesture();
});

function handleGesture() {
    if (touchendY < touchstartY) {
        
        showSlide(currentSlide + 1);
    }

    if (touchendY > touchstartY) {
        
        showSlide(currentSlide - 1);
    }
}

slides[currentSlide].classList.add('active');

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}