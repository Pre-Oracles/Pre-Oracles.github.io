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
        window.location.href = './main-section/';
    
    }
    slides[currentSlide].classList.remove('active');
    slides[slideIndex].classList.add('active');
    currentSlide = slideIndex;
}

function updateAgeCounter() {
    // Set your birthdate here (YYYY-MM-DDTHH:MM:SSZ in UTC)
    const birthDate = new Date('2007-03-02T12:21:11Z');
    const now = new Date();
    let diff = Math.floor((now - birthDate) / 1000);

    const years = Math.floor(diff / (365.25 * 24 * 60 * 60));
    diff -= years * 365.25 * 24 * 60 * 60;

    const days = Math.floor(diff / (24 * 60 * 60));
    diff -= days * 24 * 60 * 60;

    const hours = Math.floor(diff / (60 * 60));
    diff -= hours * 60 * 60;

    const minutes = Math.floor(diff / 60);
    const seconds = diff - minutes * 60;

    const ageSpan = document.getElementById('age');
    if (ageSpan) {
        ageSpan.textContent = `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
}
setInterval(updateAgeCounter, 1000);
updateAgeCounter();