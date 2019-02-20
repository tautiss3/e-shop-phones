let userNavbarCart;
let itemsCount = 0;
let userProducts = [];

window.onload = function(){
    userNavbarCart = document.querySelector('.cart-counter');
    if(window.localStorage.getItem('cart')){
        userProducts = JSON.parse(window.localStorage.getItem('cart'));
    }

    if(document.querySelector(".user-cart")){
        if(userProducts.length == 0){
            document.querySelector(".user-cart").innerHTML = "<p>Krepselis tuscias</p>"  
        }else{
            for(let i = 0; i< userProducts.length; i++){
                document.querySelector(".user-cart").innerHTML += 
                `<div class="cart-product">
                    <div class='title'>${userProducts[i].title}</div>                
                    <div class='title'>${userProducts[i].price}</div>
                    <div><button onclick="removeFromCart(this, ${i})">remove</button></div>
                </div>
               `
            }
        }
    }

    userNavbarCart.innerText = userProducts.length;
}
let removeFromCart = (element, index) =>{
    userProducts.splice(index,1);
    element.parentElement.parentElement.remove();
    window.localStorage.setItem('cart', JSON.stringify(userProducts));
}

let addToCart = (product) => {
    let productFromBrowser = {
        "title": product.title,
        "price": product.price,
        "size": ""
    }
    userProducts.push(productFromBrowser);
    window.localStorage.setItem('cart', JSON.stringify(userProducts));
    userNavbarCart.innerText = userProducts.length;

}