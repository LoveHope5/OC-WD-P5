//RETRIEVE THE ID
let url_string = window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");

//the current product
let product ;


//DEFINE THE AJAX FUNCTION
const displaySingleProduct = (productId) => {

   //AJAX
   let xhttp = new XMLHttpRequest();

   //RETRIEVIENG
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

         let singleProduct = JSON.parse(this.responseText);


         //retrieve color options
         let options = ``;
         singleProduct.colors.forEach((item) => {
            options += ` <input type="radio" name="color">${item}`;
         });


         let content = ` <div class="product-image">
      <img  height="200" src="${singleProduct.imageUrl}" alt="img">
   </div>
   <div class="product-description">
      <h2 class="title">${singleProduct.name} - $${singleProduct.price / 100}</h2>

      <p class="description">
      ${singleProduct.description}
      </p>

      <div class="details">
          <div class="options">
            ${options}
          </div>
         
      </div>
  </div>`;

         // UPDATE THE HTML DOM 
         let productDiv = document.getElementById(`single-product`);
         productDiv.innerHTML = content;


         //STORE the product in variable
         product = singleProduct;
      }

   }


   //SENDING
   let _url = "http://localhost:3000/api/teddies/" + productId;
   xhttp.open("GET", _url, true);

   xhttp.send();



}



//Call the ajax function
displaySingleProduct(id)





//add to cart 
const addToCart = (product) => {
   //setting the quantity
   product.quantity = 0;
   
   //Step 1- retrieve product array from localstorage
   let productList = [];
   productList = JSON.parse( localStorage.getItem('listOfProducts'));

   //if exist 

   if (productList != null) {

      let index = productList.findIndex(o => o._id == product._id);
      if (index != -1) {
         //increase the quantity in the cart
         //product is in array increase quantity
         productList[index].quantity += 1;
      } else {
         //product is not add product
         product.quantity =1;
         productList.push(product);
      }

   }else{
      productList = [];
      product.quantity =1;
      productList.push(product);
   }
   localStorage.setItem('listOfProducts', JSON.stringify(productList))
}


let addToCartButton =  document.getElementById("add-button");

addToCartButton.addEventListener('click',() =>{
 
   addToCart(product);
});

