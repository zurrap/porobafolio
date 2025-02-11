const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

// Toggle Menu
navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Close Menu
navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.navmenu a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});