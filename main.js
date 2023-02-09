// Recordar que el query selector permite seleccionar clases, ids y elementos como en css
const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle significa intencambiar
// Llama a la función que dentro ejecuta otra funcion classlist.toggle que quita lo quie sea que tenga la clase inactive cuando se haga el event listener
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}