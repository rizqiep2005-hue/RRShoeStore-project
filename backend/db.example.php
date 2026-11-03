<?php

//Koneksi database ke rr_shoe_project

//variabel berisi informasi mengenai database
$host = "localhost";
$username = "root";
$password = "";
$database = "nama_database";


$conn = new mysqli($host, $username, $password, $database); //variabel conn bertugas mengirimkan query ke database


if ($conn-> connect_error) {
    die("koneksi database gagal"); //mengecek jika koneksi query gagal maka akan muncul "koneksi database gagal"
}

$conn-> set_charset("utf8mb4");
?>