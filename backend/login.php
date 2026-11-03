<?php
 session_start(); //memulai session login dan menyimpan user yang sudah login di antara halaman
 header("Content-Type: application/json"); //memberitahu browser bahwa balasan ini berupa JSON encode

 require_once "db.php"; //memasukkan file db.php ke login.php mengkoneksikan database ke login

 $data = json_decode(file_get_contents("php://input"), true); //membuka JSON dan membaca isi body dari JS stringfy


 //objek array yang akan dikirim ke database
 $email = $data["email"] ?? ""; //jika tidak ada, default string kosong
 $password = $data["password"] ?? "";


 $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE email = ?"); //mengirim query untuk mengecek id nama dan password
 $stmt->bind_param("s", $email); //pengisian data asli di halaman login
 $stmt->execute(); //mengeksekusi pengisian data
 $result = $stmt->get_result(); //mengambil seluruh hasil seluruh query sebagai objek hasil
 $user = $result->fetch_assoc(); //mengambil satu baris dari hasil get result dalam bentuk array assosiatif user



 if($user && password_verify($password, $user["password"])){
  $_SESSION["user_id"] = $user["id"]; //jika benar maka data user akan disimpan ke session
  $_SESSION["username"] = $user["username"];


       echo json_encode([ //mengirim status berhasil login dengan JSON encode ke login.JS dalam bentuk teks JSON dan membuka ke halaman selanjutnya
        "status" => "success",
        "message" => "Login berhasil",
        "redirect" => "MainPgRrShoe.html"
       ]);

 } else {
       echo json_encode([ //status ke JS gagal
            "status" => "error",
            "message" => "Email atau password salah"
        ]);
 }
?>