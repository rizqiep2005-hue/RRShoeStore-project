const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const buttonCard1 = document.getElementById("buttonCard1");
const buttonCard2 = document.getElementById("buttonCard2");
const buttonCard3 = document.getElementById("buttonCard3");
const buttonCard4 = document.getElementById("buttonCard4");
const buttonCard5 = document.getElementById("buttonCard5");


searchButton.addEventListener("click", function (){

    const keyword = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(function (card) {
         const name = card.querySelector("h3").textContent.toLowerCase();


         if (name.includes(keyword)){
            card.style.display = "";
         }

         else{
            card.style.display = "none";
         }
    });

});

buttonCard1.addEventListener("click", event => {
    const productCard1 = document.querySelector(".product-card1"); //mengambil smua data produk card 1
    const productName = productCard1.querySelector("h3").textContent; //mengambil nama produk dan menampilkan nama produk di halaman checkout
    const productPrice = productCard1.querySelector("p").textContent; //mengambil harga produk dan menampilkan harga produk di halaman checkout
    const productImg = productCard1.querySelector("img").src; //mengambil gambar produk dan menampilkan gambar di halaman checkout

    localStorage.setItem("selectedProduct", JSON.stringify({
          name: productName,
          price: productPrice,
          img : productImg
    }))

    window.location.href = "ChckOtPg.html";
})



buttonCard2.addEventListener("click", event => {
    const productCard2 = document.querySelector(".product-card2"); //mengambil smua data produk card 1
    const productName = productCard2.querySelector("h3").textContent; //mengambil nama produk dan menampilkan nama produk di halaman checkout
    const productPrice = productCard2.querySelector("p").textContent; //mengambil harga produk dan menampilkan harga produk di halaman checkout
    const productImg = productCard2.querySelector("img").src; //mengambil gambar produk dan menampilkan gambar di halaman checkout

    localStorage.setItem("selectedProduct", JSON.stringify({
          name: productName,
          price: productPrice,
          img : productImg
    }))

    window.location.href = "ChckOtPg.html";
})



buttonCard3.addEventListener("click", event => {
    const productCard3 = document.querySelector(".product-card3"); //mengambil smua data produk card 1
    const productName = productCard3.querySelector("h3").textContent; //mengambil nama produk dan menampilkan nama produk di halaman checkout
    const productPrice = productCard3.querySelector("p").textContent; //mengambil harga produk dan menampilkan harga produk di halaman checkout
    const productImg = productCard3.querySelector("img").src; //mengambil gambar produk dan menampilkan gambar di halaman checkout

    localStorage.setItem("selectedProduct", JSON.stringify({
          name: productName,
          price: productPrice,
          img : productImg
    }))

    window.location.href = "ChckOtPg.html";
})


buttonCard4.addEventListener("click", event => {
    const productCard4 = document.querySelector(".product-card4"); //mengambil smua data produk card 1
    const productName = productCard4.querySelector("h3").textContent; //mengambil nama produk dan menampilkan nama produk di halaman checkout
    const productPrice = productCard4.querySelector("p").textContent; //mengambil harga produk dan menampilkan harga produk di halaman checkout
    const productImg = productCard4.querySelector("img").src; //mengambil gambar produk dan menampilkan gambar di halaman checkout

    localStorage.setItem("selectedProduct", JSON.stringify({
          name: productName,
          price: productPrice,
          img : productImg
    }))

    window.location.href = "ChckOtPg.html";
})

buttonCard5.addEventListener("click", event => {
    const productCard5 = document.querySelector(".product-card5"); //mengambil smua data produk card 1
    const productName = productCard5.querySelector("h3").textContent; //mengambil nama produk dan menampilkan nama produk di halaman checkout
    const productPrice = productCard5.querySelector("p").textContent; //mengambil harga produk dan menampilkan harga produk di halaman checkout
    const productImg = productCard5.querySelector("img").src; //mengambil gambar produk dan menampilkan gambar di halaman checkout

    localStorage.setItem("selectedProduct", JSON.stringify({
          name: productName,
          price: productPrice,
          img : productImg
    }))

    window.location.href = "ChckOtPg.html";
})