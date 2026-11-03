//Take and Read Product

const selectedProduct = localStorage.getItem("selectedProduct"); // mengambil data produk yang masih berupa string di file local storage


const product = JSON.parse(selectedProduct); //mengubah format string menjadi object


const productname = document.getElementById("product-name");
const productprice = document.getElementById("product-price");
const productimage = document.getElementById("product-image");

productname.textContent = product.name;
productprice.textContent = product.price;
productimage.src = product.img;


//Product Select and Quantity
let newQuantity = 1;
const quantity = document.getElementById("quantity");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const PriceTotalProduct = document.getElementById("PriceTotalProduct");
const Ongkir = document.getElementById("Ongkir");
const TotalPrice = document.getElementById ("TotalPrice");

if(product){
    quantity.textContent = newQuantity;
}


function updateTotal(){
    const currentquantity = Number(quantity.textContent)
    const totalproduct = price * currentquantity;

    PriceTotalProduct.textContent = "Harga Total Produk : Rp." + totalproduct;
    
    const currentprice = totalproduct + 15000;
    TotalPrice.textContent = "Total : Rp." + currentprice;
}

function increaseBtn(){
    const newIncrease = Number(quantity.textContent) + 1;
    quantity.textContent = newIncrease;

    updateTotal()
}

function decreaseBtn(){
    const newDecrease = Number(quantity.textContent) - 1;
    quantity.textContent = newDecrease;

    updateTotal()
}


increase.addEventListener("click", increaseBtn);
decrease.addEventListener("click", decreaseBtn);


const price = Number(product.price.replace("Rp", "").replaceAll(".",""));



PriceTotalProduct.textContent = "Harga Total Produk : Rp." + price;
Ongkir.textContent = "Ongkir : Rp.15000";

const currentprice = price + 15000;
TotalPrice.textContent = "Total : Rp." + currentprice;