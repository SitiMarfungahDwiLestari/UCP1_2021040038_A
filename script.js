function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning, Siti";
    } else if (hour < 18) {
        return "Good Afternoon, Siti";
    } else {
        return "Good Evening, Siti";
    }
}

function formatDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
}

function updateDateTime() {
    document.getElementById('greeting').textContent = getGreeting();
    document.getElementById('date').textContent = formatDate();
    document.getElementById('time').textContent = new Date().toLocaleTimeString();
}

setInterval(updateDateTime, 1000);

const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        if (i === index) {
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
}

function slideCarousel() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(slideCarousel, 3000);
