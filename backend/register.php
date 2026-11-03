<?php
 header("Content-Type: application/json");

 require_once "db.php";

 $data = json_decode(file_get_contents("php://input"), true);
 
 $username = trim($data["username"] ?? "");
 $email = trim($data["email"] ?? "");
 $password = $data["password"] ?? "";
 
 if($username === "" || $email === "" || $password === ""){
    echo json_encode(["status" => "error", "message" => "semua field wajib diisi"]);
    exit;
 }

 $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
 $stmt->bind_param("s", $email);
 $stmt->execute();

 if($stmt->get_result()->num_rows > 0){
    echo json_encode([
        "status" => "failed",
        "message" => "email ini sudah terdaftar"
    ]);
    exit;
 }

 $hashed = password_hash($password, PASSWORD_DEFAULT);
 $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES(?, ?, ?)");
 $stmt->bind_param("sss", $username, $email, $hashed);
 $stmt->execute();
 echo json_encode([
    "status" => "success",
    "message" => "Registrasi Berhasil",
    "redirect" => "LgPgRRshoe.html"
 ]);
?>