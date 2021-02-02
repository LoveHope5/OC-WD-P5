

//DISPLAY  CART
const displayCart = () => {

    //retrieve item from the localstorage into an array
    let itemsInCart = JSON.parse(localStorage.getItem("listOfProducts")) ;
    //loop through the array and add data to the DOM object
    let items = "";
    let total =0 ;
    if(itemsInCart != null){

        itemsInCart.forEach( (item,index) =>{
     
            items +=`<tr>
            <td>${index+1}</td>
            <td><img height="40" src="${item.imageUrl}"></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>${(item.price /100) * item.quantity}</td>
            <td><a href="#"  onclick="deleteItem(${index});" id="delete">Delete</a></td>
            </tr>`;

            total += (item.price /100) * item.quantity;

        });

        //MODIFYING THE DOM ELEMENT
        let cartTable = document.getElementById("cart-items");
        cartTable.innerHTML = items;
        let totalSpan = document.getElementById("total");
        totalSpan.innerHTML = total;
    }
     
}                                                                   


displayCart();



//Delete an item from the cart through the local Storage
const deleteItem = (index) =>{
   
    let itemsInCart = JSON.parse(localStorage.getItem("listOfProducts")) ;
    itemsInCart.splice(index,1);
    localStorage.setItem('listOfProducts',JSON.stringify(itemsInCart));
    displayCart();

}

const validate = (fname,lname,city,email,address) =>{

    if(fname =="" || lname =="" || city =="" || email=="" || address==""){

        return false;

    }else{
        return true;
    }

}


const placeOrder = () =>{

    //retrieve contact details
     let firstName = document.getElementById("firstName").value ;
     let lastName = document.getElementById("lastName").value ;
     let email = document.getElementById("email").value ;
     let city = document.getElementById("city").value ;
     let address = document.getElementById("address").value ;

     if(validate(firstName,lastName,city,email,address)){

        alert("validation is correct")
         //retrieve product ids



        //merge the two into and object



        //execute AJAX post and redirect to confirmation page



     }else{

        alert("please make sure none of the field are empty!");

     }

   


}



let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();

   // alert("Hey the submit button is working !!");

   placeOrder();
});



