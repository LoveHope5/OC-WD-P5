
//DEFINITION OR DECLARATION OF A FUNCTION
const displayProducts = () => {
    
    //AJAX
    let xhttp = new XMLHttpRequest();

    //RECIEVING FROM THE SERVER
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

           let results = JSON.parse(this.responseText)  ;
            
           let content = '';
            //LOOP through the Array
           results.forEach(record => {

             content  +=`<div class="row">
                <img  height="250" src="${record.imageUrl}" alt="img">
                <div class="wrap">
                    <button>
                        <h3>
                            <a href="single-product.html?id=${record._id}">${record.name}</a>
                        </h3>
                    </button>
                    <button>
                      
                        <h3>$${record.price}</h3>
                    </button>
                    <button>
                    <a href="single-product.html?id=${record._id}">
                        <i class="fa fa-shopping-cart fa-2x"></i>
                    </a>
                    </button>
                </div>
            </div>` ;
               
           });

           //DOM 
           let htmlProductListDiv = document.getElementById("productLists");  //DOM
           htmlProductListDiv.innerHTML = content;

           
        }
    };

    //SENDING
    let url ="http://localhost:3000/api/teddies/";
    xhttp.open("GET", url, true);
    xhttp.send();

     
    

}

//CALL THE FUNCTION
displayProducts();


 




