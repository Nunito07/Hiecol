document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('#close-icon');
    const nav = document.querySelector('nav');
    const body = document.body;
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
        nav.classList.toggle('active');
        body.classList.toggle('menu-active');
    }

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});
