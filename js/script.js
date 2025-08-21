const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowDown' ) {
        showSlide(currentSlide + 1);
    }
});

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
    if (slideIndex >= slides.length) {
        location.href = './main-section/';
    }
    else if (slideIndex >= 0){
        slides[currentSlide].classList.remove('active');
        slides[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }
}

function updateAgeCounter() {
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

let currentImageIndex = 0;
const totalImages = 5;

function rotateGallery(direction) {
    const items = document.querySelectorAll('.gallery-item');
    
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    
    items.forEach(item => {
        item.className = 'gallery-item';
    });
    
    for (let i = 0; i < totalImages; i++) {
        const item = items[i];
        const relativePosition = (i - currentImageIndex + totalImages) % totalImages;
        
        if (relativePosition === 0) {
            item.classList.add('center');
        } else if (relativePosition === 1) {
            item.classList.add('bottom');
        } else if (relativePosition === totalImages - 1) {
            item.classList.add('top');
        } else if (relativePosition === totalImages - 2) {
            item.classList.add('hidden');
        } else {
            item.classList.add('hidden-bottom');
        }
    }
}

setInterval(() => {
    rotateGallery(-1);
}, 4000);


setInterval(updateAgeCounter, 1000);
updateAgeCounter();