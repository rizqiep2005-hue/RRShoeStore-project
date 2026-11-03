# RRshoe Store

Toko sepatu online sederhana (project belajar).

## Teknologi
HTML, CSS, JavaScript, PHP, MySQL

## Fitur
- Register (password di-hash dengan password_hash)
- Login (prepared statement + password_verify)
- Halaman produk dan pencarian produk
- Checkout (dalam pengembangan)

## Cara Menjalankan
1. Install XAMPP, nyalakan Apache dan MySQL
2. Taruh folder projek di `C:\xampp\htdocs\RRshoeProject`
3. Import `database.sql` lewat phpMyAdmin
4. Salin `backend/db.example.php` menjadi `backend/db.php`, sesuaikan isinya
5. Buka `http://localhost/RRshoeProject/frontend/LgPgRRshoe.html`

## Rencana Pengembangan
- Produk dinamis dari database
- Proteksi halaman dengan session
- Keranjang belanja