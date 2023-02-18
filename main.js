// Recordar que el query selector permite seleccionar clases, ids y elementos como en css
const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.nav-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-close')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoping-cart-container');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');

// Toggle significa intencambiar
// Llama a la función que dentro ejecuta otra funcion classlist.toggle que quita lo quie sea que tenga la clase inactive cuando se haga el event listener
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    // Si tengo el aside abierto y deseo abrir el menu de desktop, el condicional permite que se cierre automaticamente el aside 

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    // Si tengo el aside abierto y deseo abrir el menu de mobile, el condicional permite que se cierre automaticamente el aside 

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // Si tengo el menu mobile abierto y deseo abrir el aside, el condicional permite que se cierre automaticamente el menu mobile 

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');

    }

    // Si tengo el product detail abierto y deseo abrir el shopping cart, el condicional permite que se cierre automaticamente el product detail
 
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive')


}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
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

       
// <div class="cards-container"> 
//  <div class="product-card">
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
// </div> 

// Voy a crear el codigo html que había realizado en otras clases (el que esta encima) de paso a paso con javascript

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // product ={name, price, image}
        productImg.setAttribute('src', product.image);
        // Para hacer un addeventlistener NO se ponen los dos parentesis de la funcion (genera error)
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        // product ={name, price, image}
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        // product ={name, price, image}
        productName.innerText = '$' + product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        // Acá se va a meter cada cosa donde debe ir habiendo creado todas las etiquetas
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);