const slides = document.querySelectorAll('.slide');
let currentSlide = 0;





let touchstartY = 0;
let touchendY = 0;

document.addEventListener('touchstart', (e) => {
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchstart', (e) => {
    if (isNavigating) return; // Ignore touch events while navigating
    isNavigating = true;

    const touchstartY = e.changedTouches[0].screenY;

    document.addEventListener('touchend', function touchEndHandler(e) {
        document.removeEventListener('touchend', touchEndHandler);

        const touchendY = e.changedTouches[0].screenY;

        // Determine the direction of the tap
        const deltaY = touchendY - touchstartY;

        if (deltaY < -50 && currentSlide > 0) {
            // Swipe up (move to previous slide)
            showSlide(currentSlide - 1);
        } else if (deltaY > 50 && currentSlide < slides.length - 1) {
            // Swipe down (move to next slide)
            showSlide(currentSlide + 1);
        }

        isNavigating = false; // Reset the navigation flag
    });
});

slides[currentSlide].classList.add('active');

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}