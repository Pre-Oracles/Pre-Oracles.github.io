const slides = document.querySelectorAll('.slide');
let currentSlide = 0;



document.addEventListener('click', function handleClick(event) {
    if (isNavigating) return; // Ignore clicks while navigating
    isNavigating = true;

    setTimeout(() => {
        const tapY = event.clientY;

        if (tapY < window.innerHeight / 2 && currentSlide > 0) {
            // Tap on the upper half of the screen (move to previous slide)
            showSlide(currentSlide - 1);
        } else if (tapY >= window.innerHeight / 2 && currentSlide < slides.length - 1) {
            // Tap on the lower half of the screen (move to next slide)
            showSlide(currentSlide + 1);
        }

        isNavigating = false; // Reset the navigation flag
    }, 300); // Adjust the timeout as needed to control the delay
});



slides[currentSlide].classList.add('active');

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}