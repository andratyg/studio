
# Panduan Portofolio Nara - Backend Developer

Semua data portofolio Anda sekarang sangat mudah dikelola. Anda tidak perlu mengerti kode yang rumit, cukup edit file JSON di folder `src/lib/`.

## 📁 Di Mana Saya Harus Mengedit Data?

1.  **Tambah/Edit Proyek:**
    Buka file `src/lib/projects.json`.
    *   `imageUrl`: Masukkan link gambar atau path file gambar.
    *   `link`: Masukkan link GitHub proyek Anda.

2.  **Tambah/Edit Sertifikat & PDF:**
    Buka file `src/lib/certificates.json`.
    *   `pdfUrl`: Masukkan link file PDF sertifikat Anda. Jika file ada di komputer, upload ke folder `public/certs/` dan ganti isinya menjadi `/certs/nama-file.pdf`.

3.  **Ganti Foto Profil:**
    Buka file `src/lib/placeholder-images.json` dan ganti URL pada ID `profile-nara`.

## 🚀 Cara Menampilkan Gambar/PDF Sendiri
- **Gambar:** Masukkan foto ke folder `public/images/`.
- **PDF:** Masukkan file ke folder `public/certs/`.
- Lalu di file JSON, panggil dengan cara: `/images/foto.jpg` atau `/certs/file.pdf`.

## 🛠 Teknologi Utama
- Next.js 15 (Framework)
- Tailwind CSS (Desain)
- JSON Based Data (Kemudahan Update)
