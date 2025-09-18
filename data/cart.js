export let cart =JSON.parse(localStorage.getItem('cart')) || [ 
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity :1
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity : 1
    }
];



export function saveLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    
    let matchingItem;
        
    cart.forEach((Item) => {
        if(productId === Item.id){
            matchingItem = Item;
        }
    });
    
    if(matchingItem){
    matchingItem.quantity += 1;
    }
    else{
        cart.push({
        id : productId,
        quantity : 1
    });
    console.log(cart);
    }
    saveLocalStorage();
}


export function updateCartQuantity(){
      let cartQuantity = 0;

       cart.forEach(item => {
        cartQuantity += item.quantity;
       });
       
       return cartQuantity;
}


export function removeFromCart(productId){
    const newCart = [];
    cart.forEach(item => {
        if(item.id !== productId){
            newCart.push(item);
        }
    });
    cart = newCart;

    saveLocalStorage();
}


