let btnAdd = document.querySelector("button")
let table = document.querySelector("table")
let nameInput = document.querySelector("#name")
let priceInput = document.querySelector("#price")
let total = document.querySelector("#total")
let grandtotal = 0;
btnAdd.addEventListener('click', function() {
    //let ans = []
    let name = nameInput.value;
    let price = priceInput.value;
   grandtotal+=parseInt(price);
   total.innerText = grandtotal
     let template =`
                <tr>
                     <td>${name}</td>
                     <td>${price}</td>
                    
                </tr>`;
             
        table.innerHTML += template;
       
        
})


