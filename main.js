// Recordar que el query selector permite seleccionar clases, ids y elementos como en css
const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.nav-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

// Toggle significa intencambiar
// Llama a la función que dentro ejecuta otra funcion classlist.toggle que quita lo quie sea que tenga la clase inactive cuando se haga el event listener
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    // Si tengo el aside abierto y deseo abrir el menu de desktop, el condicional permite que se cierre automaticamente el aside 

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    // Si tengo el aside abierto y deseo abrir el menu de mobile, el condicional permite que se cierre automaticamente el aside 

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // Si tengo el menu mobile abierto y deseo abrir el aside, el condicional permite que se cierre automaticamente el menu mobile 

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}