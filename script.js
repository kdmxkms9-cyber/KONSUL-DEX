// Data Slide (Ganti path gambar background & gambar tengah sesuai kebutuhan)
// Data Slide + Deskripsi Teks
const slides = [
    {
        bg: 'image/BG1 (2).jpg',
        centerImg: 'image/foodbattle-removebg-preview.png',
        desc: 'isajdianindsaindianjdnsjkandnaindsiandisnakdnikansidnianniwdninadnsinda'
    },
    {
        bg: 'image/BG2 (2).jpg', // Ganti dengan foto latar kedua kamu
        centerImg: 'image/TMBB-removebg-preview.png',
        desc: 'Deskripsi lengkap tentang section TMBB...'
    },
    {
        bg: 'image/BG3 (1).jpg', // Ganti dengan foto latar ketiga kamu
        centerImg: 'image/KI-removebg-preview.png',
        desc: 'Deskripsi lengkap tentang section KI...'
    },
    {
        bg: 'image/BG4 (1).jpg', // Ganti dengan foto latar keempat kamu
        centerImg: 'image/KU-removebg-preview.png',
        desc: 'Deskripsi lengkap tentang section KU...'
    }
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero-slider');
const centerImage = document.getElementById('centerImage');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Elemen Modal
const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');

// Fungsi Mengubah Slide
function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    centerImage.style.opacity = '0';
    
    setTimeout(() => {
        heroSection.style.backgroundImage = `url('${slides[currentIndex].bg}')`;
        centerImage.src = slides[currentIndex].centerImg;
        centerImage.style.opacity = '1';
    }, 300);

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Fitur Buka Modal saat Logo Tengah Diklik
centerImage.addEventListener('click', () => {
    modalImage.src = slides[currentIndex].centerImg;
    modalText.textContent = slides[currentIndex].desc;
    modalOverlay.classList.add('active');
});

// Fitur Tutup Modal
modalClose.addEventListener('click', closeModal);

// Tutup modal jika area luar kartu diklik
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

function closeModal() {
    modalOverlay.classList.remove('active');
}

// Event Tombol Next / Prev
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

// Auto Slide 10 Detik
let autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 10000);

function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000);
}