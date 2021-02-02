

const addToCart = (teddy) => {

    //Add the quantity property
    teddy.quanity = 1;
    //Verify that the local storage product array exist
    let productArray = JSON.parse(localStorage.getItem('productInCart'));

    //if exist
    if(productArray.length ==0)
    {
        productArray.push(teddy)
    }else{
        //from the array check if this product is already added 
        let index = productArray.findIndex(o => o._id == teddy._id);

       
        //product not added add the product
        if(index != -1){
            //product is added increase quantity
           productArray[index].quanity +=1 ;
        }else{
            //product is not added before then add the product
            productArray.push(teddy)
        }

    }

    //save the array in the local storage
    localStorage.setItem('productInCart',JSON.stringify(productArray))

}

let addToCartBtn = document.getElementById('addToCartButton');
addToCart.addEventListener('Click', ()=>{

    addToCart(teddy)
})