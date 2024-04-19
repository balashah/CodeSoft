const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        
        event.preventDefault();

        
        const targetId = link.getAttribute('href');

       
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

       
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});