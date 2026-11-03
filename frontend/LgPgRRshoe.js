const loginForm = document.getElementById("loginform"); //mengambil elemen html <form> berdasarkan id


loginForm.addEventListener("submit", async function(event) { //event listener ketika submit diklik maka akan menjalankan fungsi
                                                             //fungsi async karena disini ada await yaitu menunggu proses kode lain berjalan terlebih dahulu
       event.preventDefault(); //mencegah halaman refresh pada form

       const email = document.getElementById("email").value;
       const password = document.getElementById("password").value;
    try { //kode try sebagai pencegahan ketika server php terjadi error atay koneksi terputus
       const response = await fetch("../backend/login.php",{ //menunggu proses koneksi database sebelum mengeksekusi pengiriman data
            method: "POST", //pengiriman data melalu metode POST
            headers: {
                "Content-Type": "application/json" //memberitahu server bahwa isinya JSON
            },
            body: JSON.stringify({  //JSON string mengubah objek JS menjadi JSON tipe string
                email: email,
                password: password
            })

       });

       const result = await response.json(); //menunggu respon server php menjadi objek JS 

       document.getElementById("message").textContent = result.message; //menampilkan pesan login status berhasil dari login PHP

       if (result.status === "success"){ //jika status sukses maka langsung pindah halaman sesuai isi dari JSON encode PHP
        window.location.href = result.redirect;
       }
    } 
    
    catch (error) { //menangkap error jika terjadi gagal koneksi pada blok try
        document.getElementById("message").textContent = "terjadi kesalahan, coba lagi"; //menampilkan pesan error ke browser
        console.error("Detail error", error); //pesan error di console
    }
});