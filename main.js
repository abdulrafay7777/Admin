

/*===== MENU SHOW =====*/ 
let showMenu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

showMenu.onclick = () => {
    showMenu.classList.toggle("fa-x");
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    showMenu.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// ScrollReveal configuration
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Reveal elements with ScrollReveal
ScrollReveal().reveal('.home-container, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-img, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// ===== typed.js =======
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'SEO Expert'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

