const img = function () {
    // Add class img-dark on the main manu img to get dark effect
    const el = document.querySelectorAll('.grid-item');
    el.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.childNodes[1].classList.add('img-dark');
            item.childNodes[3].children[1].classList.add('visible');
            // item.childNodes[3].children[2].classList.add('visible');
        })
        item.addEventListener('mouseout', () => {
            item.childNodes[1].classList.remove('img-dark');
            item.childNodes[3].children[1].classList.remove('visible');
            // item.childNodes[3].children[2].classList.remove('visible');
        });
    });
}
img();


const nav = function () {
    // toogle menu for navbar
    const toggleMenu = document.querySelector('.toggle-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelector('.navbar-links');
    const navWrapper = document.querySelector('.wrapper');

    toggleMenu.addEventListener('click', () => {
        navLinks.style.top = '0';
        navWrapper.classList.add('links-translate');

    });
    closeMenu.addEventListener('click', () => {
        navLinks.style.top = '-100vh';
        navWrapper.classList.remove('links-translate');
    });
}
nav();



const con = function () {
    // Display contact card
    const contact = document.querySelector('#contact');
    document.querySelector('.display-contact').addEventListener('click', (e) => {
        contact.style.display = 'flex';
        e.preventDefault();
    });
    document.querySelector('.contact-close-menu').addEventListener('click', (e) => {
        contact.style.display = 'none';
        e.preventDefault();
    });
}
con();