let demo = document.querySelector("#demo");

let prodotti = [];

const URL = "https://dummyjson.com/products";

fetch(URL)
    .then(products=>{
        //console.log(products);
        return products.json();
    }).then(response =>{
        console.log(response);

        prodotti = response.products;

        response.products.forEach(product => {
            demo.innerHTML += creaRigaProduct(product.thumbnail, product.id, product.title, product.description,product.price); 
        });

    })
    .finally(()=>{
        console.log("finito");
        
    })
   
    function creaRigaProduct(thumbnail, id, title, description, price){
        let riga = `<div class="item">
        <img src=${thumbnail}> <br>
        ID: ${id} - 
        <strong> ${title} </strong> <br>
        ${description} <br>
        Prezzo: <strong>€ ${price}</strong> <br>
        </div>`;
        return riga;
    }