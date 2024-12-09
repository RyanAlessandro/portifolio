
/* ==== Turns the menu hamburguer into a x ====*/
const menuHambuguer = document.querySelector('.menu-hamburguer')
menuHambuguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHambuguer.classList.toggle('change');

    if (menuHambuguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}