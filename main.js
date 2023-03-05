const navEmail = document.querySelector('.navbar-right');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toogleDescktopMenu);

function toogleDescktopMenu() {
    desktopMenu.classList.toggle('inactive')
}