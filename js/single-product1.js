//Retrieve the id 
let url_string =  window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");



//DEFINE THE AJAX FUNCTION
const displaySingleProduct = (productId) =>{
  
     //AJAX
     let xhttp = new XMLHttpRequest();
  
     //RETRIEVING
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let singleProduct = JSON.parse(this.responseText)  ;


            //retrieve colors options
            let options ='';
            singleProduct.colors.forEach( ( item )=>{
                options += `<input type="radio" name="${item}">${item}`;
            });

            
            let content = `  <div class="product-image">
                    <img height="200" src="${singleProduct.imageUrl}" alt="img">
                </div>
                <div class="product-description">
                    <h2 class="title">${singleProduct.name} - $${singleProduct.price /100}</h2>

                    <p class="description">
                    ${singleProduct.description}
                    </p>

                    <div class="details">
                        <div class="options">
                            ${options}
                        </div>
                        <div class="add">
                            <a href="cart.html">Add to Cart</a>
                        </div>
                    </div>
                </div>`;

                //UPADE THE HTML DOM
                let productDiv = document.getElementById('single-product');
                productDiv.innerHTML =content ;

        }

     }


      //SENDING
     let _url ="http://localhost:3000/api/teddies/" + productId ;
     xhttp.open("GET", _url, true);
  
    xhttp.send();



}






//CALL the ajax function
displaySingleProduct(id);