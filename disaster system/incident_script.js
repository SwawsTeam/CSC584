// Mobile Navigation Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle Navigation Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
