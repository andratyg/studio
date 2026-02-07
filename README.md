
# Panduan Portofolio Nara - Backend Developer

Semua data portofolio Anda sekarang sangat mudah dikelola. Anda tidak perlu mengerti kode yang rumit, cukup edit file JSON di folder `src/lib/`.

## 📁 Di Mana Saya Harus Mengedit Data?

1.  **Tambah/Edit Proyek:**
    Buka file `src/lib/projects.json`.
    *   `imageUrl`: Masukkan link gambar atau path file gambar (contoh: `/images/foto.jpg`).
    *   `link`: Masukkan link GitHub proyek Anda.

2.  **Tambah/Edit Sertifikat & PDF:**
    Buka file `src/lib/certificates.json`.
    *   `pdfUrl`: Masukkan link file PDF atau path lokal (contoh: `/certs/sertifikat.pdf`).

3.  **Ganti Foto Profil:**
    Buka file `src/lib/placeholder-images.json` dan ganti URL pada ID `profile-nara`.

## 🚀 Cara Menampilkan Gambar/PDF Milik Sendiri
Agar gambar/PDF dari komputer Anda muncul di web:
- **Gambar:** Masukkan file foto ke folder `public/images/`.
- **PDF:** Masukkan file PDF ke folder `public/certs/`.
- **Cara Panggil:** Di file JSON, ganti isinya menjadi `/images/nama-file.jpg` atau `/certs/nama-file.pdf`.

## 🛠 Solusi Error Git (Rejected / Non-fast-forward)
Jika Anda melihat error saat `git push`, jalankan perintah ini di terminal:
1. `git pull origin main --rebase`
2. `git push -u origin main`

Atau jika Anda ingin menimpa paksa data di GitHub dengan data lokal:
`git push -u origin main --force`

## 🛠 Teknologi Utama
- Next.js 15 (Framework)
- Tailwind CSS (Desain)
- JSON Based Data (Kemudahan Update)
