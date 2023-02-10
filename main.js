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

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

// for product of me entrega cada elemento del array con nombre, for product in me entrega el indice de cada elemento del array

       
// <!-- <div class="cards-container"> 
// <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
//     <div class="product-info">
//         <div>
//             <p>$120,00</p>
//             <p>Bike</p>                        
//         </div>
        
//         <figure>
//             <img src="./Icons/bt_add_to_cart.svg" alt="">
//         </figure>
//     </div>
// </div>
// </div> -->

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    // product ={name, price, image}
    img.setAttribute('src', product.image);
}