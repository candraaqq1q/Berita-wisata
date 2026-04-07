// Sticky Navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Auto-suggestion Sederhana
const suggestionsData = ["Pantai Kuta", "Pantai Tanjung Aan", "Sirkuit Mandalika", "Desa Sade", "Bukit Merese", "Gili Trawangan"];
const searchInput = document.getElementById('dest-input');
const suggBox = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
    let input = searchInput.value;
    suggBox.innerHTML = '';
    if (input.length > 0) {
        const filtered = suggestionsData.filter(item => 
            item.toLowerCase().includes(input.toLowerCase())
        );
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = item;
            div.onclick = () => {
                searchInput.value = item;
                suggBox.innerHTML = '';
            };
            suggBox.appendChild(div);
        });
    }
});

// Scroll Reveal Animation
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// Smooth Scrolling untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (Sederhana)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});