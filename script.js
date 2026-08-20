// Data Slide (Ganti path gambar background & gambar tengah sesuai kebutuhan)
const slides = [
    {
        bg: 'image/BG1 (2).jpg',
        centerImg: 'image/foodbattle-removebg-preview.png'
    },
    {
        bg: 'image/BG2 (2).jpg', // Ganti dengan foto latar kedua kamu
        centerImg: 'image/TMBB-removebg-preview.png'
    },
    {
        bg: 'image/BG3 (1).jpg', // Ganti dengan foto latar ketiga kamu
        centerImg: 'image/KI-removebg-preview.png'
    },
    {
        bg: 'image/BG4 (1).jpg', // Ganti dengan foto latar keempat kamu
        centerImg: 'image/KU-removebg-preview.png'
    }
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero-slider');
const centerImage = document.getElementById('centerImage');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Fungsi Mengubah Slide
function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Efek fadeout halus untuk gambar tengah
    centerImage.style.opacity = '0';
    
    setTimeout(() => {
        // Ganti Gambar Background & Gambar Tengah
        heroSection.style.backgroundImage = `url('${slides[currentIndex].bg}')`;
        centerImage.src = slides[currentIndex].centerImg;
        centerImage.style.opacity = '1';
    }, 300);

    // Update Tampilan Dots Indicator
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Fungsi Manual dari Tombol
function currentSlide(index) {
    showSlide(index);
    resetTimer();
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetTimer();
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetTimer();
});

// Timer Pergantian Otomatis Setiap 10 Detik (10000 ms)
let autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 10000);

// Reset timer jika pengguna menekan tombol manual agar tidak langsung berpindah cepat
function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000);
}